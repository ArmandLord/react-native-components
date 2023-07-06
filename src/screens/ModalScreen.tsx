import React, {useState} from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Modal animationType="slide" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.title}>Modal Screen</Text>
          <Pressable onPress={() => setIsVisible(false)}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 10,
              }}>
              Close
            </Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        onPress={() => setIsVisible(true)}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
          }}>
          Open Modal
        </Text>
      </Pressable>
    </View>
  );
};
