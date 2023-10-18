import {Data} from '../../screens/HomeScreen/HomeScreen.props';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigations';

export interface CardProps {
  data: Data;
  favouriteCard: boolean;
}

export type CardScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Details'
>;
