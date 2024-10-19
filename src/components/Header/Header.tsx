//홈 화면의 헤더 컴포넌트 (햄버거, 로고, 알림) 입니다.

import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import * as S from './Style';
import Bell from '../../icons/alarm.svg';
import Hamburger from '../../icons/hamburger.svg';
import CatSnap from '../../icons/CatSnap.svg';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <S.HeaderContainer>
        <TouchableOpacity>
          <Hamburger />
        </TouchableOpacity>
        <CatSnap />
        <TouchableOpacity onPress={() => navigation.navigate('Alarm')}>
          <Bell />
        </TouchableOpacity>
      </S.HeaderContainer>
    </SafeAreaView>
  );
};

export default Header;
