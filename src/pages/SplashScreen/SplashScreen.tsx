import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import CatSnap from '../../icons/CatSnap.svg';
//import {Image} from 'react-native-svg';

const SplashScreenPage = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000, // 2초 동안 회전
      useNativeDriver: true,
    }).start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // 0도에서 360도 회전
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../images/mainLogo.png')}
        style={[styles.img, {transform: [{rotate: spin}]}]}
      />
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
  img: {
    width: 80,
    height: 80,
  },
});

export default SplashScreenPage;
