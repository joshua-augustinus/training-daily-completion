import React, { useEffect } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, StyleSheet } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { FeatureButton } from '@src/components/FeatureButton';
import Svg, { Ellipse } from 'react-native-svg';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const MasterScreen = (props: Props) => {

    useEffect(() => {

    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Text>Press me</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleSheet.absoluteFill}>
                <View style={{ opacity: 0.7 }}>
                    <Svg height="100%" width="100%" viewBox="0 0 100 100">
                        <Ellipse cx="50" cy="50" rx="40" ry="40" fill='red' />
                    </Svg>
                </View>

            </View>
            <View style={StyleSheet.absoluteFill}>
                <Svg height="100%" width="100%" viewBox="0 0 100 100">
                    <Ellipse cx="50" cy="50" rx="30" ry="30" fill='orange' />
                </Svg>
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }