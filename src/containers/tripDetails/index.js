import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TripDetails = ({navigation}) => {
  const trip = navigation.getParam('trip', {});
  return (
    <View>
      <Text>
        {`Data: ${trip.dataInicioAfastamento} - ${trip.dataFimAfastamento}`}
      </Text>
      <Text>Nome: {trip.pessoa.nome}</Text>
      <Text>Motivo: {trip.dimViagem && trip.dimViagem.motivo}</Text>
      <Text>Valores</Text>
      <Text>Valor Restituicao: R${trip.valorTotalRestituicao}</Text>

      <Text>Valor Taxa Agenciamento: R${trip.valorTotalTaxaAgenciamento}</Text>

      <Text>Valor Multa: R${trip.valorMulta}</Text>

      <Text>Valor Diarias: R${trip.valorTotalDiarias}</Text>

      <Text>Valor Passagem: R${trip.valorTotalPassagem}</Text>

      <Text>Valor Devolucao: R${trip.valorTotalDevolucao}</Text>

      <Text>Valor Total Viagem: R${trip.valorTotalViagem}</Text>
    </View>
  );
};

TripDetails.navigationOptions = ({navigation}) => {
  const trip = navigation.getParam('trip', {});
  const title = `${trip.id}`;
  return {
    title,
  };
};

export default TripDetails;
