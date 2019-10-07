import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import DatePicker from '../../components/datepicker';
import {connect} from 'react-redux';
import * as Actions from '../../actions';

class SearchTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agency: this.props.navigation.getParam('agency', {}),
      departureDateBegin: null,
      departureDateEnd: null,
      arrivalDateBegin: null,
      arrivalDateEnd: null,
      validateMessage: null,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('agency', {descricao: ''}).descricao,
    };
  };

  validate = () => {
    const {
      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    } = this.state;
    if (
      !departureDateBegin ||
      !departureDateEnd ||
      !arrivalDateEnd ||
      !arrivalDateBegin
    ) {
      this.setState({
        validateMessage: 'Preencha todos os campos',
      });
    } else if (departureDateEnd < departureDateBegin) {
      this.setState({
        validateMessage: 'Data Ida Fim menor que Data Ida Inicio',
      });
    } else if (arrivalDateEnd < arrivalDateBegin) {
      this.setState({
        validateMessage: 'Data Retorno Fim menor que Data Retorno Inicio',
      });
    } else if (arrivalDateBegin < departureDateBegin) {
      this.setState({
        validateMessage: 'Data Retorno menor que Data Ida',
      });
    } else {
      this.setState({
        validateMessage: null,
      });
      this.navigate();
    }
  };

  handleDateChange = (date, key) => {
    if (date) {
      this.setState({[key]: date});
    }
  };

  navigate = () => {
    const {
      agency,
      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    } = this.state;

    this.props.searchForTrips(
      agency.codigo,
      parseInt(this.props.page, 10) + 1,

      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    );
    this.props.navigation.navigate('TripResult', {
      departureDateBegin,
      arrivalDateEnd,
    });
  };

  render() {
    const {
      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    } = this.state;

    return (
      <View>
        <DatePicker
          text={'Data ida inicio'}
          date={departureDateBegin}
          onDateChange={date =>
            this.handleDateChange(date, 'departureDateBegin')
          }
        />
        <DatePicker
          text={'Data ida fim'}
          date={departureDateEnd}
          onDateChange={date => this.handleDateChange(date, 'departureDateEnd')}
        />
        <DatePicker
          text={'Data retorno inicio'}
          date={arrivalDateBegin}
          onDateChange={date => this.handleDateChange(date, 'arrivalDateBegin')}
        />
        <DatePicker
          text={'Data retorno fim'}
          date={arrivalDateEnd}
          onDateChange={date => this.handleDateChange(date, 'arrivalDateEnd')}
        />
        <Button title={'buscar'} onPress={this.validate} />
        <Text>{this.state.validateMessage}</Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchForTrips: (
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
    page: state.transparencia.agencies.page,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchTrip);
