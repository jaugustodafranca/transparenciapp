import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import DatePicker from '../../components/datepicker';
import {connect} from 'react-redux';
import * as Actions from '../../actions';
import styles from './styles';
import {validateDates} from '../../utils';

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

    const validationResult = validateDates(
      departureDateBegin,
      departureDateEnd,
      arrivalDateBegin,
      arrivalDateEnd,
    );
    if (validationResult) {
      this.setState({
        validateMessage: 'Preencha todos os campos',
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
      <View style={styles.wrapper}>
        <View style={styles.container}>
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
            onDateChange={date =>
              this.handleDateChange(date, 'departureDateEnd')
            }
          />
          <DatePicker
            text={'Data retorno inicio'}
            date={arrivalDateBegin}
            onDateChange={date =>
              this.handleDateChange(date, 'arrivalDateBegin')
            }
          />
          <DatePicker
            text={'Data retorno fim'}
            date={arrivalDateEnd}
            onDateChange={date => this.handleDateChange(date, 'arrivalDateEnd')}
          />
          <Button title={'buscar'} onPress={this.validate} />
          <Text>{this.state.validateMessage}</Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  searchForTrips: (
    agencyCode,
    departureDateBegin,
    departureDateEnd,
    arrivalDateBegin,
    arrivalDateEnd,
  ) =>
    dispatch(
      Actions.fetchTrips(
        agencyCode,
        1,
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
