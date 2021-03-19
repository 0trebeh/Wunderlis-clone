import Animated from "react-native-reanimated";
export declare const getIsAfterActive: (currentIndex: Animated.Node<number>, activeIndex: Animated.Node<number>) => Animated.Node<number>;
export declare const getCellStart: (isAfterActive: Animated.Node<number>, offset: Animated.Node<number>, activeCellSize: Animated.Node<number>, scrollOffset: Animated.Node<number>) => Animated.Node<number>;
export declare const getOnChangeTranslate: (translate: Animated.Node<number>, isAfterActive: Animated.Node<number>, initialized: Animated.Value<number>, toValue: Animated.Value<number>, isPressedIn: Animated.Node<number>) => Animated.Node<number>;
export declare const hardReset: (position: Animated.Value<number>, finished: Animated.Value<number>, time: Animated.Value<number>, toValue: Animated.Value<number>) => Animated.Node<number>;
export declare const setupCell: (...params: any) => Animated.Node<number>;
export declare function springFill(clock: Animated.Clock, state: Animated.SpringState, config: Animated.SpringConfig): Animated.Node<number>;
