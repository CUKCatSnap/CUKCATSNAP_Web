//검색창 컴포넌트 입니다.
import React from 'react';
import {SafeAreaView, Text, Style} from 'react-native';
import * as S from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchDetail from '../../../icons/searchdetail.svg';

interface SearchBarProps {
  onChangeText: (text: string) => void; // 텍스트 입력 변경 핸들러
  onFocus: () => void; // 포커스 핸들러
  onSubmitEditing: () => void; // 엔터 키 입력 처리 핸들러
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChangeText,
  onFocus,
  onSubmitEditing,
}) => {
  return (
    <SafeAreaView>
      <S.SearchBarContainer>
        <S.SearchInputBox
          placeholder="검색어를 입력하세요"
          onChangeText={onChangeText} // 부모에게 입력값 전달
          onFocus={onFocus} // 포커스 시 핸들러 호출
          onSubmitEditing={onSubmitEditing} // 엔터 키 입력 시 핸들러 호출
          returnKeyType="search" // 엔터 키를 검색으로 설정
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
