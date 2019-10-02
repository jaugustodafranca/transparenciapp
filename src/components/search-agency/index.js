import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchAgency = () => {
  const falseList = [
    {id: '1', nome: 'Secretaria de Segurança de Santa Catarina'},
    {id: '2', nome: 'Universidade Federal de Santa Catarina'},
    {id: '3', nome: 'Secretaria de Desenvolvimento'},
  ];

  return (
    <View>
      <Text style={styles.title}>Procurar Orgão do Governo Federal: </Text>
      <TextInput
        style={styles.inputSearch}
        placeholder="Digite nome do orgão"
        onEndEditing={() => {
          console.log('funcionando');
        }}
      />
      <View style={styles.list}>
        <View style={styles.headerList}>
          <Text style={styles.headerTitle}>Lista de Orgaçãos</Text>
          {/* RENDERIZAR LISTA */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  inputSearch: {
    paddingLeft: 20,
    marginTop: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
  },
  list: {
    marginTop: 20,
  },
  headerList: {
    backgroundColor: '#CFCFCF',
    padding: 10,
  },
  headerTitle: {
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
});
export default SearchAgency;
