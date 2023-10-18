import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PaginationProps} from './Pagination.props';

import {s} from './Pagination.styles';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';
import {Icon} from '../ui/Icon';

const ITEMS_PER_PAGE = 10;

const PaginationFunc: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  nextPage,
  prevPage,
}) => {
  const startItem = currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalPage);

  const isBeforePageDisabled = currentPage === 1;
  const isNextPageDisabled = currentPage * ITEMS_PER_PAGE > totalPage;

  return (
    <View style={s.paginationContainer}>
      <Text style={s.pageInfoText}>
        {startItem}-{endItem} of {totalPage}
      </Text>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          width: 100,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity disabled={isBeforePageDisabled} onPress={prevPage}>
          <Icon
            name="NavigatePrev"
            color={isBeforePageDisabled ? Colors.GREY : Colors.BLACK}
            size={w(30)}
          />
        </TouchableOpacity>
        <TouchableOpacity disabled={isNextPageDisabled} onPress={nextPage}>
          <Icon
            name="NavigateNext"
            color={isNextPageDisabled ? Colors.GREY : Colors.BLACK}
            size={w(30)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const Pagination = memo(PaginationFunc);
