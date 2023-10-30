import React, {FC, memo, useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Icon} from '../../components/ui/Icon';
import {Props} from './DetailsScreen.props';

import {w} from '../../styles/scale';
import {s} from './DetailsScreen.styles';

import {useSWAPI} from '../../hooks/useSWAPI';

const DetailsScreenFunc: FC<Props> = ({route, navigation}) => {
  const {data} = route.params;

  const {fetchHomeWorld, fetchSpecies} = useSWAPI();

  const [details, setDetails] = useState({
    nameHomeWorld: '',
    species: '',
  });

  const fetchDetails = async () => {
    try {
      const nameHomeWorld = await fetchHomeWorld(data.homeworld);
      const species = await fetchSpecies(data.species[0] || '');

      setDetails({
        nameHomeWorld: nameHomeWorld || 'Not Found',
        species: species || 'Not Found',
      });
    } catch (error) {
      setDetails({
        nameHomeWorld: 'Not Found',
        species: 'Not Found',
      });
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const {nameHomeWorld, species} = details;

  const renderDetail = useMemo(
    () => (label: string, value: string) => {
      return (
        <Text style={s.titleInfo} key={label}>
          {`${label} `}
          <Text style={s.infoTextValue}>{value}</Text>
        </Text>
      );
    },
    [],
  );

  // To be honest, this is the first time I'm using useMemo for memorizing component .
  // I usually use it with numbers when there are complex mathematical calculations involved, in order to store values
  // and prevent unnecessary re-rendering of the component.

  const characterDetails = [
    {label: 'Species:', value: species},
    {label: 'Birth Year:', value: data.birth_year},
    {label: 'Gender:', value: data.gender},
    {label: 'Weight:', value: data.mass},
    {label: 'Home World:', value: nameHomeWorld},
    {label: 'Skin color:', value: data.skin_color},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>
        {nameHomeWorld && species ? (
          <>
            <TouchableOpacity
              style={s.backIcon}
              onPress={() => navigation.goBack()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="NavigatePrev" size={w(30)} color={''} />
                <Text style={s.backText}>Go back</Text>
              </View>
            </TouchableOpacity>
            <View style={s.infoWrapper}>
              <Image
                style={s.image}
                source={require('../../assets/img/crossed-light-swords.jpg')}
              />
              <Text style={s.nameText}>{data.name}</Text>

              {characterDetails.map(detail =>
                renderDetail(detail.label, detail.value),
              )}
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </SafeAreaView>
  );
};

export const DetailsScreen = memo(DetailsScreenFunc);
