import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '300',
  },
  inputSearch: {
    paddingLeft: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    flex: 1,
    marginRight: 10,
  },
  list: {
    marginTop: 20,
    marginBottom: 10,
  },
  headerList: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  boxItem: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 2,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 18,
    paddingRight: 16,
    marginTop: 0,
    marginBottom: 6,
  },
  boxText: {
    fontSize: 18,
    //fontFamily: 'Roboto',
  },
  smallBoxText: {
    fontSize: 10,
    color: '#464646',
  },
  container: {
    height: '100%',
    paddingHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  logo: {
    width: 120,
    height: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  buscar: {
    backgroundColor: '#0686e4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  buscarText: {
    color: 'white',
  },
  loadMore: {
    backgroundColor: '#0686e4',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 12,
    width: 150,
  },
  loadMoreText: {
    color: 'white',
    textAlign: 'center',
  },
});
