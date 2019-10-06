import React, {Component} from 'react';
import {View, Button, Platform} from 'react-native';
import DatePicker from '../../components/datepicker';

class SearchTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agency: this.props.navigation.getParam('agency', {}),
      departureDateBegin: null,
      departureDateEnd: null,
      arrivalDateBegin: null,
      arrivalDateEnd: null,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('agency', {descricao: ''}).descricao,
    };
  };

  handleDateChange = (date, key) => {
    if (date) {
      this.setState({[key]: date});
    }
  };

  navigate = () => {
    const {departureDateBegin, arrivalDateEnd} = this.state;
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
        <Button title={'buscar'} onPress={this.navigate} />
      </View>
    );
  }
}

export default SearchTrip;
