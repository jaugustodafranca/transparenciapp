import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';

import styles from './styles.js';
import mockupData from './mockupData.json';

class SearchTripResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    const departureDateBegin = moment(
      navigation.getParam('departureDateBegin', ''),
    ).format('DD/MM/YYYY');
    const arrivalDateEnd = moment(
      navigation.getParam('arrivalDateEnd', ''),
    ).format('DD/MM/YYYY');
    const title = `${departureDateBegin} - ${arrivalDateEnd}`;
    return {
      title,
    };
  };

  renderItemList = ({item}) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() =>
        this.props.navigation.navigate('TripDetails', {trip: item})
      }>
      <Text style={styles.boxText}>{item.dimViagem.motivo}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <FlatList
          style={styles.list}
          data={mockupData}
          showsVerticalScrollIndicator={false}
          //ListHeaderComponent={tableHeader()}
          renderItem={this.renderItemList}
          keyExtractor={item => item.id + ''}
        />
      </View>
    );
  }
}

export default SearchTripResult;
