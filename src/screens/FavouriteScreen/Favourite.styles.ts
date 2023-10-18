import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  wrapperFavourite: {
    width: '100%',
    padding: w(16),
    flex: 1,
  },
  wrapperGenderFans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterLabel: {
    fontSize: w(14),
    fontWeight: '400',
    color: Colors.BLACK,
  },
  counterFans: {
    fontSize: w(16),
    fontWeight: '500',
    color: Colors.BLACK,
  },
});

export {s};
