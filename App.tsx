import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {StackNavigatorComponents} from './src/navigation/StackNavigatorComponents';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <StackNavigatorComponents />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
