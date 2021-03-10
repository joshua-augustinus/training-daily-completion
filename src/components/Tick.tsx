import React, { useEffect, useState } from 'react';
import { AnimatedSVGPath } from "react-native-svg-animations";
import { View } from 'react-native';
import { PlayTickSound } from '@src/services/SoundService';


const d = 'M14.1 27.2l7.1 7.2 16.7-16.8';

const DELAY = 500;

const Tick = () => {

    useEffect(() => {
        setTimeout(() => {
            PlayTickSound();

        }, DELAY);
    }, [])


    return (

        <View style={{ transform: [{ scale: 3 }, { translateX: 1 }] }}>
            <AnimatedSVGPath
                strokeColor={"white"}
                duration={200}
                strokeWidth={7}
                height={50}
                width={50}
                d={d}
                loop={false}
                delay={DELAY}

            />
        </View>



    );

}


export { Tick }