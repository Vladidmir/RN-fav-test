import {Dimensions} from 'react-native';

const GUIDE_LINE_BASE_WIDTH = 375;
const {width: SCREEN_WIDTH} = Dimensions.get('window');

const w = (value: number): number => {
  const responsiveWidth: number =
    (value / GUIDE_LINE_BASE_WIDTH) * SCREEN_WIDTH;
  return responsiveWidth;
};

export {w};
