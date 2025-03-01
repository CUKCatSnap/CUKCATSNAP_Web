//예약 목록 컴포넌트 박스 입니다.
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView, Text, StyleSheet, ScrollView, View} from 'react-native';
import * as S from './Style';
import Point from '../../../../icons/point.svg';

const ReserveDataBox = ({item}) => {
  const [reservationStatus, setReservationStatus] = useState(item.state);

  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const isUser = useSelector(state => state.auth.user);
  return (
    <SafeAreaView>
      {isAuthor ? (
        <S.Container>
          <S.ContainerText>
            <S.Title>{item.reservedProgramResponse.title}</S.Title>
            <S.Content>
              {item.memberTinyInformationResponse.nickname} 님
            </S.Content>
            <S.Content>
              {item.startTime[0]}-{item.startTime[1]}-{item.startTime[2]}
            </S.Content>
            <S.Content>
              {item.startTime[3]}:
              {item.startTime[4] === 0 ? '00' : item.startTime[4]}
            </S.Content>
            <S.PointContainer>
              <S.SvgBox>
                <Point />
              </S.SvgBox>
              <S.Content>{item.reservationLocation.locationName}</S.Content>
            </S.PointContainer>
          </S.ContainerText>
          <S.ContainerBox state={reservationStatus} />
        </S.Container>
      ) : isUser ? (
        <S.Container>
          <S.ContainerText>
            <S.Title>{item.reservedProgramResponse.title}</S.Title>
            <S.Content>
              {item.photographerTinyInformationResponse.nickname} 작가
            </S.Content>
            <S.Content>{item.startTime.split(' ')[0]}</S.Content>
            <S.Content>{item.startTime.split(' ')[1]}</S.Content>
            <S.PointContainer>
              <S.SvgBox>
                <Point />
              </S.SvgBox>
              <S.Content>{item.reservationLocation.locationName}</S.Content>
            </S.PointContainer>
          </S.ContainerText>
          <S.ContainerBox state={reservationStatus} />
        </S.Container>
      ) : (
        <Text>로그인이 필요합니다.</Text>
      )}
    </SafeAreaView>
  );
};

export default ReserveDataBox;
