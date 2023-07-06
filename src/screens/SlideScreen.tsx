import React, {useState} from 'react';
// import {HeaderTitle} from '../components';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// import {styles as globalStyles} from '../theme/appTheme';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {LogBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorComponentsProps} from '../navigation/StackNavigatorComponents';

LogBox.ignoreLogs(['ViewPropTypes will be removed']);

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const {width: screenWidth} = Dimensions.get('window');

export type StackNavigation =
  StackNavigationProp<StackNavigatorComponentsProps>;

export const SlideScreen = () => {
  const [snapIndex, setsnapIndex] = useState(0);
  const {navigate} = useNavigation<StackNavigation>();

  const renderItem = ({item, index}: {item: Slide; index: number}) => {
    return (
      <View key={index} style={styles.slide}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        {/* <Text style={styles.desc}>NOOOO</Text> */}

        <View
          style={{
            ...styles.containerButton,
            display: index === 2 ? 'flex' : 'none',
          }}>
          <TouchableOpacity onPress={() => navigate('Home')} style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        // ...globalStyles.globalMargin,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* <HeaderTitle title="Slide Screen" /> */}
      <Carousel
        data={items}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={index => setsnapIndex(index)}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={snapIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: '#5856D6',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  desc: {
    fontSize: 16,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#5856D6',
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
