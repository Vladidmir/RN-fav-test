import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: w(16),
    paddingVertical: 20,
    backgroundColor: Colors.WHITE,
  },
});

export {s};
