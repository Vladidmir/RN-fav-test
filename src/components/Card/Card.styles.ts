import {StyleSheet} from 'react-native';

import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: w(5),
    marginVertical: w(8),
  },
  infoContainer: {
    height: w(100),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfoContainer: {
    fontSize: w(16),
    marginLeft: w(16),
  },
  infoText: {
    fontWeight: '500',
    color: Colors.BLACK,
  },
  bottomContainer: {
    width: w(50),
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    borderRadius: w(80),
    width: w(80),
    resizeMode: 'contain',
  },
});

export {s};
