//홈 화면의 헤더 컴포넌트 (햄버거, 로고, 알림) 입니다.

import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import * as S from './Style';
import Bell from '../../icons/alarm.svg';
import Hamburger from '../../icons/hamburger.svg';
import CatSnap from '../../icons/CatSnap.svg';
import {useNavigation} from '@react-navigation/native';
import Sidebar from '../SideBar/SideBar';
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <S.SideBarBox>
        {/* 사이드바 */}
        {isSidebarOpen && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}
      </S.SideBarBox>
      <S.HeaderContainer>
        <TouchableOpacity onPress={() => setSidebarOpen(true)}>
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
