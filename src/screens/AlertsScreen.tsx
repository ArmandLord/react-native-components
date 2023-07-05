import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components';

export const AlertsScreen = () => {
  const showAlertOne = () => {
    Alert.alert(
      'Oye!',
      'te gusta mamar huevo?',
      [
        {
          text: 'Nope',
          onPress: () => console.log('SALVADO'),
          style: 'destructive',
        },
        {
          text: 'AMO EL HUEVO',
          onPress: () => console.log('🏳️‍🌈'),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss'),
      },
    );
  };
  const showAlertTwo = () => {
    Alert.prompt(
      'Estas seguro?',
      'Quieres borrar tu historial?',
      valor => {
        console.log(valor);
      },
      'login-password',
    );
  };

  return (
    <View>
      <HeaderTitle title="Alerts" />

      <Button title="Show Alert 1" onPress={() => showAlertOne()} />
      <Button title="Show Alert Prompt 2" onPress={() => showAlertTwo()} />
    </View>
  );
};
