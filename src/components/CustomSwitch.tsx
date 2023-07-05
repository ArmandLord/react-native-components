import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';

interface Props {
  isOn: boolean;
  currentState: string;
  toggleSwitch: (v: boolean, currentState: string) => void;
}

export const CustomSwitch = ({isOn, toggleSwitch, currentState}: Props) => {
  const [isEnable, setIsEnable] = useState(isOn);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text>{currentState}</Text>
      <Switch
        style={{marginBottom: 10}}
        value={isEnable}
        onValueChange={v => {
          setIsEnable(v);
          toggleSwitch(v, currentState);
        }}
      />
    </View>
  );
};
