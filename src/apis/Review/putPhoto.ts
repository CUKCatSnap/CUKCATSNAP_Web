import axios from 'axios';

// Presigned URL을 이용한 S3 이미지 업로드
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
        const fileUri = image.uri;
        const presignedUrl = presignedUrls[index];

        console.log(`🟡 [${index + 1}] 업로드 시작: ${fileUri}`);

        // 이미지 파일을 Blob으로 변환
        const response = await fetch(fileUri);
        const blob = await response.blob();

        console.log(`🟡 [${index + 1}] PUT 요청 전송 중... ${presignedUrl}`);

        // PUT 요청으로 S3 업로드
        const uploadResponse = await axios.put(presignedUrl, blob, {
          headers: {
            'Content-Type': 'image/png',
          },
        });

        console.log(`✅ [${index + 1}] 업로드 성공:`, uploadResponse.status);
      } catch (error) {
        console.error(`❌ [${index + 1}] 업로드 실패:`, error);
      }
    });

    await Promise.all(uploadPromises);

    console.log('🎉 모든 이미지 업로드 완료!');
    return true;
  } catch (error) {
    console.error('❌ 이미지 업로드 중 오류 발생:', error);
    return false;
  }
};
