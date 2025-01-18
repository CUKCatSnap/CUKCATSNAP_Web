import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CatSnap from '../../icons/CatSnap.svg';

const SplashScreenPage = () => {
  useEffect(() => {
    // 앱이 로딩된 후 스플래시 화면을 숨깁니다.
    setTimeout(() => {}, 2000);
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
