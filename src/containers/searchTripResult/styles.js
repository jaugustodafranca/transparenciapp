import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  list: {
    marginBottom: 10,
    marginHorizontal: 5,
  },
  boxItem: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 2,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 18,
    paddingRight: 16,
    marginTop: 0,
    marginBottom: 6,
    alignSelf: 'stretch',
  },
  smallBoxText: {
    fontSize: 10,
  },
  container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#efefef',
  },
  noResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  spentView: {
    backgroundColor: '#efefef',
  },
  spent: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
});
