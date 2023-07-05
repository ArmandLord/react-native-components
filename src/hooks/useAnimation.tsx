import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const position = useRef(new Animated.Value(-300)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(position, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const startMoving = (initPosition: number, duration: number = 300) => {
    position.setValue(0);

    Animated.timing(position, {
      toValue: initPosition,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce,
    }).start();
  };
  return {
    opacity,
    position,
    // methods
    fadeIn,
    fadeOut,
    startMoving,
  };
};
