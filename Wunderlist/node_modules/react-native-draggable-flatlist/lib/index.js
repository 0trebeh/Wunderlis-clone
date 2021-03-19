"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
var procs_1 = require("./procs");
var AnimatedFlatList = react_native_reanimated_1.default.createAnimatedComponent(react_native_gesture_handler_1.FlatList);
var Value = react_native_reanimated_1.default.Value, abs = react_native_reanimated_1.default.abs, set = react_native_reanimated_1.default.set, cond = react_native_reanimated_1.default.cond, add = react_native_reanimated_1.default.add, sub = react_native_reanimated_1.default.sub, event = react_native_reanimated_1.default.event, block = react_native_reanimated_1.default.block, eq = react_native_reanimated_1.default.eq, neq = react_native_reanimated_1.default.neq, and = react_native_reanimated_1.default.and, or = react_native_reanimated_1.default.or, call = react_native_reanimated_1.default.call, onChange = react_native_reanimated_1.default.onChange, divide = react_native_reanimated_1.default.divide, greaterThan = react_native_reanimated_1.default.greaterThan, greaterOrEq = react_native_reanimated_1.default.greaterOrEq, lessOrEq = react_native_reanimated_1.default.lessOrEq, not = react_native_reanimated_1.default.not, Clock = react_native_reanimated_1.default.Clock, clockRunning = react_native_reanimated_1.default.clockRunning, startClock = react_native_reanimated_1.default.startClock, stopClock = react_native_reanimated_1.default.stopClock, spring = react_native_reanimated_1.default.spring, defined = react_native_reanimated_1.default.defined, min = react_native_reanimated_1.default.min, max = react_native_reanimated_1.default.max, debug = react_native_reanimated_1.default.debug;
// Fire onScrollComplete when within this many
// px of target offset
var scrollPositionTolerance = 2;
var defaultAnimationConfig = {
    damping: 20,
    mass: 0.2,
    stiffness: 100,
    overshootClamping: false,
    restSpeedThreshold: 0.2,
    restDisplacementThreshold: 0.2
};
var defaultProps = {
    autoscrollThreshold: 30,
    autoscrollSpeed: 100,
    animationConfig: defaultAnimationConfig,
    scrollEnabled: true,
    dragHitSlop: 0,
    activationDistance: 0,
    dragItemOverflow: false
};
// Run callback on next paint:
// https://stackoverflow.com/questions/26556436/react-after-render-code
function onNextFrame(callback) {
    setTimeout(function () {
        requestAnimationFrame(callback);
    });
}
var DraggableFlatList = /** @class */ (function (_super) {
    __extends(DraggableFlatList, _super);
    function DraggableFlatList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeKey: null,
            hoverComponent: null
        };
        _this.containerRef = react_1.default.createRef();
        _this.flatlistRef = react_1.default.createRef();
        _this.panGestureHandlerRef = react_1.default.createRef();
        _this.containerSize = new Value(0);
        _this.touchInit = new Value(0); // Position of initial touch
        _this.activationDistance = new Value(0); // Distance finger travels from initial touch to when dragging begins
        _this.touchAbsolute = new Value(0); // Finger position on screen, relative to container
        _this.panGestureState = new Value(react_native_gesture_handler_1.State.UNDETERMINED);
        _this.isPressedIn = {
            native: new Value(0),
            js: false
        };
        _this.hasMoved = new Value(0);
        _this.disabled = new Value(0);
        _this.activeIndex = new Value(-1); // Index of hovering cell
        _this.spacerIndex = new Value(-1); // Index of hovered-over cell
        _this.isHovering = greaterThan(_this.activeIndex, -1);
        _this.activeCellSize = new Value(0); // Height or width of acctive cell
        _this.activeCellOffset = new Value(0); // Distance between active cell and edge of container
        _this.scrollOffset = new Value(0);
        _this.scrollViewSize = new Value(0);
        _this.isScrolledUp = lessOrEq(sub(_this.scrollOffset, scrollPositionTolerance), 0);
        _this.isScrolledDown = greaterOrEq(add(_this.scrollOffset, _this.containerSize, scrollPositionTolerance), _this.scrollViewSize);
        _this.touchCellOffset = sub(_this.touchInit, _this.activeCellOffset); // Distance between touch point and edge of cell
        _this.hoverAnimUnconstrained = sub(sub(_this.touchAbsolute, _this.activationDistance), _this.touchCellOffset);
        _this.hoverAnimConstrained = min(sub(_this.containerSize, _this.activeCellSize), max(0, _this.hoverAnimUnconstrained));
        _this.hoverAnim = _this.props.dragItemOverflow
            ? _this.hoverAnimUnconstrained
            : _this.hoverAnimConstrained;
        _this.hoverMid = add(_this.hoverAnim, divide(_this.activeCellSize, 2));
        _this.hoverOffset = add(_this.hoverAnim, _this.scrollOffset);
        _this.placeholderOffset = new Value(0);
        _this.placeholderPos = sub(_this.placeholderOffset, _this.scrollOffset);
        _this.hoverTo = new Value(0);
        _this.hoverClock = new Clock();
        _this.hoverAnimState = {
            finished: new Value(0),
            velocity: new Value(0),
            position: new Value(0),
            time: new Value(0)
        };
        _this.hoverAnimConfig = __assign(__assign(__assign({}, defaultAnimationConfig), _this.props.animationConfig), { toValue: _this.hoverTo });
        _this.distToTopEdge = max(0, _this.hoverAnim);
        _this.distToBottomEdge = max(0, sub(_this.containerSize, add(_this.hoverAnim, _this.activeCellSize)));
        _this.cellAnim = new Map();
        _this.cellData = new Map();
        _this.cellRefs = new Map();
        _this.moveEndParams = [_this.activeIndex, _this.spacerIndex];
        _this.resetHoverSpring = [
            set(_this.touchAbsolute, _this.hoverAnimConfig.toValue),
            set(_this.touchInit, 0),
            set(_this.activeCellOffset, 0),
            set(_this.activationDistance, 0),
            set(_this.hoverAnimState.position, _this.hoverAnimConfig.toValue),
            set(_this.hoverAnimState.time, 0),
            set(_this.hoverAnimState.finished, 0),
            set(_this.hoverAnimState.velocity, 0),
            set(_this.hasMoved, 0)
        ];
        _this.keyToIndex = new Map();
        _this.isAutoScrollInProgress = {
            native: new Value(0),
            js: false
        };
        _this.queue = [];
        _this.dataKeysHaveChanged = function (a, b) {
            var lengthHasChanged = a.length !== b.length;
            if (lengthHasChanged)
                return true;
            var aKeys = a.map(function (d, i) { return _this.keyExtractor(d, i); });
            var bKeys = b.map(function (d, i) { return _this.keyExtractor(d, i); });
            var sameKeys = aKeys.every(function (k) { return bKeys.includes(k); });
            return !sameKeys;
        };
        _this.componentDidUpdate = function (prevProps, prevState) { return __awaiter(_this, void 0, void 0, function () {
            var layoutInvalidationKeyHasChanged, dataHasChanged, index, cellData;
            var _this = this;
            return __generator(this, function (_a) {
                layoutInvalidationKeyHasChanged = prevProps.layoutInvalidationKey !== this.props.layoutInvalidationKey;
                dataHasChanged = prevProps.data !== this.props.data;
                if (layoutInvalidationKeyHasChanged || dataHasChanged) {
                    this.props.data.forEach(function (item, index) {
                        var key = _this.keyExtractor(item, index);
                        _this.keyToIndex.set(key, index);
                    });
                    // Remeasure on next paint
                    this.updateCellData(this.props.data);
                    onNextFrame(this.flushQueue);
                    if (layoutInvalidationKeyHasChanged ||
                        this.dataKeysHaveChanged(prevProps.data, this.props.data)) {
                        this.queue.push(function () { return _this.measureAll(_this.props.data); });
                    }
                }
                if (!prevState.activeKey && this.state.activeKey) {
                    index = this.keyToIndex.get(this.state.activeKey);
                    if (index !== undefined) {
                        this.spacerIndex.setValue(index);
                        this.activeIndex.setValue(index);
                        this.isPressedIn.native.setValue(1);
                    }
                    cellData = this.cellData.get(this.state.activeKey);
                    if (cellData) {
                        this.activeCellOffset.setValue(sub(cellData.offset, this.scrollOffset));
                        this.activeCellSize.setValue(cellData.measurements.size);
                    }
                }
                return [2 /*return*/];
            });
        }); };
        _this.flushQueue = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.queue.forEach(function (fn) { return fn(); });
                this.queue = [];
                return [2 /*return*/];
            });
        }); };
        _this.resetHoverState = function () {
            _this.activeIndex.setValue(-1);
            _this.spacerIndex.setValue(-1);
            _this.touchAbsolute.setValue(0);
            _this.disabled.setValue(0);
            if (_this.state.hoverComponent !== null || _this.state.activeKey !== null) {
                _this.setState({
                    hoverComponent: null,
                    activeKey: null
                });
            }
        };
        _this.drag = function (hoverComponent, activeKey) {
            if (_this.state.hoverComponent) {
                // We can't drag more than one row at a time
                // TODO: Put action on queue?
                if (_this.props.debug)
                    console.log("## Can't set multiple active items");
            }
            else {
                _this.isPressedIn.js = true;
                _this.setState({
                    activeKey: activeKey,
                    hoverComponent: hoverComponent
                }, function () {
                    var index = _this.keyToIndex.get(activeKey);
                    var onDragBegin = _this.props.onDragBegin;
                    if (index !== undefined && onDragBegin) {
                        onDragBegin(index);
                    }
                });
            }
        };
        _this.onRelease = function (_a) {
            var index = _a[0];
            var onRelease = _this.props.onRelease;
            _this.isPressedIn.js = false;
            onRelease && onRelease(index);
        };
        _this.onDragEnd = function (_a) {
            var from = _a[0], to = _a[1];
            var onDragEnd = _this.props.onDragEnd;
            if (onDragEnd) {
                var data = _this.props.data;
                var newData = __spreadArrays(data);
                if (from !== to) {
                    newData.splice(from, 1);
                    newData.splice(to, 0, data[from]);
                }
                onDragEnd({ from: from, to: to, data: newData });
            }
            var lo = Math.min(from, to) - 1;
            var hi = Math.max(from, to) + 1;
            var _loop_1 = function (i) {
                _this.queue.push(function () {
                    var item = _this.props.data[i];
                    if (!item)
                        return;
                    var key = _this.keyExtractor(item, i);
                    return _this.measureCell(key);
                });
            };
            for (var i = lo; i < hi; i++) {
                _loop_1(i);
            }
            _this.resetHoverState();
        };
        _this.updateCellData = function (data) {
            if (data === void 0) { data = []; }
            return data.forEach(function (item, index) {
                var key = _this.keyExtractor(item, index);
                var cell = _this.cellData.get(key);
                if (cell)
                    cell.currentIndex.setValue(index);
            });
        };
        _this.setCellData = function (key, index) {
            var clock = new Clock();
            var currentIndex = new Value(index);
            var config = __assign(__assign({}, _this.hoverAnimConfig), { toValue: new Value(0) });
            var state = {
                position: new Value(0),
                velocity: new Value(0),
                time: new Value(0),
                finished: new Value(0)
            };
            _this.cellAnim.set(key, { clock: clock, state: state, config: config });
            var initialized = new Value(0);
            var size = new Value(0);
            var offset = new Value(0);
            var isAfterActive = new Value(0);
            var translate = new Value(0);
            var runSrping = cond(clockRunning(clock), procs_1.springFill(clock, state, config));
            var onHasMoved = startClock(clock);
            var onChangeSpacerIndex = cond(clockRunning(clock), stopClock(clock));
            var onFinished = stopClock(clock);
            var prevTrans = new Value(0);
            var prevSpacerIndex = new Value(-1);
            var anim = procs_1.setupCell(currentIndex, initialized, size, offset, isAfterActive, translate, prevTrans, prevSpacerIndex, _this.activeIndex, _this.activeCellSize, _this.hoverOffset, _this.scrollOffset, _this.isHovering, _this.hoverTo, _this.hasMoved, _this.spacerIndex, config.toValue, state.position, state.time, state.finished, runSrping, onHasMoved, onChangeSpacerIndex, onFinished, _this.isPressedIn.native, _this.placeholderOffset);
            var transform = _this.props.horizontal
                ? [{ translateX: anim }]
                : [{ translateY: anim }];
            var style = {
                transform: transform
            };
            var cellData = {
                initialized: initialized,
                currentIndex: currentIndex,
                size: size,
                offset: offset,
                style: style,
                onLayout: function () {
                    if (_this.state.activeKey !== key)
                        _this.measureCell(key);
                },
                onUnmount: function () { return initialized.setValue(0); },
                measurements: {
                    size: 0,
                    offset: 0
                }
            };
            _this.cellData.set(key, cellData);
        };
        _this.measureAll = function (data) {
            data.forEach(function (d, i) {
                var key = _this.keyExtractor(d, i);
                _this.measureCell(key);
            });
        };
        _this.measureCell = function (key) {
            return new Promise(function (resolve, reject) {
                var horizontal = _this.props.horizontal;
                var onSuccess = function (x, y, w, h) {
                    var activeKey = _this.state.activeKey;
                    var isHovering = activeKey !== null;
                    var cellData = _this.cellData.get(key);
                    var thisKeyIndex = _this.keyToIndex.get(key);
                    var activeKeyIndex = activeKey
                        ? _this.keyToIndex.get(activeKey)
                        : undefined;
                    var baseOffset = horizontal ? x : y;
                    var extraOffset = 0;
                    if (thisKeyIndex !== undefined &&
                        activeKeyIndex !== undefined &&
                        activeKey) {
                        var isAfterActive = thisKeyIndex > activeKeyIndex;
                        var activeCellData = _this.cellData.get(activeKey);
                        if (isHovering && isAfterActive && activeCellData) {
                            extraOffset = activeCellData.measurements.size;
                        }
                    }
                    var size = horizontal ? w : h;
                    var offset = baseOffset + extraOffset;
                    if (_this.props.debug)
                        console.log("measure key " + key + ": width " + w + " height " + h + " x " + x + " y " + y + " size " + size + " offset " + offset);
                    if (cellData) {
                        cellData.size.setValue(size);
                        cellData.offset.setValue(offset);
                        cellData.measurements.size = size;
                        cellData.measurements.offset = offset;
                    }
                    // remeasure on next layout if hovering
                    if (isHovering)
                        _this.queue.push(function () { return _this.measureCell(key); });
                    resolve();
                };
                var onFail = function () {
                    if (_this.props.debug)
                        console.log("## measureLayout fail!", key);
                };
                var ref = _this.cellRefs.get(key);
                var viewNode = ref && ref.current && ref.current.getNode();
                var flatListNode = _this.flatlistRef.current && _this.flatlistRef.current.getNode();
                if (viewNode && flatListNode) {
                    var nodeHandle = react_native_1.findNodeHandle(flatListNode);
                    if (nodeHandle)
                        viewNode.measureLayout(nodeHandle, onSuccess, onFail);
                }
                else {
                    var reason = !ref
                        ? "no ref"
                        : !flatListNode
                            ? "no flatlist node"
                            : "invalid ref";
                    if (_this.props.debug)
                        console.log("## can't measure " + key + " reason: " + reason);
                    _this.queue.push(function () { return _this.measureCell(key); });
                    return resolve();
                }
            });
        };
        _this.keyExtractor = function (item, index) {
            if (_this.props.keyExtractor)
                return _this.props.keyExtractor(item, index);
            else
                throw new Error("You must provide a keyExtractor to DraggableFlatList");
        };
        _this.onContainerLayout = function () {
            var horizontal = _this.props.horizontal;
            var containerRef = _this.containerRef.current;
            if (containerRef) {
                containerRef.getNode().measure(function (x, y, w, h) {
                    _this.containerSize.setValue(horizontal ? w : h);
                });
            }
        };
        _this.onListContentSizeChange = function (w, h) {
            _this.scrollViewSize.setValue(_this.props.horizontal ? w : h);
            if (_this.props.onContentSizeChange)
                _this.props.onContentSizeChange(w, h);
        };
        _this.targetScrollOffset = new Value(0);
        _this.onAutoscrollComplete = function (params) {
            _this.isAutoScrollInProgress.js = false;
            if (_this.resolveAutoscroll)
                _this.resolveAutoscroll(params);
        };
        _this.scrollToAsync = function (offset) {
            return new Promise(function (resolve, reject) {
                _this.resolveAutoscroll = resolve;
                _this.targetScrollOffset.setValue(offset);
                _this.isAutoScrollInProgress.native.setValue(1);
                _this.isAutoScrollInProgress.js = true;
                var flatlistRef = _this.flatlistRef.current;
                if (flatlistRef)
                    flatlistRef.getNode().scrollToOffset({ offset: offset });
            });
        };
        _this.getScrollTargetOffset = function (distFromTop, distFromBottom, scrollOffset, isScrolledUp, isScrolledDown) {
            if (_this.isAutoScrollInProgress.js)
                return -1;
            var _a = _this.props, autoscrollThreshold = _a.autoscrollThreshold, autoscrollSpeed = _a.autoscrollSpeed;
            var scrollUp = distFromTop < autoscrollThreshold;
            var scrollDown = distFromBottom < autoscrollThreshold;
            if (!(scrollUp || scrollDown) ||
                (scrollUp && isScrolledUp) ||
                (scrollDown && isScrolledDown))
                return -1;
            var distFromEdge = scrollUp ? distFromTop : distFromBottom;
            var speedPct = 1 - distFromEdge / autoscrollThreshold;
            // Android scroll speed seems much faster than ios
            var speed = react_native_1.Platform.OS === "ios" ? autoscrollSpeed : autoscrollSpeed / 10;
            var offset = speedPct * speed;
            var targetOffset = scrollUp
                ? Math.max(0, scrollOffset - offset)
                : scrollOffset + offset;
            return targetOffset;
        };
        // Ensure that only 1 call to autoscroll is active at a time
        _this.autoscrollLooping = false;
        _this.autoscroll = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var shouldScroll, curParams, distFromTop, distFromBottom, scrollOffset, isScrolledUp, isScrolledDown, targetOffset, scrollingUpAtTop, scrollingDownAtBottom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.autoscrollLooping) {
                            return [2 /*return*/];
                        }
                        this.autoscrollLooping = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 6, 7]);
                        shouldScroll = true;
                        curParams = params;
                        _a.label = 2;
                    case 2:
                        if (!shouldScroll) return [3 /*break*/, 5];
                        distFromTop = curParams[0], distFromBottom = curParams[1], scrollOffset = curParams[2], isScrolledUp = curParams[3], isScrolledDown = curParams[4];
                        targetOffset = this.getScrollTargetOffset(distFromTop, distFromBottom, scrollOffset, !!isScrolledUp, !!isScrolledDown);
                        scrollingUpAtTop = !!(isScrolledUp && targetOffset <= scrollOffset);
                        scrollingDownAtBottom = !!(isScrolledDown && targetOffset >= scrollOffset);
                        shouldScroll =
                            targetOffset >= 0 &&
                                this.isPressedIn.js &&
                                !scrollingUpAtTop &&
                                !scrollingDownAtBottom;
                        if (!shouldScroll) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.scrollToAsync(targetOffset)];
                    case 3:
                        curParams = _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.autoscrollLooping = false;
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.isAtTopEdge = lessOrEq(_this.distToTopEdge, _this.props.autoscrollThreshold);
        _this.isAtBottomEdge = lessOrEq(_this.distToBottomEdge, _this.props.autoscrollThreshold);
        _this.isAtEdge = or(_this.isAtBottomEdge, _this.isAtTopEdge);
        _this.autoscrollParams = [
            _this.distToTopEdge,
            _this.distToBottomEdge,
            _this.scrollOffset,
            _this.isScrolledUp,
            _this.isScrolledDown
        ];
        _this.checkAutoscroll = cond(and(_this.isAtEdge, not(and(_this.isAtTopEdge, _this.isScrolledUp)), not(and(_this.isAtBottomEdge, _this.isScrolledDown)), eq(_this.panGestureState, react_native_gesture_handler_1.State.ACTIVE), not(_this.isAutoScrollInProgress.native)), call(_this.autoscrollParams, _this.autoscroll));
        _this.onScroll = event([
            {
                nativeEvent: function (_a) {
                    var contentOffset = _a.contentOffset;
                    return block([
                        set(_this.scrollOffset, _this.props.horizontal ? contentOffset.x : contentOffset.y),
                        cond(and(_this.isAutoScrollInProgress.native, or(
                        // We've scrolled to where we want to be
                        lessOrEq(abs(sub(_this.targetScrollOffset, _this.scrollOffset)), scrollPositionTolerance), 
                        // We're at the start, but still want to scroll farther up
                        and(_this.isScrolledUp, lessOrEq(_this.targetScrollOffset, _this.scrollOffset)), 
                        // We're at the end, but still want to scroll further down
                        and(_this.isScrolledDown, greaterOrEq(_this.targetScrollOffset, _this.scrollOffset)))), [
                            // Finish scrolling
                            set(_this.isAutoScrollInProgress.native, 0),
                            call(_this.autoscrollParams, _this.onAutoscrollComplete)
                        ])
                    ]);
                }
            }
        ]);
        _this.onGestureRelease = [
            cond(_this.isHovering, [
                set(_this.disabled, 1),
                cond(defined(_this.hoverClock), [
                    cond(clockRunning(_this.hoverClock), [stopClock(_this.hoverClock)]),
                    set(_this.hoverAnimState.position, _this.hoverAnim),
                    startClock(_this.hoverClock)
                ]),
                [
                    call([_this.activeIndex], _this.onRelease),
                    cond(not(_this.hasMoved), call([_this.activeIndex], _this.resetHoverState))
                ]
            ], call([_this.activeIndex], _this.resetHoverState))
        ];
        _this.onPanStateChange = event([
            {
                nativeEvent: function (_a) {
                    var state = _a.state, x = _a.x, y = _a.y;
                    return cond(and(neq(state, _this.panGestureState), not(_this.disabled)), [
                        cond(or(eq(state, react_native_gesture_handler_1.State.BEGAN), // Called on press in on Android, NOT on ios!
                        // GestureState.BEGAN may be skipped on fast swipes
                        and(eq(state, react_native_gesture_handler_1.State.ACTIVE), neq(_this.panGestureState, react_native_gesture_handler_1.State.BEGAN))), [
                            set(_this.touchAbsolute, _this.props.horizontal ? x : y),
                            set(_this.touchInit, _this.touchAbsolute)
                        ]),
                        cond(eq(state, react_native_gesture_handler_1.State.ACTIVE), [
                            set(_this.activationDistance, sub(_this.props.horizontal ? x : y, _this.touchInit)),
                            set(_this.touchAbsolute, _this.props.horizontal ? x : y)
                        ]),
                        cond(neq(_this.panGestureState, state), set(_this.panGestureState, state)),
                        cond(or(eq(state, react_native_gesture_handler_1.State.END), eq(state, react_native_gesture_handler_1.State.CANCELLED), eq(state, react_native_gesture_handler_1.State.FAILED)), _this.onGestureRelease)
                    ]);
                }
            }
        ]);
        _this.onPanGestureEvent = event([
            {
                nativeEvent: function (_a) {
                    var x = _a.x, y = _a.y;
                    return cond(and(_this.isHovering, eq(_this.panGestureState, react_native_gesture_handler_1.State.ACTIVE), not(_this.disabled)), [
                        cond(not(_this.hasMoved), set(_this.hasMoved, 1)),
                        [set(_this.touchAbsolute, _this.props.horizontal ? x : y)]
                    ]);
                }
            }
        ]);
        _this.hoverComponentTranslate = cond(clockRunning(_this.hoverClock), _this.hoverAnimState.position, _this.hoverAnim);
        _this.hoverComponentOpacity = and(_this.isHovering, neq(_this.panGestureState, react_native_gesture_handler_1.State.CANCELLED));
        _this.renderHoverComponent = function () {
            var _a;
            var hoverComponent = _this.state.hoverComponent;
            var horizontal = _this.props.horizontal;
            return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: [
                    horizontal
                        ? styles.hoverComponentHorizontal
                        : styles.hoverComponentVertical,
                    {
                        opacity: _this.hoverComponentOpacity,
                        transform: [
                            (_a = {},
                                _a["translate" + (horizontal ? "X" : "Y")] = _this
                                    .hoverComponentTranslate,
                                _a)
                        ]
                    }
                ] }, hoverComponent));
        };
        _this.renderItem = function (_a) {
            var item = _a.item, index = _a.index;
            var key = _this.keyExtractor(item, index);
            if (index !== _this.keyToIndex.get(key))
                _this.keyToIndex.set(key, index);
            var renderItem = _this.props.renderItem;
            if (!_this.cellData.get(key))
                _this.setCellData(key, index);
            var onUnmount = (_this.cellData.get(key) || {
                onUnmount: function () {
                    if (_this.props.debug)
                        console.log("## error, no cellData");
                }
            }).onUnmount;
            return (react_1.default.createElement(RowItem, { extraData: _this.props.extraData, itemKey: key, keyToIndex: _this.keyToIndex, renderItem: renderItem, item: item, drag: _this.drag, onUnmount: onUnmount }));
        };
        _this.renderOnPlaceholderIndexChange = function () { return (react_1.default.createElement(react_native_reanimated_1.default.Code, { dependencies: [] }, function () {
            return block([
                onChange(_this.spacerIndex, call([_this.spacerIndex], function (_a) {
                    var spacerIndex = _a[0];
                    return _this.props.onPlaceholderIndexChange(spacerIndex);
                }))
            ]);
        })); };
        _this.renderPlaceholder = function () {
            var _a, _b;
            var _c = _this.props, renderPlaceholder = _c.renderPlaceholder, horizontal = _c.horizontal;
            var activeKey = _this.state.activeKey;
            if (!activeKey || !renderPlaceholder)
                return null;
            var activeIndex = _this.keyToIndex.get(activeKey);
            if (activeIndex === undefined)
                return null;
            var activeItem = _this.props.data[activeIndex];
            var translateKey = horizontal ? "translateX" : "translateY";
            var sizeKey = horizontal ? "width" : "height";
            var style = __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), (_a = {}, _a[sizeKey] = _this.activeCellSize, _a.transform = [
                (_b = {}, _b[translateKey] = _this.placeholderPos, _b)
            ], _a));
            return (react_1.default.createElement(react_native_reanimated_1.default.View, { style: style }, renderPlaceholder({ item: activeItem, index: activeIndex })));
        };
        _this.CellRendererComponent = function (cellProps) {
            var item = cellProps.item, index = cellProps.index, children = cellProps.children, onLayout = cellProps.onLayout;
            var horizontal = _this.props.horizontal;
            var activeKey = _this.state.activeKey;
            var key = _this.keyExtractor(item, index);
            if (!_this.cellData.get(key))
                _this.setCellData(key, index);
            var cellData = _this.cellData.get(key);
            if (!cellData)
                return null;
            var style = cellData.style, onCellLayout = cellData.onLayout;
            var ref = _this.cellRefs.get(key);
            if (!ref) {
                ref = react_1.default.createRef();
                _this.cellRefs.set(key, ref);
            }
            var isActiveCell = activeKey === key;
            return (react_1.default.createElement(react_native_reanimated_1.default.View, { onLayout: onLayout, style: style },
                react_1.default.createElement(react_native_reanimated_1.default.View, { pointerEvents: activeKey ? "none" : "auto", style: {
                        flexDirection: horizontal ? "row" : "column"
                    } },
                    react_1.default.createElement(react_native_reanimated_1.default.View, { ref: ref, onLayout: onCellLayout, style: isActiveCell ? { opacity: 0 } : undefined }, children))));
        };
        _this.onContainerTouchEnd = function () {
            _this.isPressedIn.native.setValue(0);
        };
        var data = props.data, onRef = props.onRef;
        data.forEach(function (item, index) {
            var key = _this.keyExtractor(item, index);
            _this.keyToIndex.set(key, index);
        });
        onRef && onRef(_this.flatlistRef);
        return _this;
    }
    DraggableFlatList.getDerivedStateFromProps = function (props) {
        return {
            extraData: props.extraData
        };
    };
    DraggableFlatList.prototype.renderDebug = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_reanimated_1.default.Code, { dependencies: [] }, function () {
            return block([
                onChange(_this.spacerIndex, debug("spacerIndex: ", _this.spacerIndex))
            ]);
        }));
    };
    DraggableFlatList.prototype.render = function () {
        var _this = this;
        var _a = this.props, dragHitSlop = _a.dragHitSlop, scrollEnabled = _a.scrollEnabled, horizontal = _a.horizontal, activationDistance = _a.activationDistance, onScrollOffsetChange = _a.onScrollOffsetChange, renderPlaceholder = _a.renderPlaceholder, onPlaceholderIndexChange = _a.onPlaceholderIndexChange, containerStyle = _a.containerStyle;
        var hoverComponent = this.state.hoverComponent;
        var dynamicProps = {};
        if (activationDistance) {
            var activeOffset = [-activationDistance, activationDistance];
            dynamicProps = horizontal
                ? { activeOffsetX: activeOffset }
                : { activeOffsetY: activeOffset };
        }
        return (react_1.default.createElement(react_native_gesture_handler_1.PanGestureHandler, __assign({ ref: this.panGestureHandlerRef, hitSlop: dragHitSlop, onGestureEvent: this.onPanGestureEvent, onHandlerStateChange: this.onPanStateChange }, dynamicProps),
            react_1.default.createElement(react_native_reanimated_1.default.View, { style: [styles.flex, containerStyle], ref: this.containerRef, onLayout: this.onContainerLayout, onTouchEnd: this.onContainerTouchEnd },
                !!onPlaceholderIndexChange && this.renderOnPlaceholderIndexChange(),
                !!renderPlaceholder && this.renderPlaceholder(),
                react_1.default.createElement(AnimatedFlatList, __assign({}, this.props, { CellRendererComponent: this.CellRendererComponent, ref: this.flatlistRef, onContentSizeChange: this.onListContentSizeChange, scrollEnabled: !hoverComponent && scrollEnabled, renderItem: this.renderItem, extraData: this.state, keyExtractor: this.keyExtractor, onScroll: this.onScroll, scrollEventThrottle: 1 })),
                !!hoverComponent && this.renderHoverComponent(),
                react_1.default.createElement(react_native_reanimated_1.default.Code, { dependencies: [] }, function () {
                    return block([
                        onChange(_this.isPressedIn.native, cond(not(_this.isPressedIn.native), _this.onGestureRelease)),
                        // This onChange handles autoscroll checking BUT it also ensures that
                        // hover translation is continually evaluated. Removing it causes a flicker.
                        onChange(_this.hoverComponentTranslate, _this.checkAutoscroll),
                        cond(clockRunning(_this.hoverClock), [
                            spring(_this.hoverClock, _this.hoverAnimState, _this.hoverAnimConfig),
                            cond(eq(_this.hoverAnimState.finished, 1), [
                                _this.resetHoverSpring,
                                stopClock(_this.hoverClock),
                                call(_this.moveEndParams, _this.onDragEnd),
                                set(_this.hasMoved, 0)
                            ])
                        ])
                    ]);
                }),
                onScrollOffsetChange && (react_1.default.createElement(react_native_reanimated_1.default.Code, { dependencies: [] }, function () {
                    return onChange(_this.scrollOffset, call([_this.scrollOffset], function (_a) {
                        var offset = _a[0];
                        return onScrollOffsetChange(offset);
                    }));
                })),
                !!this.props.debug && this.renderDebug())));
    };
    DraggableFlatList.defaultProps = defaultProps;
    return DraggableFlatList;
}(react_1.default.Component));
exports.default = DraggableFlatList;
var RowItem = /** @class */ (function (_super) {
    __extends(RowItem, _super);
    function RowItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drag = function () {
            var _a = _this.props, drag = _a.drag, renderItem = _a.renderItem, item = _a.item, keyToIndex = _a.keyToIndex, itemKey = _a.itemKey, debug = _a.debug;
            var hoverComponent = renderItem({
                isActive: true,
                item: item,
                index: keyToIndex.get(itemKey),
                drag: function () {
                    if (debug)
                        console.log("## attempt to call drag() on hovering component");
                }
            });
            drag(hoverComponent, itemKey);
        };
        return _this;
    }
    RowItem.prototype.componentWillUnmount = function () {
        this.props.onUnmount();
    };
    RowItem.prototype.render = function () {
        var _a = this.props, renderItem = _a.renderItem, item = _a.item, keyToIndex = _a.keyToIndex, itemKey = _a.itemKey;
        return renderItem({
            isActive: false,
            item: item,
            index: keyToIndex.get(itemKey),
            drag: this.drag
        });
    };
    return RowItem;
}(react_1.default.PureComponent));
var styles = react_native_1.StyleSheet.create({
    flex: {
        flex: 1
    },
    hoverComponentVertical: {
        position: "absolute",
        left: 0,
        right: 0
    },
    hoverComponentHorizontal: {
        position: "absolute",
        bottom: 0,
        top: 0
    }
});
