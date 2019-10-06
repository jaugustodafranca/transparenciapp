import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Logo from '../../assets/logo-transparenciApp.png';
import styles from './styles';

const SearchAgency = props => {
  const falseList = [
    {
      codigo: '26219',
      descricao: 'Centro Federal de Educação Tecnológica de Santa Catarina',
      codigoDescricaoFormatado:
        '26219 - Centro Federal de Educação Tecnológica de Santa Catarina',
    },
    {
      codigo: '26246',
      descricao: 'Universidade Federal de Santa Catarina',
      codigoDescricaoFormatado:
        '26246 - Universidade Federal de Santa Catarina',
    },
    {
      codigo: '26438',
      descricao: 'Instituto Federal de Santa Catarina',
      codigoDescricaoFormatado: '26438 - Instituto Federal de Santa Catarina',
    },
    {
      codigo: '96220',
      descricao: 'Estado de Santa Catarina',
      codigoDescricaoFormatado: '96220 - Estado de Santa Catarina',
    },
  ];

  const tableHeader = () => (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}>Resultados:</Text>
    </View>
  );

  const renderItemList = ({item}) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() => props.navigation.navigate('SearchTrip', {agency: item})}>
      <Text style={styles.boxText}>{item.codigoDescricaoFormatado}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View>
        <Text style={styles.title}>Procurar Orgão do Governo Federal: </Text>
        <TextInput
          style={styles.inputSearch}
          placeholder="Digite nome do orgão"
          onEndEditing={() => console.log('funcionando')}
        />
        <FlatList
          style={styles.list}
          data={falseList}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={tableHeader()}
          renderItem={renderItemList}
          keyExtractor={item => item.codigo}
        />
      </View>
    </View>
  );
};

export default SearchAgency;
