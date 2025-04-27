import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {Alert} from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loginSuccess} from '../../../store/slices/authSlice';

const NaverLoginWebView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    // 로그인 세션 제거
    CookieManager.clearAll().then(() => console.log('쿠키 삭제 완료'));
  }, []);

  const handleMessage = event => {
    const token = event.nativeEvent.data;
    console.log('✅ 받은 액세스 토큰:', token);

    if (token) {
      dispatch(loginSuccess({token, isAuthor: false}));
      navigation.navigate('Home');
    } else {
      Alert.alert('로그인 실패', '토큰을 받지 못했습니다.');
    }
  };

  return (
    <WebView
      source={{uri: 'https://api.catsnap.net/oauth2/authorization/naver'}}
      javaScriptEnabled
      onMessage={handleMessage}
      onError={() => Alert.alert('오류', '웹뷰 로딩 중 오류가 발생했습니다.')}
    />
  );
};

export default NaverLoginWebView;
