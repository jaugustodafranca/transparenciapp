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
    {id: '1', nome: 'Secretaria de Segurança de Santa Catarina'},
    {id: '2', nome: 'Universidade Federal de Santa Catarina'},
    {id: '3', nome: 'Secretaria de Desenvolvimento'},
  ];
  const tableHeader = () => (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}>Resultados:</Text>
    </View>
  );

  const renderItemList = ({item}) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() => props.navigation.navigate('SearchTrip')}>
      <Text style={styles.boxText}>
        {item.id} - {item.nome}
      </Text>
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
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default SearchAgency;
