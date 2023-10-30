import React, {FC, memo, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';

import {styles} from './ListFans.styles';
import {w} from '../../styles/scale';

import {ListFansProps} from './ListFans.props';

const ListFansFunc: FC<ListFansProps> = ({
  data,
  maleFans,
  femaleFans,
  otherFans,
}) => {
  const initialCounts = {male: 0, female: 0, other: 0};

  //  I decided to use 'reduce' and set an initial value to avoid starting the calculation from 0 every time

  const counts = data.reduce((acc, item) => {
    switch (item.gender) {
      case 'female':
        acc.female++;
        break;
      case 'male':
        acc.male++;
        break;
      case 'n/a':
        acc.other++;
        break;
      default:
        break;
    }
    return acc;
  }, initialCounts);

  useEffect(() => {
    maleFans(counts.male);
    femaleFans(counts.female);
    otherFans(counts.other);
  }, [data]);

  return (
    <ScrollView
      style={{flex: 1, marginTop: w(16)}}
      contentContainerStyle={{alignItems: 'center'}}>
      {data.map(item => (
        <Text style={styles.textName} key={item.name}>
          {item.name}
        </Text>
      ))}
    </ScrollView>
  );
};

export const ListFans = memo(ListFansFunc);
