import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101 = () => {
  const {opacity, position, fadeIn, fadeOut, startMoving} = useAnimation();

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.View
        style={{
          ...styles.container,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}>
        <View style={styles.purpleBox} />
      </Animated.View>
      <Button title="FadeIn" onPress={fadeIn} />
      <Button
        title="FadeOut"
        onPress={() => {
          fadeOut();
          startMoving(-200, 800);
        }}
      />
      <Button title="Move" onPress={() => startMoving(-200, 800)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1b8a92',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#7fd656',
    width: 150,
    height: 150,
  },
});
