import {
    Player
} from '@react-native-community/audio-toolkit';


const options = {
    autoDestroy: false
}

const tickPlayer = new Player('https://hellodriven.github.io/mobile-static/v1/sounds/payment_success.m4a', options).prepare();


export const PlayTickSound = () => {

    tickPlayer.play();
}

