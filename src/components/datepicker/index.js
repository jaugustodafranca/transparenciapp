import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './styles';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      show: false,
    };
  }

  setDate = (event, date) => {
    date = date || this.state.date;
    this.setState({
      show: Platform.OS === 'ios' ? true : false,
    });
    this.props.onDateChange(date);
  };

  handlePress = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    const {show} = this.state;
    const {text, date} = this.props;
    const displayText = date
      ? moment(date).format('DD/MM/YYYY')
      : 'Selecione uma Data...';
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text>{displayText}</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            value={date || new Date()}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}

export default DatePicker;
