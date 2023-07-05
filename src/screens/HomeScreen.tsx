import {FlatList, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components';
import {MenuItem} from '../interfaces/IMenuItems';

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    id: 2,
    title: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation101Screen',
  },
  {
    id: 3,
    title: 'a Item',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    id: 4,
    title: 'b Item',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
];
export const HomeScreen = () => {
  const renderMenuItem = ({title, icon, id, component}: MenuItem) => {
    return (
      <FlatListMenuItem
        id={id}
        title={title}
        icon={icon}
        component={component}
      />
    );
  };

  const renderListHeader = () => {
    return (
      <View style={{marginVertical: 5}}>
        <Text style={styles.title}>Opciones de menú</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        ...styles.globalMargin,
        flex: 1,
      }}>
      {/* <Text style={styles.title}>Home</Text> */}
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};
