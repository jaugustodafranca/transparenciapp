import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';

import styles from './styles.js';

import {connect} from 'react-redux';
import * as Actions from '../../actions';

class SearchTripResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValues: this.props.navigation.getParam('searchValues', {}),
    };
  }

  static navigationOptions = ({navigation}) => {
    const {departureDateBegin, arrivalDateEnd} = navigation.getParam(
      'searchValues',
      {},
    );
    const format = date => moment(date).format('MM/DD/YYYY');
    return {
      title: `${format(departureDateBegin)} - ${format(arrivalDateEnd)}`,
    };
  };

  getSearchTripsNextPage() {
    const {
      agency,
      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    } = this.state.searchValues;
    const page = this.props.trips.page;
    this.props.getSearchTripsNextPage(
      agency,
      parseInt(page, 10) + 1,
      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    );
  }

  renderFooter = () => {
    const {
      trips: {loading, data, maxPage, page},
    } = this.props;

    if (!loading && data && data.length > 0) {
      if (maxPage && maxPage <= page) {
        return null;
      }
      return (
        <TouchableOpacity
          style={styles.loadMore}
          onPress={() => this.getSearchTripsNextPage()}>
          <Text style={styles.loadMoreText}>Carregar mais</Text>
        </TouchableOpacity>
      );
    }
    if (loading) {
      return <ActivityIndicator size="small" />;
    }
    return <View />;
  };

  renderList() {
    if (!this.props.trips.data && this.props.trips.loading) {
      return <ActivityIndicator size="large" />;
    }
    if (
      this.props.trips.data &&
      this.props.trips.data.length < 1 &&
      !this.props.trips.loading
    ) {
      return (
        <View style={styles.noResult}>
          <Text style={styles.noResultText}>Nenhum resultado encontrado!</Text>
        </View>
      );
    }

    return (
      <React.Fragment>
        {this.renderTotalSpent()}
        <FlatList
          style={styles.list}
          data={this.props.trips.data}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItemList}
          keyExtractor={(item, index) => index + ''}
        />
      </React.Fragment>
    );
  }

  renderTotalSpent() {
    let price = 0;
    (this.props.trips.data || []).forEach(trip => {
      if (trip && trip.valorTotalViagem) {
        price += parseFloat(trip.valorTotalViagem) || 0;
      }
    });
    return (
      <View style={styles.spentView}>
        <Text style={styles.spent}>{`Custos das Viagem R$ ${price.toFixed(
          2,
        )}`}</Text>
      </View>
    );
  }

  renderItemList = ({item}) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() =>
        this.props.navigation.navigate('TripDetails', {trip: item})
      }>
      <Text style={styles.smallBoxText}>
        {`${item && item.id} - ${item &&
          item.unidadeGestoraResponsavel &&
          item.unidadeGestoraResponsavel.nome}`}
      </Text>
      <Text style={styles.boxText}>
        {item && item.pessoa && item.pessoa.nome}
      </Text>
    </TouchableOpacity>
  );

  render() {
    console.log(this.props.trips.data);

    return <View style={styles.container}>{this.renderList()}</View>;
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchTripsNextPage: (
    agencyCode,
    page,
    departureDateBegin,
    departureDateEnd,
    arrivalDateBegin,
    arrivalDateEnd,
  ) =>
    dispatch(
      Actions.fetchTrips(
        agencyCode,
        page,
        departureDateBegin,
        departureDateEnd,
        arrivalDateBegin,
        arrivalDateEnd,
      ),
    ),
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
