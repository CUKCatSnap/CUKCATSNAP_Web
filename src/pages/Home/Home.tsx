//홈 화면 페이지 입니다.
import React from 'react';
import {SafeAreaView} from 'react-native';
import MyReserve from '../../components/Home/MyReserve/MyReserve';
import RecentReserve from '../../components/Home/RecentReserve/Recentreserve';
import * as S from './Style';
import {ScrollView, StyleSheet} from 'react-native';
import QuickIcon from '../../components/Home/Quickicon/QuickIcon';
import Title from '../../components/Home/Title/Title';
import Header from '../../components/Header/Header';
import QuickCalendar from '../../components/Home/QuickCalendar/QuickCalendar';
import QuickMap from '../../components/Home/QuickMap/QuickMap';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          <S.QuickIconContainer>
            <QuickMap />
            <QuickIcon />
            <QuickCalendar />
          </S.QuickIconContainer>
          <Title />
          <S.RecentReserveContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <RecentReserve />
            <RecentReserve />
          </S.RecentReserveContainer>
        </ScrollView>
      </S.Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
});

export default Home;
