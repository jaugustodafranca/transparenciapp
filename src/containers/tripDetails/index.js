import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';

import styles from './styles';

const TripDetails = ({navigation}) => {
  const trip = navigation.getParam('trip', {});
  return (
    <View>
      <Text>
        {`Data: ${trip.dataInicioAfastamento} - ${trip.dataFimAfastamento}`}
      </Text>
      <Text>Nome: {trip.pessoa.nome}</Text>
      <Text>Motivo</Text>
      <Text>Valores</Text>
      <Text>Valor Total Restituicao: R${trip.valorTotalRestituicao}</Text>

      <Text>
        Valor Total Taxa Agenciamento: R${trip.valorTotalTaxaAgenciamento}
      </Text>

      <Text>Valor Multa: R${trip.valorMulta}</Text>

      <Text>Valor Total Diarias: R${trip.valorTotalDiarias}</Text>

      <Text>Valor Total Passagem: R${trip.valorTotalPassagem}</Text>

      <Text>Valor Total Viagem: R${trip.valorTotalViagem}</Text>

      <Text>Valor Total Devolucao: R${trip.valorTotalDevolucao}</Text>
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
