import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const StackNavigatorComponents = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
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
