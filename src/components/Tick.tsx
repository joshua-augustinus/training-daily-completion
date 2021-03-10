import React, { useEffect, useState } from 'react';
import { AnimatedSVGPath } from "react-native-svg-animations";
import { View } from 'react-native';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    renderTick: Date
}

const d = 'M14.1 27.2l7.1 7.2 16.7-16.8';


const Tick = (props: Props) => {




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
                delay={500}

            />
        </View>



    );

}


export { Tick }