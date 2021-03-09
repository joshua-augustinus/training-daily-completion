import React, { useEffect, useRef } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, StyleSheet, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Svg, { Ellipse } from 'react-native-svg';
import { DrivenColors } from '@src/constants/Colors';


const RADIUS_2 = 35;
const RADIUS_3 = 30
const FONT_SIZE = 24;
const TICK_SIZE = 124

const DailyCompletionInnerCircle = () => {


    return (
        < >
            <View  >
                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <Ellipse cx="50" cy="50" rx={RADIUS_2} ry={RADIUS_2} fill='white' />
                </Svg>

            </View>
            <View style={StyleSheet.absoluteFill}>

                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <Ellipse cx="50" cy="50" rx={RADIUS_3} ry={RADIUS_3} fill={DrivenColors.SECONDARY} />
                </Svg>

            </View>
            <View style={styles.textContainer}>
                <Icon name="check" size={TICK_SIZE} color="white" />
                <View style={styles.textRow}>
                    <Text style={styles.daily}>Daily </Text>
                    <Text style={styles.bonus}>Bonus</Text>
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
        marginBottom: 24
    },
    textRow: {
        flexDirection: 'row'
    }
})