//네이버 로그인 시 이동하는 페이지 입니다.
//웹뷰로 네이버 소셜 로그인 페이지를 가져옵니다.
import React, {useEffect, useRef} from 'react';
import {WebView} from 'react-native-webview';
import {Dimensions, Alert} from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import {naverLogin} from '../../../apis/Login/postNaverLogin';
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

  const handleMessage = async event => {
    const message = event.nativeEvent.data;
    console.log('Received message:', message); // URL 확인

    // 로그인 성공 후 특정 URL 확인 (예: 'http://localhost:8080/callback')
    if (message.includes('https://api.catsnap.net/callback')) {
      try {
        const response = await naverLogin();
        if (response) {
          dispatch(loginSuccess({...response, isAuthor: false}));
          console.log('네이버 로그인 완료');
          navigation.navigate('Home');
        }
      } catch (error) {
        console.log('로그인 실패', error.message || '알 수 없는 오류 발생');
      }
    }
  };

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
        onMessage={handleMessage} // 메시지를 받아서 처리
        injectedJavaScript={
          'window.ReactNativeWebView.postMessage(window.location.href);'
        } // 로그인 후 URL을 postMessage로 보내기
        source={{uri: 'https://api.catsnap.net/oauth2/authorization/naver'}} // 네이버 로그인 페이지 URL
      />
    </>
  );
};

export default NaverLoginWebView;
