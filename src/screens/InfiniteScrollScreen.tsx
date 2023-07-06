import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {FlatList} from 'react-native-gesture-handler';

export const InfiniteScrollScreen = () => {
  const [data, setdata] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const addData = () => {
    console.log('Add Data');
    setTimeout(() => {
      setdata([...data, data.length + 1]);
    }, 1000);
  };

  return (
    <View style={styles.globalMargin}>
      {/* InfiniteScroll */}
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title="Infinite Scroll" />}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Image
            source={{uri: `https://picsum.photos/id/${item}/500/400`}}
            style={{width: '100%', height: 400}}
          />
        )}
        onEndReached={addData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <ActivityIndicator size={30} color="blue" style={{height: 100}} />
        )}
      />
    </View>
  );
};
