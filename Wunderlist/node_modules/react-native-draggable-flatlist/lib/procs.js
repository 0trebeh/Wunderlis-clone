"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
var or = react_native_reanimated_1.default.or, set = react_native_reanimated_1.default.set, cond = react_native_reanimated_1.default.cond, add = react_native_reanimated_1.default.add, sub = react_native_reanimated_1.default.sub, block = react_native_reanimated_1.default.block, eq = react_native_reanimated_1.default.eq, neq = react_native_reanimated_1.default.neq, and = react_native_reanimated_1.default.and, divide = react_native_reanimated_1.default.divide, greaterThan = react_native_reanimated_1.default.greaterThan, greaterOrEq = react_native_reanimated_1.default.greaterOrEq, not = react_native_reanimated_1.default.not, proc = react_native_reanimated_1.default.proc, Value = react_native_reanimated_1.default.Value, spring = react_native_reanimated_1.default.spring, lessThan = react_native_reanimated_1.default.lessThan, lessOrEq = react_native_reanimated_1.default.lessOrEq, multiply = react_native_reanimated_1.default.multiply;
if (!proc) {
    console.warn("Use reanimated > 1.3 for optimal perf");
    var procStub = function (cb) { return cb; };
    proc = procStub;
}
exports.getIsAfterActive = proc(function (currentIndex, activeIndex) {
    return greaterThan(currentIndex, activeIndex);
});
exports.getCellStart = proc(function (isAfterActive, offset, activeCellSize, scrollOffset) {
    return sub(cond(isAfterActive, sub(offset, activeCellSize), offset), scrollOffset);
});
exports.getOnChangeTranslate = proc(function (translate, isAfterActive, initialized, toValue, isPressedIn) {
    return block([
        cond(or(not(isAfterActive), initialized), [], set(initialized, 1)),
        cond(isPressedIn, set(toValue, translate))
    ]);
});
exports.hardReset = proc(function (position, finished, time, toValue) {
    return block([set(position, 0), set(finished, 0), set(time, 0), set(toValue, 0)]);
});
exports.setupCell = proc(function (currentIndex, initialized, size, offset, isAfterActive, translate, prevTrans, prevSpacerIndex, activeIndex, activeCellSize, hoverOffset, scrollOffset, isHovering, hoverTo, hasMoved, spacerIndex, toValue, position, time, finished, runSpring, onHasMoved, onChangeSpacerIndex, onFinished, isPressedIn, placeholderOffset) {
    return block([
        set(isAfterActive, exports.getIsAfterActive(currentIndex, activeIndex)),
        // Determining spacer index is hard to visualize.
        // see diagram here: https://i.imgur.com/jRPf5t3.jpg
        cond(isPressedIn, cond(isAfterActive, [
            cond(and(greaterOrEq(add(hoverOffset, activeCellSize), offset), lessThan(add(hoverOffset, activeCellSize), add(offset, divide(size, 2)))), set(spacerIndex, sub(currentIndex, 1))),
            cond(and(greaterOrEq(add(hoverOffset, activeCellSize), add(offset, divide(size, 2))), lessThan(add(hoverOffset, activeCellSize), add(offset, size))), set(spacerIndex, currentIndex))
        ], cond(lessThan(currentIndex, activeIndex), [
            cond(and(lessThan(hoverOffset, add(offset, size)), greaterOrEq(hoverOffset, add(offset, divide(size, 2)))), set(spacerIndex, add(currentIndex, 1))),
            cond(and(greaterOrEq(hoverOffset, offset), lessThan(hoverOffset, add(offset, divide(size, 2)))), set(spacerIndex, currentIndex))
        ]))),
        // Translate cell down if it is before active index and active cell has passed it.
        // Translate cell up if it is after the active index and active cell has passed it.
        cond(neq(currentIndex, activeIndex), set(translate, cond(cond(isAfterActive, lessOrEq(currentIndex, spacerIndex), greaterOrEq(currentIndex, spacerIndex)), cond(isHovering, cond(isAfterActive, multiply(activeCellSize, -1), activeCellSize), 0), 0))),
        // Set value hovering element will snap to once released
        cond(and(isHovering, eq(spacerIndex, currentIndex)), set(hoverTo, sub(offset, scrollOffset, cond(isAfterActive, sub(activeCellSize, size), 0) // Account for cells of differing size
        ))),
        set(toValue, translate),
        cond(and(isPressedIn, neq(translate, prevTrans)), [
            set(prevTrans, translate),
            exports.getOnChangeTranslate(translate, isAfterActive, initialized, toValue, isPressedIn),
            cond(hasMoved, onHasMoved, set(position, translate))
        ]),
        cond(neq(prevSpacerIndex, spacerIndex), [
            set(prevSpacerIndex, spacerIndex),
            cond(eq(spacerIndex, -1), [
                // Hard reset to prevent stale state bugs
                onChangeSpacerIndex,
                exports.hardReset(position, finished, time, toValue)
            ])
        ]),
        runSpring,
        cond(finished, [onFinished, set(time, 0), set(finished, 0)]),
        cond(eq(spacerIndex, currentIndex), set(placeholderOffset, cond(isAfterActive, add(sub(offset, activeCellSize), size), offset))),
        position
    ]);
});
var betterSpring = proc(function (finished, velocity, position, time, prevPosition, toValue, damping, mass, stiffness, overshootClamping, restSpeedThreshold, restDisplacementThreshold, clock) {
    return spring(clock, {
        finished: finished,
        velocity: velocity,
        position: position,
        time: time,
        // @ts-ignore -- https://github.com/software-mansion/react-native-reanimated/blob/master/src/animations/spring.js#L177
        prevPosition: prevPosition
    }, {
        toValue: toValue,
        damping: damping,
        mass: mass,
        stiffness: stiffness,
        overshootClamping: overshootClamping,
        restDisplacementThreshold: restDisplacementThreshold,
        restSpeedThreshold: restSpeedThreshold
    });
});
function springFill(clock, state, config) {
    return betterSpring(state.finished, state.velocity, state.position, state.time, new Value(0), config.toValue, config.damping, config.mass, config.stiffness, 
    //@ts-ignore
    config.overshootClamping, config.restSpeedThreshold, config.restDisplacementThreshold, clock);
}
exports.springFill = springFill;
