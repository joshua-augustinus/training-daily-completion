import { Platform } from "react-native";


export const getDailyCompletionSpring = (toValue: number, delay?: number) => {
    return {
        toValue: toValue,
        useNativeDriver: true,
        friction: 3,
        tension: 10,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
        delay: delay
    }

}