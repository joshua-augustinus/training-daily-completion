import { Platform } from "react-native";
import { Easing } from "react-native-reanimated";


export const getDailyCompletionSpring = (toValue: number, delay?: number) => {
    return {
        toValue: toValue,
        useNativeDriver: true,
        friction: 3,
        tension: 40,
        restDisplacementThreshold: 0.001,
        restSpeedThreshold: 0.001,
        delay: delay
    }

}

export const getDailyCompletionSpring2 = (toValue: number, delay?: number) => {
    return {
        toValue: toValue,
        useNativeDriver: true,
        duration: 600,
        easing: Easing.elastic
    }

}