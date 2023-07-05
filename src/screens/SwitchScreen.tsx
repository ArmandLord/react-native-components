import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CustomSwitch, HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true,
  });
  const toggleSwitch = (v: boolean, currentState: string) => {
    console.log(currentState);

    setIsEnabled({
      ...isEnabled,
      [currentState]: v,
    });
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Switches" />
      {/* <Switch
        trackColor={{false: '#767577', true: '#8e81ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      /> */}
      <CustomSwitch
        isOn={isEnabled.isActive}
        toggleSwitch={toggleSwitch}
        currentState="isActive"
      />
      <CustomSwitch
        isOn={isEnabled.isHappy}
        toggleSwitch={toggleSwitch}
        currentState="isHappy"
      />
      <CustomSwitch
        isOn={isEnabled.isHungry}
        toggleSwitch={toggleSwitch}
        currentState="isHungry"
      />
      <Text>{JSON.stringify(isEnabled, null, 2)}</Text>
    </View>
  );
};
