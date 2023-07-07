import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {HeaderTitle} from '../components';
import {styles as globalStyles} from '../theme/appTheme';
import {ThemeContext} from '../context/ThemeContext';

export const ChangeTheme = () => {
  const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <View style={{...globalStyles.globalMargin}}>
      <HeaderTitle title="Change Theme" />
      <Text>{theme}</Text>
      <Button title="Change Theme Dark" onPress={() => changeTheme('dark')} />
      <Button title="Change Theme Light" onPress={() => changeTheme('light')} />
      <Button
        title="Change Theme Custom"
        onPress={() => changeTheme('custom')}
      />
    </View>
  );
};
