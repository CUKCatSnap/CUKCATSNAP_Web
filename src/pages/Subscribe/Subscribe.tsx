//구독 페이지 입니다.
import React from 'react';
import {SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import Subtitle from '../../components/Subscribe/Subtitle';
import RecentReserve from '../../components/Home/RecentReserve/Recentreserve';
import * as S from './Style';

const Subscribe = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContentsHeader />
      <Subtitle />
      <S.SubscribeBox>
        <RecentReserve />
        <RecentReserve />
      </S.SubscribeBox>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Subscribe;
