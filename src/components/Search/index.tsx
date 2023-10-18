import React, {FC, memo} from 'react';
import {View, TextInput} from 'react-native';

import {Icon} from '../ui/Icon';

import {w} from '../../styles/scale';
import {s} from './Search.styles';
import {Colors} from '../../styles/colors';

import {SearchProps} from './Search.props';

const SearchFunc: FC<SearchProps> = ({searchText, setSearchText}) => {
  const changeText = (e: string) => {
    setSearchText(e);
  };

  return (
    <View style={s.searchContainer}>
      <View style={s.searchWrapper}>
        <View style={s.searchIcon}>
          <Icon name="Search" color={Colors.BLACK} size={w(24)} />
        </View>
        <TextInput
          value={searchText}
          onChangeText={changeText}
          placeholder="Search"
          placeholderTextColor={Colors.GREY}
          style={s.inputStyles}
        />
      </View>
    </View>
  );
};

export const Search = memo(SearchFunc);
