import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import moment from 'moment';

import styles from './styles.js';

import {connect} from 'react-redux';
import * as Actions from '../../actions';

import mockupData from './mockupData.json';

class SearchTripResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList() {
    if (this.props.trips.data && this.props.trips.data.length < 1) {
      return <Text>abc</Text>;
    }
    return (
      <FlatList
        style={styles.list}
        data={this.props.trips.data}
        showsVerticalScrollIndicator={false}
        //ListHeaderComponent={tableHeader()}
        renderItem={this.renderItemList}
        keyExtractor={item => item.id + ''}
      />
    );
  }

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
    return <View>{this.renderList()}</View>;
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchAgencies: () => dispatch(Actions.fetchAgencies()),
});

function mapStateToProps(state) {
  return {
    trips: state.transparencia.trips,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTripResult);
