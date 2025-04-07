//네이버 로그인 시 이동하는 페이지 입니다.
//웹뷰로 네이버 소셜 로그인 페이지를 가져옵니다.
import React, {useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import {Dimensions, Alert} from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loginSuccess} from '../../../store/slices/authSlice';

const NaverLoginWebView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    // 모든 쿠키 삭제 (자동 로그인 방지)
    CookieManager.clearAll().then(() => console.log('쿠키 삭제 완료'));
  }, []);

  const handleMessage = async event => {};
  function getQueryParam(url: string, key: string): string | null {
    const match = url.match(new RegExp(`[?&]${key}=([^&]+)`));
    return match ? decodeURIComponent(match[1]) : null;
  }

  return (
    <>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        setSupportMultipleWindows={true}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        startInLoadingState={true}
        onNavigationStateChange={navState => {
          const url = navState.url;
          console.log('🔁 현재 URL:', url);

          if (url.includes('https://catsnap.app/oauth-success')) {
            const token = getQueryParam(url, 'accessToken');
            if (token) {
              dispatch(loginSuccess({token, isAuthor: false}));
              navigation.navigate('Home');
            }
          }

          if (url.includes('error')) {
            Alert.alert('로그인 실패', '로그인 중 오류가 발생했습니다.');
          }
        }}
        source={{uri: 'https://api.catsnap.net/oauth2/authorization/naver'}} // 네이버 로그인 페이지 URL
      />
    </>
  );
};

export default NaverLoginWebView;
