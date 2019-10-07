import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  container: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
