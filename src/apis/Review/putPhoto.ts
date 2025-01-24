//받은 Presigned Url을 가지고 사진을 업로드하는 api
//put 요청으로 보낸다

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from '../getAccessToken';
import RNFS from 'react-native-fs'; // 파일을 읽어서 변환하는 라이브러리

// Presigned URL을 이용한 S3 이미지 업로드 함수
export const putPhoto = async (presignedUrls, images) => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('액세스 토큰이 없습니다.');
      return null;
    }

    if (!presignedUrls || presignedUrls.length === 0) {
      console.error('업로드할 Presigned URL이 없습니다.');
      return null;
    }

    if (!images || images.length === 0) {
      console.error('업로드할 이미지가 없습니다.');
      return null;
    }

    // 이미지 개수와 Presigned URL 개수가 다르면 오류 처리
    if (presignedUrls.length !== images.length) {
      console.error('Presigned URL과 이미지 개수가 일치하지 않습니다.');
      return null;
    }

    const uploadPromises = images.map(async (image, index) => {
      const fileUri = image.uri; // 이미지 파일 경로
      const presignedUrl = presignedUrls[index]; // 해당 이미지의 Presigned URL

      // 파일을 바이너리 형식(Buffer)으로 변환
      const fileData = await RNFS.readFile(fileUri, 'base64'); // Base64 변환
      const blob = Buffer.from(fileData, 'base64'); // 버퍼로 변환

      // S3로 업로드 (PUT 요청)
      await apiClient.put(presignedUrl, blob, {
        headers: {
          'Content-Type': 'image/jpeg', // 이미지 타입 지정
        },
      });

      console.log(`이미지 업로드 성공: ${presignedUrl}`);
    });

    // 모든 업로드 요청이 완료될 때까지 기다림
    await Promise.all(uploadPromises);

    console.log('모든 이미지 업로드 완료!');
    return true;
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    return false;
  }
};
