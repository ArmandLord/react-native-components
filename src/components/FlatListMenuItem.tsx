import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/IMenuItems';

export const FlatListMenuItem = ({title, icon}: MenuItem) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon
        name={icon}
        size={30}
        color="black"
        style={{marginHorizontal: 10}}
      />
      <Text>{title}</Text>
      <Icon
        name="chevron-forward-outline"
        size={20}
        color="#5856D6"
        style={{
          position: 'absolute',
          right: 10,
        }}
      />
    </View>
  );
};
