import React from 'react';
import {View, SectionList, Text} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen1 = () => {
  return (
    <View style={styles.globalMargin}>
      {/* <HeaderTitle title="Section List" /> */}
      <SectionList
        sections={casas}
        // ListeHeaderComponent renderiza un componente antes de la lista que se oculta al hacer scroll
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        // ListeFooterComponent renderiza un componente despues de la lista que se oculta al hacer scroll
        ListFooterComponent={() => (
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={'Total de casas: ' + casas.length} />
          </View>
        )}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        SectionSeparatorComponent={() => (
          <View style={{borderBottomWidth: 1, marginVertical: 8}} />
        )}
        showsVerticalScrollIndicator={false}

        // stickySectionHeadersEnabled
      />
    </View>
  );
};
