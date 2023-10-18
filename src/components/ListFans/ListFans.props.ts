import {FavouriteData} from '../../store/favouriteSlice/favSlice.types';

export interface ListFansProps {
  data: FavouriteData[];
  femaleFans: (quantity: number) => void;
  maleFans: (quantity: number) => void;
  otherFans: (quantity: number) => void;
}
