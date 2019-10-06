import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import Logo from '../../assets/logo-transparenciApp.png';
import styles from './styles';
import {connect} from 'react-redux';
import * as Actions from '../../actions';

const falseList = [
  {
    codigo: '26219',
    descricao: 'Centro Federal de Educação Tecnológica de Santa Catarina',
    codigoDescricaoFormatado:
      '26219 - Centro Federal de Educação Tecnológica de Santa Catarina',
  },
  {
    codigo: '26246',
    descricao: 'Universidade Federal de Santa Catarina',
    codigoDescricaoFormatado: '26246 - Universidade Federal de Santa Catarina',
  },
  {
    codigo: '26438',
    descricao: 'Instituto Federal de Santa Catarina',
    codigoDescricaoFormatado: '26438 - Instituto Federal de Santa Catarina',
  },
  {
    codigo: '96220',
    descricao: 'Estado de Santa Catarina',
    codigoDescricaoFormatado: '96220 - Estado de Santa Catarina',
  },
];

class SearchAgency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  tableHeader = () => (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}>Resultados:</Text>
    </View>
  );

  renderItemList = ({item}) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() =>
        this.props.navigation.navigate('SearchTrip', {agency: item})
      }>
      <Text style={styles.boxText}>{item.codigoDescricaoFormatado}</Text>
    </TouchableOpacity>
  );

  renderList() {
    if (this.props.agencies.data && this.props.agencies.data.length < 1) {
      return;
    }
    return (
      <FlatList
        style={styles.list}
        data={this.props.agencies.data}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={this.tableHeader}
        renderItem={this.renderItemList}
        keyExtractor={item => item.codigo}
      />
    );
  }

  render() {
    console.log(this.props.agencies);
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Logo} />
        <Button title="Buscar" onPress={() => this.props.getSearchAgencies()} />
        <View>
          <Text style={styles.title}>Procurar Orgão do Governo Federal: </Text>
          <TextInput
            style={styles.inputSearch}
            placeholder="Digite nome do orgão"
            onEndEditing={() => console.log('funcionando')}
          />
          {this.renderList()}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchAgencies: () => dispatch(Actions.fetchAgencies()),
});
function mapStateToProps(state) {
  return {
    agencies: state.transparencia.agencies,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchAgency);
