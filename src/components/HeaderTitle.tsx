import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const HeaderTitle = ({title}: {title: string}) => {
  return (
    <View style={{marginVertical: 5}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
