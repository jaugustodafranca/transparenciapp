import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  text: {
    flex: 1,
  },
  button: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#000000aa',
    borderWidth: 1,
    flex: 1,
  },
});
