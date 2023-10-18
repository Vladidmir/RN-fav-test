import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const s = StyleSheet.create({
  searchContainer: {
    width: '100%',
    paddingHorizontal: w(16),
    marginVertical: 20,
    backgroundColor: Colors.WHITE,
    height: w(40),
    justifyContent: 'center',
  },
  searchWrapper: {
    width: '100%',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
  },
  inputStyles: {
    fontSize: w(16),
    paddingHorizontal: w(28),
    borderBottomColor: Colors.GREY,
    borderBottomWidth: w(0.5),
  },
});

export {s};
