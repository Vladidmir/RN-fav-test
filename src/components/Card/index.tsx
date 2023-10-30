import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../store';

import {Icon} from '../ui/Icon';

import {s} from './Card.styles';
import {w} from '../../styles/scale';
import {Colors} from '../../styles/colors';

import {addToFavourite} from '../../store/favouriteSlice';

import {CardProps, CardScreenNavigationProp} from './Card.props';

const CardFunc: FC<CardProps> = ({data, favouriteCard}) => {
  const navigation = useNavigation<CardScreenNavigationProp>();
  const goToDetailsScreen = () => {
    navigation.navigate('Details', {
      data,
    });
  };

  const dispatch = useAppDispatch();

  const addToFavouriteFun = () => {
    dispatch(addToFavourite({name: data.name, gender: data.gender}));
  };

  return (
    <TouchableOpacity onPress={goToDetailsScreen}>
      <View style={s.container}>
        <View style={s.infoContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              style={s.image}
              source={require('../../assets/img/crossed-light-swords.jpg')}
            />
            <Text style={s.textInfoContainer}>
              <Text style={s.infoText}>{data.name}</Text>
            </Text>
          </View>
          <View style={s.bottomContainer}>
            <TouchableOpacity onPress={() => addToFavouriteFun()}>
              <Icon
                name={favouriteCard ? 'HeartFill' : 'Heart'}
                color={favouriteCard ? Colors.RED : Colors.GREY}
                size={w(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = memo(CardFunc);
