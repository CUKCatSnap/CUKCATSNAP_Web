import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';
import CatSnap from '../../icons/CatSnap.svg';

const SplashScreenPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // 3초 후에 로딩 화면을 숨기고 홈 화면으로 이동
    setTimeout(() => {}, 2000); // 3초 대기
  }, []);

  return (
    <View style={styles.container}>
      <CatSnap />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SplashScreenPage;
