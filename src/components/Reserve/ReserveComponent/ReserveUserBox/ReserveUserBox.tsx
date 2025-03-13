//달력에서 보이는 예약 목록 컴포넌트 박스 입니다.(회원용)
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import Point from '../../../../icons/point.svg';

const ReserveUserBox = ({item}) => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleReserve = () => {
    navigation.navigate('ReserveState', {item});
  };

  const formatDate = startTime => {
    // Z가 포함된 ISO 8601 형식인지 확인
    if (startTime.includes('T')) {
      // ISO 8601 형식: "2025-03-01T07:08:07.041Z"
      const date = new Date(startTime);
      return `${String(date.getHours()).padStart(2, '0')}:${String(
        date.getMinutes(),
      ).padStart(2, '0')}`;
    } else {
      // 로컬 형식: "2025-03-01 17:00"
      return startTime.split(' ')[1]; // 시간만 추출
    }
  };

  const time = formatDate(item.startTime); // 형식 맞추기
  return (
    <SafeAreaView>
      <S.ReserveContainer onPress={handleReserve}>
        <S.ReserveBox>
          <S.TextContainer>
            <S.ReserveText>{time}</S.ReserveText>
            <S.Line />
            <S.ReserveTitleText numberOfLines={1}>
              {item.reservedProgramResponse.title}
            </S.ReserveTitleText>
            <S.Box>
              <S.ReserveText2 numberOfLines={1}>
                {item.photographerTinyInformationResponse.nickname} 작가
              </S.ReserveText2>
              <S.PointContainer>
                <S.SvgBox>
                  <Point />
                </S.SvgBox>
                <S.ReserveText2 numberOfLines={1}>
                  {item.reservationLocation.locationName}
                </S.ReserveText2>
              </S.PointContainer>
            </S.Box>
          </S.TextContainer>
          <S.ContainerBox state={item.state} />
        </S.ReserveBox>
      </S.ReserveContainer>
    </SafeAreaView>
  );
};

export default ReserveUserBox;
