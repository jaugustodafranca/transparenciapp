import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const TripDetails = ({navigation}) => {
  const trip = navigation.getParam('trip', {});
  return (
    <View style={styles.box}>
      <View style={styles.label}>
        <Text style={styles.title}>Nome:</Text>
        <Text style={styles.nome}>{trip.pessoa.nome}</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.title}>Data:</Text>
        <Text style={styles.data}>
          {`DATA: ${trip.dataInicioAfastamento} - ${trip.dataFimAfastamento}`}
        </Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.title}>Motivo:</Text>
        <Text>Motivo: {trip.dimViagem && trip.dimViagem.motivo}</Text>
      </View>
      <View style={styles.label}>
        <Text style={styles.title}>Valores:</Text>
        <Text>Valor Restituicao: R${trip.valorTotalRestituicao}</Text>
        <Text>
          Valor Taxa Agenciamento: R$
          {trip.valorTotalTaxaAgenciamento}
        </Text>
        <Text>Valor Multa: R${trip.valorMulta}</Text>
        <Text>Valor Diarias: R${trip.valorTotalDiarias}</Text>
        <Text>Valor Passagem: R${trip.valorTotalPassagem}</Text>
        <Text>Valor Devolucao: R${trip.valorTotalDevolucao}</Text>
        <Text>Valor Total Viagem: R${trip.valorTotalViagem}</Text>
      </View>
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
