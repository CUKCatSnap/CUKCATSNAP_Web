//홈 화면의 '내 예약' 컴포넌트 입니다.

import React from 'react';
import {SafeAreaView, TouchableHighlight} from 'react-native';
import * as S from './Style';
import Bell from '../../icons/alarm.svg';
import Hamburger from '../../icons/hamburger.svg';
import CatSnap from '../../icons/CatSnap.svg';
import Alarm from '../../pages/Alarm/Alarm';
import Settings from '../../pages/Settings/Settings.tsx';

const Header = () => {
  return (
    <SafeAreaView>
      <S.HeaderContainer>
        <TouchableHighlight>
          <Hamburger />
        </TouchableHighlight>
        <CatSnap />
        <TouchableHighlight>
          <Bell />
        </TouchableHighlight>
      </S.HeaderContainer>
    </SafeAreaView>
  );
};

export default Header;
