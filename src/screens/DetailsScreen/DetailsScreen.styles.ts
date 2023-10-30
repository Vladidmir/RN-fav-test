import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: w(16),
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  infoWrapper: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    height: 50,
  },
  backText: {
    color: Colors.BLACK,
    fontWeight: 'bold',
    fontSize: 20,
  },

  infoText: {
    fontSize: w(16),
  },
  titleInfo: {
    fontSize: w(16),
    width: '100%',
    marginVertical: 20,
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    borderRadius: w(5),
    padding: w(5),
    alignSelf: 'flex-start',
  },
  infoTextValue: {
    fontSize: w(16),
    fontWeight: '500',
    color: Colors.WHITE,
  },
  nameText: {
    fontWeight: '700',
    fontSize: w(24),
    color: Colors.BLACK,
  },
  image: {
    alignSelf: 'center',
    width: w(200),
    height: w(200),
    borderRadius: w(120),
    resizeMode: 'contain',
  },
});

export {s};
