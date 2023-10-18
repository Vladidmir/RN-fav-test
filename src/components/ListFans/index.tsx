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
  const countGender = () => {
    const counts = {male: 0, female: 0, other: 0};

    data.forEach(item => {
      switch (item.gender) {
        case 'female':
          counts.female++;
          break;
        case 'male':
          counts.male++;
          break;
        case 'n/a':
          counts.other++;
          break;
        default:
          break;
      }
    });

    maleFans(counts.male);
    femaleFans(counts.female);
    otherFans(counts.other);
  };

  useEffect(() => {
    countGender();
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
