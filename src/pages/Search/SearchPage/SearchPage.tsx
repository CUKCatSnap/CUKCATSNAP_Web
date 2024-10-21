//검색창 커서 올리면 검색 페이지로 이동
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import SearchBar from '../../../components/Search/SearchBar/SearchBar';
import * as S from './Style';
import X from '../../../icons/x.svg';
const SearchPage = () => {
  return (
    <SafeAreaView>
      <SearchBar />
      <S.SearchLankingContainer>
        <S.HotPlace>핫 플레이스</S.HotPlace>
        <S.LankBox>
          <S.LankNumber>1</S.LankNumber>
          <S.Lank>북촌</S.Lank>
        </S.LankBox>
        <S.LankBox>
          <S.LankNumber>2</S.LankNumber>
          <S.Lank>한옥마을</S.Lank>
        </S.LankBox>
        <S.LankBox>
          <S.LankNumber>3</S.LankNumber>
          <S.Lank>가톨릭대학교</S.Lank>
        </S.LankBox>
        <S.SearchUnderBar />
        <S.SearchRecent>
          <S.SearchRecentText />
          <X />
        </S.SearchRecent>
      </S.SearchLankingContainer>
    </SafeAreaView>
  );
};

export default SearchPage;
