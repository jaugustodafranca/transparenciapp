import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';

import Logo from '../../assets/logo-transparenciApp.png';
import styles from './styles';
import {connect} from 'react-redux';
import * as Actions from '../../actions';

class SearchAgency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: true,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Image style={styles.logo} source={Logo} />,
    };
  };

  tableHeader = () => (
    <View style={styles.headerList}>
      <Text style={styles.headerTitle}>Resultados:</Text>
    </View>
  );

  renderFooter = () => {
    const {
      agencies: {loading, data, maxPage, page},
    } = this.props;

    if (!loading && data && data.length > 0) {
      if (maxPage && maxPage <= page) {
        return null;
      }
      return (
        <TouchableOpacity
          style={styles.loadMore}
          onPress={() => this.getSearchAgenciesNextPage()}>
          <Text style={styles.loadMoreText}>Carregar mais</Text>
        </TouchableOpacity>
      );
    }
    return <ActivityIndicator style={{color: '#000', height: 70}} />;
  };

  renderItemList = ({item}) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() =>
        this.props.navigation.navigate('SearchTrip', {agency: item})
      }>
      <Text style={styles.smallBoxText}>{item.codigo}</Text>
      <Text style={styles.boxText}>{item.descricao}</Text>
    </TouchableOpacity>
  );

  renderList() {
    if (this.props.agencies.data && this.props.agencies.data.length < 1) {
      if (this.props.agencies.loading) {
        return <ActivityIndicator size="large" />;
      }
      return;
    }
    return (
      <FlatList
        style={styles.list}
        data={this.props.agencies.data}
        //ListHeaderComponent={this.tableHeader}
        ListFooterComponent={this.renderFooter}
        renderItem={this.renderItemList}
        keyExtractor={item => item.codigo}
      />
    );
  }

  onChangeText(text) {
    this.setState({text});
  }

  getSearchAgenciesNextPage = () => {
    this.props.getSearchAgencies(this.state.text, this.props.agencies.page + 1);
  };

  getSearchAgencies = () => {
    this.props.getSearchAgencies(this.state.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Procurar Orgão do Governo Federal</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.inputSearch}
              placeholder="Digite nome do orgão"
              onChangeText={text => this.onChangeText(text)}
              value={this.state.text}
            />
            <TouchableOpacity
              style={styles.buscar}
              onPress={() => this.getSearchAgencies()}>
              <Text style={styles.buscarText}>Buscar</Text>
            </TouchableOpacity>
          </View>
          {this.renderList()}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSearchAgencies: (text, page) =>
    dispatch(Actions.fetchAgencies(text, page)),
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
