import {Data} from '../HomeScreen/HomeScreen.props';

type ParamsData = {
  data: Data;
};

export type Props = {
  route: {params: ParamsData};
  navigation: any;
};
