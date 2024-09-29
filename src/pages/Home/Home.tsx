//홈 화면 페이지 입니다.
import React from 'react';
import {SafeAreaView} from 'react-native';
import MyReserve from '../../components/Home/MyReserve/MyReserve';
import RecentReserve from '../../components/Home/RecentReserve/Recentreserve';
import * as S from './Style';
import {ScrollView} from 'react-native';
import QuickIcon from '../../components/Home/Quickicon/QuickIcon';
import Title from '../../components/Home/Title/Title';
import Header from '../../components/Header/Header';
const Home = () => {
  return (
    <SafeAreaView>
      <S.Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <Title />
          <S.MyReserveContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <MyReserve />
            <MyReserve />
            <MyReserve />
          </S.MyReserveContainer>
          <S.QuickIconContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <QuickIcon />
            <QuickIcon />
            <QuickIcon />
            <QuickIcon />
            <QuickIcon />
          </S.QuickIconContainer>
          <Title />
          <S.RecentReserveContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <RecentReserve />
            <RecentReserve />
            <RecentReserve />
          </S.RecentReserveContainer>
        </ScrollView>
      </S.Container>
    </SafeAreaView>
  );
};

export default Home;
