import React, {FC, memo, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';

//components
import {Card} from '../../components/Card';
import {Pagination} from '../../components/Pagination';
import {Search} from '../../components/Search';

import {useAppSelector} from '../../store';

import {s} from './HomeScreen.styles';

import {useSWAPI} from '../../hooks/useSWAPI';

import {Data, Item, Props} from './HomeScreen.props';

export const HomeScreen: FC<Props> = ({}) => {
  const favourite = useAppSelector(state => state.favourite.favourite);

  const {fetchCharacters, loading} = useSWAPI();

  const [data, setData] = useState<Data[] | null>(null);
  const [serachData, setSearchData] = useState<Data[] | null>(null);

  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await fetchCharacters(currentPage);
        setTotalPage(response.count);
        setData(response.results);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch data.');
      }
    };

    getCharacters();
  }, []);

  useEffect(() => {
    if (data) {
      const searchResult = data.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase().trim()),
      );
      setSearchData(searchResult);
    }
  }, [searchText]);

  const renderItem = ({item}: Item) => {
    let favouriteCard = false;

    if (favourite.some(favouriteItem => favouriteItem.name === item.name)) {
      favouriteCard = true;
    }

    return <Card key={item.name} data={item} favouriteCard={favouriteCard} />;
  };
  const nextPage = async () => {
    const limitation = Math.ceil(totalPage / 10);
    if (currentPage < limitation) {
      const nextPageData = await fetchCharacters(currentPage + 1);
      setData(nextPageData.results);
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = async () => {
    if (currentPage > 1) {
      const prevPageData = await fetchCharacters(currentPage - 1);
      setData(prevPageData.results);
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Search searchText={searchText} setSearchText={setSearchText} />

      <View style={[s.container, {justifyContent: 'center'}]}>
        {!loading ? (
          <FlatList
            data={searchText.length ? serachData : data}
            renderItem={renderItem}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </SafeAreaView>
  );
};
