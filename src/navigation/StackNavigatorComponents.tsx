import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {
  AlertsScreen,
  Animation101,
  Animation102,
  HomeScreen,
  SwitchScreen,
  TextInputScreen,
} from '../screens';

export type StackNavigatorComponentsProps = {
  Home: undefined;
  Notifications: undefined;
  Animation101: undefined;
  Animation102: undefined;
  SwitchScreen: undefined;
  AlertsScreen: undefined;
  TextInputScreen: undefined;
};

const Stack = createStackNavigator<StackNavigatorComponentsProps>();

export const StackNavigatorComponents = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
    </Stack.Navigator>
  );
};

export const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};
