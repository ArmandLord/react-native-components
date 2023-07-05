import {FlatList, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem, HeaderTitle} from '../components';
import {MenuItem} from '../interfaces/IMenuItems';
import {menuItems} from '../menuItems/menuItems';

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
    return <HeaderTitle title="Opciones de menú" />;
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
