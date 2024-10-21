//검색창 컴포넌트 입니다.
import React from 'react';
import {SafeAreaView, Text, Style} from 'react-native';
import * as S from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchDetail from '../../../icons/searchdetail.svg';
import {useNavigation} from '@react-navigation/native'; // 네비게이션 훅 가져오기

const SearchBar = () => {
  const navigation = useNavigation();

  // 검색창에 포커스하면 검색창 페이지 팝업
  const handleFocus = () => {
    navigation.navigate('SearchPage');
  };
  return (
    <SafeAreaView>
      <S.SearchBarContainer>
        <S.SearchInputBox
          placeholder="검색어를 입력하세요"
          onFocus={handleFocus}
        />
        <S.IconBox pointerEvents="none">
          <Icon name={'search'} size={30} color={'#C2C2C2'} />
        </S.IconBox>
        <S.IconBox2 pointerEvents="none">
          <SearchDetail />
        </S.IconBox2>
      </S.SearchBarContainer>
    </SafeAreaView>
  );
};

export default SearchBar;
