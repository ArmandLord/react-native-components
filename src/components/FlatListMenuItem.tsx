import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/IMenuItems';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorComponentsProps} from '../navigation/StackNavigatorComponents';

export type StackNavigation =
  StackNavigationProp<StackNavigatorComponentsProps>;

export const FlatListMenuItem = ({title, icon, component}: MenuItem) => {
  const {navigate} = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity onPress={() => navigate(component as never)}>
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
    </TouchableOpacity>
  );
};
