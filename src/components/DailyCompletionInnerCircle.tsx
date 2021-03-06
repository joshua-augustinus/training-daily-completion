import React, { useEffect, useRef } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, StyleSheet, Animated } from 'react-native';

import { NavigationDrawerProp } from 'react-navigation-drawer';
import Svg, { Ellipse } from 'react-native-svg';


const RADIUS_2 = 35;
const RADIUS_3 = 30

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
                    <Ellipse cx="50" cy="50" rx={RADIUS_3} ry={RADIUS_3} fill='orange' />
                </Svg>

            </View>
        </>

    );

}


export { DailyCompletionInnerCircle }