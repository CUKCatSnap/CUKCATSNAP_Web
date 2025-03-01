//달력에서 보이는 예약 목록 컴포넌트 박스 입니다.(작가용)
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';
import {useNavigation} from '@react-navigation/native';
import Point from '../../../../icons/point.svg';
const ReserveAuthorBox = ({item}) => {
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleReserve = () => {
    navigation.navigate('ReserveState', {item});
  };

  return (
    <SafeAreaView>
      <S.ReserveContainer onPress={handleReserve}>
        <S.ReserveBox>
          <S.TextContainer>
            <S.ReserveText>
              {item.startTime[3]}:
              {item.startTime[4] === 0 ? '00' : item.startTime[4]}
            </S.ReserveText>
            <S.Line />
            <S.ReserveTitleText numberOfLines={1}>
              {item.reservedProgramResponse.title}
            </S.ReserveTitleText>
            <S.Box>
              <S.ReserveText2 numberOfLines={1}>
                {item.memberTinyInformationResponse.nickname} 님
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

export default ReserveAuthorBox;
