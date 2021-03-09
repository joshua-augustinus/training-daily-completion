import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import Svg, { Ellipse } from 'react-native-svg';
import { getDailyCompletionSpring } from '@src/constants/AnimationConstants';
import { Easing as RNEasing } from 'react-native';
import { DailyCompletionInnerCircle } from '@src/components/DailyCompletionInnerCircle';
import { DrivenColors } from '@src/constants/Colors';
import { EasingFunctions } from '@src/constants/EasingFunctions';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const RADIUS_1 = 45;
const RADIUS_2 = 35;
const RADIUS_3 = 30
const CLOSE_DELAY = 2000

const MasterScreen = (props: Props) => {
    const layoutState = useRef(new Animated.Value(0)).current;
    const springState = useRef(new Animated.Value(0)).current;
    const innerState = useRef(new Animated.Value(0)).current;

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isVisible)
            return;
        const ani1 = Animated.spring(springState, getDailyCompletionSpring(1));
        const ani2 = Animated.timing(layoutState, {
            useNativeDriver: true,
            toValue: 4,
            duration: 700,
            easing: EasingFunctions.easeInOut
        });
        const inner1 = Animated.timing(innerState, {
            useNativeDriver: true,
            toValue: 1,
            duration: 200,
            easing: EasingFunctions.easeInOut,
            delay: 200
        });

        Animated.parallel([ani1, ani2, inner1]).start(() => {
            const ani3 = Animated.timing(layoutState, {
                useNativeDriver: true,
                toValue: 0,
                duration: 600,
                delay: CLOSE_DELAY,

            });

            const ani4 = Animated.timing(springState, {
                useNativeDriver: true,
                toValue: 0,
                duration: 800,
                delay: CLOSE_DELAY,
            })


            Animated.parallel([ani3, ani4]).start(() => {

                setTimeout(() => {
                    layoutState.setValue(1);
                    springState.setValue(1);
                    innerState.setValue(1);


                    setIsVisible(false);

                }, 1000)
            })


        });
    }, [isVisible]);

    const triggerAnimation = () => {
        layoutState.setValue(0);
        springState.setValue(0);
        innerState.setValue(0);

        setIsVisible(true);
    }

    const transform = [{ scale: springState }]
    const outsideTransform = [{ scale: layoutState }]

    if (!isVisible)
        return <TouchableOpacity onPress={triggerAnimation}><Text>Press me</Text></TouchableOpacity>;

    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={triggerAnimation}>


            <SafeAreaView style={{ flex: 1 }}>


                <View style={StyleSheet.absoluteFill}>
                    <Animated.View style={{ opacity: 0.5, transform: outsideTransform }}>
                        <Svg height="100%" width="100%" viewBox="0 0 100 100">
                            <Ellipse cx="50" cy="50" rx={RADIUS_1} ry={RADIUS_1} fill={DrivenColors.SECONDARY} />
                        </Svg>
                    </Animated.View>

                </View>
                <View style={StyleSheet.absoluteFill}>
                    <Animated.View style={{ transform: transform, flex: 1 }}>
                        <DailyCompletionInnerCircle animationState={innerState} />
                    </Animated.View>
                </View>



            </SafeAreaView>
        </TouchableOpacity>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }