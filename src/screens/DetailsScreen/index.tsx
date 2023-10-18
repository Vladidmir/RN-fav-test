import React, {FC, memo, useEffect, useState} from 'react';
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

  const renderDetail = (label: string, value: string) => {
    return (
      <Text style={s.titleInfo} key={label}>
        {`${label} `}
        <Text style={s.infoTextValue}>{value}</Text>
      </Text>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={s.container}>
        {nameHomeWorld && species ? (
          <>
            <TouchableOpacity
              style={s.backIcon}
              onPress={() => navigation.goBack()}>
              <Icon name="NavigatePrev" size={w(30)} color={''} />
              <Text style={s.backText}>Go back</Text>
            </TouchableOpacity>
            <View style={s.infoWrapper}>
              <Image
                style={s.image}
                source={require('../../assets/img/crossed-light-swords.jpg')}
              />
              <Text style={s.nameText}>{data.name}</Text>
              {renderDetail('Species:', species)}
              {renderDetail('Birth Year:', data.birth_year)}
              {renderDetail('Gender:', data.gender)}
              {renderDetail('Weight:', data.mass)}
              {renderDetail('Home World:', nameHomeWorld)}
              {renderDetail('Skin color:', data.skin_color)}
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
