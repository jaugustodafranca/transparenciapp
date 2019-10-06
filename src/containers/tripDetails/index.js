import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';

import styles from './styles';

const TripDetails = ({navigation}) => {
  const trip = navigation.getParam('trip', {});
  return (
    <View>
      <Text>Data: {trip.dataInicioAfastamento}</Text>
      <Text>Nome: {trip.pessoa.nome}</Text>
      <Text>Motivo</Text>
      <Text>Valores</Text>
    </View>
  );
};

TripDetails.navigationOptions = ({navigation}) => {
  const trip = navigation.getParam('trip', {});
  const title = ' - ';
  return {
    title,
  };
};

export default TripDetails;
