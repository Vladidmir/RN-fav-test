import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const s = StyleSheet.create({
  paginationContainer: {
    height: w(40),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  pageInfoText: {
    marginRight: w(10),
    fontSize: w(16),
  },
});

export {s};
