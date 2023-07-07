import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, useColorScheme} from 'react-native';
import {ModalScreen} from '../screens/ModalScreen';
import {ChangeTheme} from '../screens/ChangeTheme';
import {
  AlertsScreen,
  Animation101,
  Animation102,
  HomeScreen,
  SwitchScreen,
  TextInputScreen,
  PullToRefresh,
  SectionListScreen1,
  InfiniteScrollScreen,
  SlideScreen,
} from '../screens';
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native';
import {ThemeContext} from '../context/ThemeContext';

export type StackNavigatorComponentsProps = {
  Home: undefined;
  Notifications: undefined;
  Animation101: undefined;
  Animation102: undefined;
  SwitchScreen: undefined;
  AlertsScreen: undefined;
  TextInputScreen: undefined;
  PullToRefresh: undefined;
  SectionListScreen1: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
  SlideScreen: undefined;
  ChangeTheme: undefined;
};

const Stack = createStackNavigator<StackNavigatorComponentsProps>();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(160, 141, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export const StackNavigatorComponents = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const scheme = useColorScheme();

  useEffect(() => {
    console.log('scheme', scheme);
    if (scheme === 'dark') {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  }, [scheme]);

  const contextTheme =
    theme === 'dark'
      ? DarkTheme
      : theme === 'custom'
      ? customTheme
      : DefaultTheme;

  return (
    <NavigationContainer
      theme={{
        ...contextTheme,
      }}>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          cardStyle: {
            backgroundColor: contextTheme.colors.background,
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Animation101" component={Animation101} />
        <Stack.Screen name="Animation102" component={Animation102} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertsScreen" component={AlertsScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
        <Stack.Screen
          name="SectionListScreen1"
          component={SectionListScreen1}
        />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen
          name="InfiniteScrollScreen"
          component={InfiniteScrollScreen}
        />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="ChangeTheme" component={ChangeTheme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};
