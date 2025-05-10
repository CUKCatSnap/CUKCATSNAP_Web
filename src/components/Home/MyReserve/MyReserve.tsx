//홈 화면의 '내 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const MyReserve = ({reservation}) => {
  const navigation = useNavigation();
  const handleReserve = () => {
    navigation.navigate('MyReserve');
  };
  const isAuthor = useSelector(state => state.auth.isAuthor);
  const isUser = useSelector(state => state.auth.isUser);

  let formattedDate = '';
  if (isUser) {
    //유저의 예약 데이터는 formattedDate 사용
    // 원하는 형식으로 출력 (YYYY-MM-DD HH:mm)
    const date = new Date(reservation.startTime);
    formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}, ${String(
      date.getHours(),
    ).padStart(2, '0')}시 ${String(date.getMinutes()).padStart(2, '0')}분`;
  } else if (isAuthor) {
    const startArray = reservation.startTime; // [2025, 4, 12, 13, 0]

    const year = startArray[0];
    const month = startArray[1];
    const day = startArray[2];
    const hour = startArray[3];
    const minute = startArray[4] === 0 ? '00' : startArray[4];

    formattedDate = `${year}-${month}-${day}, ${hour}시 ${minute}분`;
  }

  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <S.MyReserveContainer onPress={handleReserve}>
        <S.Shadow />
        <S.MyReserveBox
          colors={['#232074', '#423CDA']}
          start={{x: 1, y: 1}}
          end={{x: 0, y: 0}}
          style={{borderRadius: 20}}
        />
        <S.DateText>{formattedDate}</S.DateText>
        {isAuthor ? (
          <S.NameText numberOfLines={1}>
            {reservation.memberTinyInformationResponse.nickname} 님
          </S.NameText>
        ) : (
          <S.NameText numberOfLines={1}>
            {reservation.photographerTinyInformationResponse.nickname} 작가
          </S.NameText>
        )}
      </S.MyReserveContainer>
    </SafeAreaView>
  );
};

export default MyReserve;
