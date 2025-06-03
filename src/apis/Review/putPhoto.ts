import RNFS from 'react-native-fs';
import {Buffer} from 'buffer';
import axios from 'axios';

export const putPhoto = async (presignedUrls, images) => {
  try {
    if (!presignedUrls || presignedUrls.length === 0) {
      console.error('❌ 업로드할 Presigned URL이 없습니다.');
      return false;
    }

    if (!images || images.length === 0) {
      console.error('❌ 업로드할 이미지가 없습니다.');
      return false;
    }

    if (presignedUrls.length !== images.length) {
      console.error('❌ Presigned URL과 이미지 개수가 일치하지 않습니다.');
      return false;
    }

    console.log(`✅ ${images.length}개의 이미지 업로드 시작`);

    const uploadPromises = images.map(async (image, index) => {
      try {
        const fileUri = image.uri.replace('file://', ''); // iOS/Android 호환
        const presignedUrl = presignedUrls[index];

        console.log(`🟡 [${index + 1}] 업로드 시작: ${fileUri}`);

        // 👉 이미지 파일을 base64로 읽기
        const fileBase64 = await RNFS.readFile(fileUri, 'base64');
        const buffer = Buffer.from(fileBase64, 'base64');

        // 👉 PUT 요청 전송
        const uploadResponse = await axios.put(presignedUrl, buffer, {
          headers: {
            // 서버에서 Content-Type 필요 없다고 했다면 아래 생략 가능
            // 'Content-Type': 'image/jpeg',
          },
        });

        console.log(`✅ [${index + 1}] 업로드 성공:`, uploadResponse.status);
      } catch (error) {
        console.error(`❌ [${index + 1}] 업로드 실패:`, error.message);
      }
    });

    await Promise.all(uploadPromises);

    console.log('🎉 모든 이미지 업로드 완료!');
    return true;
  } catch (error) {
    console.error('❌ 이미지 업로드 중 오류 발생:', error.message);
    return false;
  }
};
