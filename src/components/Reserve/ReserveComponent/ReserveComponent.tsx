//예약 목록 컴포넌트 박스 입니다.
import React from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';
const ReserveComponent = ({item}) => {
  return (
    <SafeAreaView>
      <S.ReserveContainer>
        {/*<Text>예약 ID: {item.reservationId}</Text>
          <Text>위도: {item.reservationLocation.latitude}</Text>
        <Text>경도: {item.reservationLocation.longitude}</Text>
           <Text>
          작가 프로필 사진:{' '}
          {item.photographerTinyInformationResponse.profilePhotoUrl}
        </Text>*/}
        <S.ReserveTitleText>
          {item.reservedProgramResponse.title}
        </S.ReserveTitleText>
        <S.ReserveText>
          {new Date(item.startTime).toLocaleString()}
        </S.ReserveText>
        <S.ReserveText>
          {item.photographerTinyInformationResponse.nickname} 작가
        </S.ReserveText>
        {item.state === 'APPROVED' && (
          <View>
            <Text>예약 상황 : 예약 승인</Text>
          </View>
        )}
        {item.state === 'REJECTED' && (
          <View>
            <Text>예약 상황 : 예약 취소</Text>
          </View>
        )}
        {item.state === 'PHOTOGRAPHY_CANCELLED' && (
          <View>
            <Text>예약 상황 : 촬영 취소</Text>
          </View>
        )}
        {item.state === 'PENDING' && (
          <View>
            <Text>예약 상황 : 예약 대기</Text>
          </View>
        )}
        <Text>장소 : {item.reservationLocation.locationName}</Text>
      </S.ReserveContainer>
    </SafeAreaView>
  );
};

export default ReserveComponent;
