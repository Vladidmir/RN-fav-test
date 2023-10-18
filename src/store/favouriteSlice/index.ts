import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {FavouriteState, FavouriteData} from './favSlice.types';

const initialState: FavouriteState = {
  favourite: [],
};
export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<FavouriteData>) => {
      const itemIndex = state.favourite.findIndex(
        item => item.name === action.payload.name,
      );
      if (itemIndex !== -1) {
        state.favourite.splice(itemIndex, 1);
      } else {
        state.favourite.push(action.payload);
      }
    },
    resetFavourites: state => {
      state.favourite = [];
    },
  },
});

export const {addToFavourite, resetFavourites} = favouriteSlice.actions;
export default favouriteSlice.reducer;
