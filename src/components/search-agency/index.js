import React from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';

import styles from './styles';

const SearchAgency = () => {
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
  return (
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
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.boxItem}
            onPress={() => console.log(item.id)}>
            <Text style={styles.boxText}>
              {item.id} - {item.nome}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchAgency;
