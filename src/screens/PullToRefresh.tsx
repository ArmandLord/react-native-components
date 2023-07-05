import React, {useState} from 'react';
import {RefreshControl, View, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native-gesture-handler';

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('');

  const onRefresh = () => {
    setRefreshing(true);
    console.log('Refreshing...');

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setText('Hola Mundo');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          // progressViewOffset={10}
          refreshing={refreshing}
          onRefresh={onRefresh}
          // android
          progressBackgroundColor={'#5856D6'}
          colors={['white', 'red', 'orange']}
          // ios
          tintColor={'red'}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        <Text style={styles.title}>{text}</Text>
      </View>
    </ScrollView>
  );
};
