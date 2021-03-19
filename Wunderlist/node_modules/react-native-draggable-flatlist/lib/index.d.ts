import React from "react";
import { FlatListProps, ViewStyle, FlatList as RNFlatList, StyleProp } from "react-native";
import { PanGestureHandler, State as GestureState } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
declare const defaultProps: {
    autoscrollThreshold: number;
    autoscrollSpeed: number;
    animationConfig: Animated.SpringConfig;
    scrollEnabled: boolean;
    dragHitSlop: number | {
        left?: number | undefined;
        right?: number | undefined;
        top?: number | undefined;
        bottom?: number | undefined;
        vertical?: number | undefined;
        horizontal?: number | undefined;
    } | {
        width: number;
        left: number;
    } | {
        width: number;
        right: number;
    } | {
        height: number;
        top: number;
    } | {
        height: number;
        bottom: number;
    } | undefined;
    activationDistance: number;
    dragItemOverflow: boolean;
};
declare type DefaultProps = Readonly<typeof defaultProps>;
declare type AnimatedFlatListType<T> = {
    getNode: () => RNFlatList<T>;
};
export declare type DragEndParams<T> = {
    data: T[];
    from: number;
    to: number;
};
export declare type RenderItemParams<T> = {
    item: T;
    index?: number;
    drag: () => void;
    isActive: boolean;
};
declare type Modify<T, R> = Omit<T, keyof R> & R;
export declare type DraggableFlatListProps<T> = Modify<FlatListProps<T>, {
    autoscrollSpeed?: number;
    autoscrollThreshold?: number;
    data: T[];
    onRef?: (ref: React.RefObject<AnimatedFlatListType<T>>) => void;
    onDragBegin?: (index: number) => void;
    onRelease?: (index: number) => void;
    onDragEnd?: (params: DragEndParams<T>) => void;
    renderItem: (params: RenderItemParams<T>) => React.ReactNode;
    renderPlaceholder?: (params: {
        item: T;
        index: number;
    }) => React.ReactNode;
    animationConfig: Partial<Animated.SpringConfig>;
    activationDistance?: number;
    debug?: boolean;
    layoutInvalidationKey?: string;
    onScrollOffsetChange?: (scrollOffset: number) => void;
    onPlaceholderIndexChange?: (placeholderIndex: number) => void;
    containerStyle?: StyleProp<ViewStyle>;
    dragItemOverflow?: boolean;
} & Partial<DefaultProps>>;
declare type State = {
    activeKey: string | null;
    hoverComponent: React.ReactNode | null;
};
declare type CellData = {
    size: Animated.Value<number>;
    offset: Animated.Value<number>;
    measurements: {
        size: number;
        offset: number;
    };
    style: Animated.AnimateProps<ViewStyle, {}>;
    currentIndex: Animated.Value<number>;
    onLayout: () => void;
    onUnmount: () => void;
};
declare class DraggableFlatList<T> extends React.Component<DraggableFlatListProps<T>, State> {
    state: State;
    containerRef: React.RefObject<Animated.View>;
    flatlistRef: React.RefObject<AnimatedFlatListType<T>>;
    panGestureHandlerRef: React.RefObject<PanGestureHandler>;
    containerSize: Animated.Value<number>;
    touchInit: Animated.Value<number>;
    activationDistance: Animated.Value<number>;
    touchAbsolute: Animated.Value<number>;
    panGestureState: Animated.Value<GestureState>;
    isPressedIn: {
        native: Animated.Value<number>;
        js: boolean;
    };
    hasMoved: Animated.Value<0>;
    disabled: Animated.Value<0>;
    activeIndex: Animated.Value<number>;
    spacerIndex: Animated.Value<number>;
    isHovering: Animated.Node<0 | 1>;
    activeCellSize: Animated.Value<number>;
    activeCellOffset: Animated.Value<number>;
    scrollOffset: Animated.Value<number>;
    scrollViewSize: Animated.Value<number>;
    isScrolledUp: Animated.Node<0 | 1>;
    isScrolledDown: Animated.Node<0 | 1>;
    touchCellOffset: Animated.Node<number>;
    hoverAnimUnconstrained: Animated.Node<number>;
    hoverAnimConstrained: Animated.Node<number>;
    hoverAnim: Animated.Node<number>;
    hoverMid: Animated.Node<number>;
    hoverOffset: Animated.Node<number>;
    placeholderOffset: Animated.Value<0>;
    placeholderPos: Animated.Node<number>;
    hoverTo: Animated.Value<0>;
    hoverClock: Animated.Clock;
    hoverAnimState: {
        finished: Animated.Value<0>;
        velocity: Animated.Value<0>;
        position: Animated.Value<0>;
        time: Animated.Value<0>;
    };
    hoverAnimConfig: {
        toValue: Animated.Value<0>;
        damping: number | Animated.Node<number> | readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] | (number & Animated.Node<number>) | (number & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & number) | (Animated.Node<number> & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & number) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & Animated.Node<number>);
        mass: number | Animated.Node<number> | readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] | (number & Animated.Node<number>) | (number & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & number) | (Animated.Node<number> & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & number) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & Animated.Node<number>);
        stiffness: number | Animated.Node<number> | readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] | (number & Animated.Node<number>) | (number & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & number) | (Animated.Node<number> & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & number) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & Animated.Node<number>);
        overshootClamping: number | boolean | Animated.Node<number> | readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] | (number & Animated.Node<number>) | (number & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & number) | (Animated.Node<number> & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & number) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & Animated.Node<number>) | (false & Animated.Node<number>) | (false & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (true & Animated.Node<number>) | (true & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & false) | (Animated.Node<number> & true) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & false) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & true);
        restSpeedThreshold: number | Animated.Node<number> | readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] | (number & Animated.Node<number>) | (number & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & number) | (Animated.Node<number> & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & number) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & Animated.Node<number>);
        restDisplacementThreshold: number | Animated.Node<number> | readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] | (number & Animated.Node<number>) | (number & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (Animated.Node<number> & number) | (Animated.Node<number> & readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[]) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & number) | (readonly (number | Animated.Node<number> | readonly (number | Animated.Node<number>)[])[] & Animated.Node<number>);
    };
    distToTopEdge: Animated.Node<number>;
    distToBottomEdge: Animated.Node<number>;
    cellAnim: Map<string, {
        config: Animated.SpringConfig;
        state: Animated.PhysicsAnimationState;
        clock: Animated.Clock;
    }>;
    cellData: Map<string, CellData>;
    cellRefs: Map<string, React.RefObject<Animated.View>>;
    moveEndParams: Animated.Value<number>[];
    resetHoverSpring: Animated.Node<number>[];
    keyToIndex: Map<string, number>;
    isAutoScrollInProgress: {
        native: Animated.Value<number>;
        js: boolean;
    };
    queue: (() => void | Promise<void>)[];
    static getDerivedStateFromProps(props: DraggableFlatListProps<any>): {
        extraData: any;
    };
    static defaultProps: {
        autoscrollThreshold: number;
        autoscrollSpeed: number;
        animationConfig: Animated.SpringConfig;
        scrollEnabled: boolean;
        dragHitSlop: number | {
            left?: number | undefined;
            right?: number | undefined;
            top?: number | undefined;
            bottom?: number | undefined;
            vertical?: number | undefined;
            horizontal?: number | undefined;
        } | {
            width: number;
            left: number;
        } | {
            width: number;
            right: number;
        } | {
            height: number;
            top: number;
        } | {
            height: number;
            bottom: number;
        } | undefined;
        activationDistance: number;
        dragItemOverflow: boolean;
    };
    constructor(props: DraggableFlatListProps<T>);
    dataKeysHaveChanged: (a: T[], b: T[]) => boolean;
    componentDidUpdate: (prevProps: Modify<FlatListProps<T>, {
        autoscrollSpeed?: number | undefined;
        autoscrollThreshold?: number | undefined;
        data: T[];
        onRef?: ((ref: React.RefObject<AnimatedFlatListType<T>>) => void) | undefined;
        onDragBegin?: ((index: number) => void) | undefined;
        onRelease?: ((index: number) => void) | undefined;
        onDragEnd?: ((params: DragEndParams<T>) => void) | undefined;
        renderItem: (params: RenderItemParams<T>) => React.ReactNode;
        renderPlaceholder?: ((params: {
            item: T;
            index: number;
        }) => React.ReactNode) | undefined;
        animationConfig: Partial<Animated.SpringConfig>;
        activationDistance?: number | undefined;
        debug?: boolean | undefined;
        layoutInvalidationKey?: string | undefined;
        onScrollOffsetChange?: ((scrollOffset: number) => void) | undefined;
        onPlaceholderIndexChange?: ((placeholderIndex: number) => void) | undefined;
        containerStyle?: StyleProp<ViewStyle>;
        dragItemOverflow?: boolean | undefined;
    } & Partial<Readonly<{
        autoscrollThreshold: number;
        autoscrollSpeed: number;
        animationConfig: Animated.SpringConfig;
        scrollEnabled: boolean;
        dragHitSlop: number | {
            left?: number | undefined;
            right?: number | undefined;
            top?: number | undefined;
            bottom?: number | undefined;
            vertical?: number | undefined;
            horizontal?: number | undefined;
        } | {
            width: number;
            left: number;
        } | {
            width: number;
            right: number;
        } | {
            height: number;
            top: number;
        } | {
            height: number;
            bottom: number;
        } | undefined;
        activationDistance: number;
        dragItemOverflow: boolean;
    }>>>, prevState: State) => Promise<void>;
    flushQueue: () => Promise<void>;
    resetHoverState: () => void;
    drag: (hoverComponent: React.ReactNode, activeKey: string) => void;
    onRelease: ([index]: readonly number[]) => void;
    onDragEnd: ([from, to]: readonly number[]) => void;
    updateCellData: (data?: T[]) => void;
    setCellData: (key: string, index: number) => void;
    measureAll: (data: T[]) => void;
    measureCell: (key: string) => Promise<void>;
    keyExtractor: (item: T, index: number) => string;
    onContainerLayout: () => void;
    onListContentSizeChange: (w: number, h: number) => void;
    targetScrollOffset: Animated.Value<number>;
    resolveAutoscroll?: (scrollParams: readonly number[]) => void;
    onAutoscrollComplete: (params: readonly number[]) => void;
    scrollToAsync: (offset: number) => Promise<readonly number[]>;
    getScrollTargetOffset: (distFromTop: number, distFromBottom: number, scrollOffset: number, isScrolledUp: boolean, isScrolledDown: boolean) => number;
    autoscrollLooping: boolean;
    autoscroll: (params: readonly number[]) => Promise<void>;
    isAtTopEdge: Animated.Node<0 | 1>;
    isAtBottomEdge: Animated.Node<0 | 1>;
    isAtEdge: Animated.Node<0 | 1>;
    autoscrollParams: Animated.Node<number>[];
    checkAutoscroll: Animated.Node<number>;
    onScroll: (...args: any[]) => void;
    onGestureRelease: Animated.Node<number>[];
    onPanStateChange: (...args: any[]) => void;
    onPanGestureEvent: (...args: any[]) => void;
    hoverComponentTranslate: Animated.Node<number>;
    hoverComponentOpacity: Animated.Node<0 | 1>;
    renderHoverComponent: () => JSX.Element;
    renderItem: ({ item, index }: {
        item: T;
        index: number;
    }) => JSX.Element;
    renderOnPlaceholderIndexChange: () => JSX.Element;
    renderPlaceholder: () => JSX.Element | null;
    CellRendererComponent: (cellProps: any) => JSX.Element | null;
    renderDebug(): JSX.Element;
    onContainerTouchEnd: () => void;
    render(): JSX.Element;
}
export default DraggableFlatList;
