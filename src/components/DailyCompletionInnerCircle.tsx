import React, { useEffect, useRef } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, StyleSheet, Animated, Alert } from 'react-native';

import Svg, { Circle, Ellipse } from 'react-native-svg';
import { DrivenColors } from '@src/constants/Colors';
import { Tick } from './Tick';
import { EasingFunctions } from '@src/constants/EasingFunctions';


const RADIUS_2 = 33;
const RADIUS_3 = 30
const FONT_SIZE = 24;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const DailyCompletionInnerCircle = () => {
    const circleCircumference = 2 * Math.PI * RADIUS_2
    const circleRef = React.useRef();
    const animatedValue = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {


        animatedValue.addListener((v) => {
            if (circleRef?.current) {
                const strokeDashOffset = circleCircumference - circleCircumference * v.value;
                //@ts-ignore
                circleRef.current.setNativeProps({
                    strokeDashoffset: strokeDashOffset
                })
            }
        })

        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            easing: EasingFunctions.easeInQuint
        }).start(() => {
        });

        return () => {
            animatedValue.removeAllListeners()
        }
    })

    return (
        < >
            <View  >
                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <AnimatedCircle
                        ref={circleRef}
                        cx="50" cy="50" r={RADIUS_2} fill='transparent'
                        stroke="white"
                        strokeWidth={6}
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap='round' />
                </Svg>

            </View>
            <View style={StyleSheet.absoluteFill}>

                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <Ellipse cx="50" cy="50" rx={RADIUS_3} ry={RADIUS_3} fill={DrivenColors.SECONDARY} />
                </Svg>

            </View>
            <View style={styles.textContainer}>
                <Tick renderTick={new Date()} />
                <View style={styles.textRow}>
                    <Text style={styles.daily}>Daily </Text>
                    <Text style={styles.bonus}>Bonus!</Text>
                </View>



            </View>
        </>

    );

}


export { DailyCompletionInnerCircle }

const styles = StyleSheet.create({
    daily: {
        color: 'white',
        fontSize: FONT_SIZE,
        fontFamily: 'BarlowCondensed-Light',

    },
    bonus: {
        color: 'white',
        fontFamily: 'BarlowCondensed-SemiBold',
        fontSize: FONT_SIZE
    },
    textContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRow: {
        flexDirection: 'row',
        marginTop: 20
    }
})