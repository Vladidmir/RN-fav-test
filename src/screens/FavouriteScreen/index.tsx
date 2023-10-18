import React, {FC, memo, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useAppSelector, useAppDispatch} from '../../store';

//components
import {ListFans} from '../../components/ListFans';
import Button from '../../components/ui/Button';

import {s} from './Favourite.styles';

//redux
import {resetFavourites} from '../../store/favouriteSlice';

export const FavouriteScreen: FC = () => {
  const favourite = useAppSelector(state => state.favourite.favourite);

  const [femaleFans, setFemaleFans] = useState(0);
  const [maleFans, setmaleFans] = useState(0);
  const [otherFans, setOtherFans] = useState(0);

  const dispatch = useAppDispatch();

  const resetFavouritesFun = () => {
    dispatch(resetFavourites());
  };

  return (
    <SafeAreaView style={s.container}>
      <View style={s.wrapperFavourite}>
        <View style={s.wrapperGenderFans}>
          <Text style={s.counterLabel}>
            Female Fans <Text style={s.counterFans}>{femaleFans}</Text>
          </Text>
          <Text style={s.counterLabel}>
            Male Fans <Text style={s.counterFans}>{maleFans}</Text>
          </Text>
          <Text style={s.counterLabel}>
            Others <Text style={s.counterFans}>{otherFans}</Text>
          </Text>
        </View>
        <ListFans
          data={favourite}
          femaleFans={setFemaleFans}
          maleFans={setmaleFans}
          otherFans={setOtherFans}
        />
        <Button
          onPress={() => resetFavouritesFun()}
          title="CLEAR FANS"
          mode="transparent"
        />
      </View>
    </SafeAreaView>
  );
};
