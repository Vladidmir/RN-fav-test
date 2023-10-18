import {StyleSheet} from 'react-native';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {},
  textName: {
    fontSize: w(16),
    width: '100%',
    marginVertical: 20,
    color: Colors.WHITE,
    backgroundColor: Colors.BLACK,
    borderRadius: w(5),
    padding: w(5),
    alignSelf: 'flex-start',
  },
});

export {styles};
