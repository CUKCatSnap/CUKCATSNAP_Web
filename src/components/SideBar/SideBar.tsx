import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, Dimensions, Animated, Easing} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../ContentsHeader/ContentsHeader';

const SideBar = ({isOpen, onClose}) => {
  // 화면의 너비와 높이를 가져옴
  const {width, height} = Dimensions.get('window');
  // 초기 값: 화면 바깥쪽
  const [slideAnim] = useState(new Animated.Value(-width));
  useEffect(() => {
    // 사이드바 열 때 애니메이션 실행
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: 0, // 화면 안으로 슬라이드
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    } else {
      // 사이드바 닫을 때 애니메이션 실행
      Animated.timing(slideAnim, {
        toValue: -width, // 화면 밖으로 슬라이드
        duration: 200,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen, width, slideAnim]);
  return (
    <SafeAreaView>
      <S.Container>
        <Animated.View
          style={{
            ...S.SideBarContainer,
            transform: [{translateX: slideAnim}],
          }}>
          <S.SideBarBox width={width * 0.5} height={height}>
            <S.TextBox>
              <S.SideBarText>로그인 정보</S.SideBarText>
              <S.Line />
            </S.TextBox>
            <S.TextBox>
              <S.SideBarText>예약 목록</S.SideBarText>
              <S.Line />
            </S.TextBox>
            <S.TextBox>
              <S.SideBarText>설정</S.SideBarText>
              <S.Line />
            </S.TextBox>
            <S.TextBox>
              <S.SideBarText>로그아웃</S.SideBarText>
              <S.Line />
            </S.TextBox>
          </S.SideBarBox>
        </Animated.View>
      </S.Container>
      <S.SideBarContainer width={width} height={height} onPress={onClose} />
    </SafeAreaView>
  );
};

export default SideBar;
