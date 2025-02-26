//작가의 예약 프로그램을 만들 수 있는 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import * as S from './Style';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import {createReservation} from '../../apis/ReserveProgram/postReserveProgram';
import {fetchReservationPrograms} from '../../apis/ReserveProgram/getReserveProgram';
import LoginBtn from '../../components/Login/LoginBtn';
import {useNavigation} from '@react-navigation/native';

const ReserveProgram = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [isdisabled, setDisabled] = useState(true);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleSubmitAuthor = async () => {
    const reservationData = {
      title,
      content,
      price: Number(price),
      durationMinutes: Number(durationMinutes),
    };

    const result = await createReservation(reservationData);
    if (result) {
      fetchReservationPrograms();
      Alert.alert('예약 프로그램이 등록되었습니다.');
      navigation.navigate('Mypage');
    } else {
      Alert.alert('예약 프로그램 생성에 실패했습니다.');
    }
  };

  //프로그램 추가 버튼 활성화
  useEffect(() => {
    if (!title || !content || !price) {
      setDisabled(true); // 입력이 모두 있을 경우 버튼 활성화
    } else {
      setDisabled(false);
    }
  }, [title, content, price]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text={'프로그램 생성'} />
        <S.ProgramContainer>
          <S.Title>프로그램명</S.Title>
          <S.InputBox
            value={title}
            onChangeText={setTitle}
            textAlignVertical="top"
          />
          <S.Title>내용</S.Title>
          <S.InputBox
            value={content}
            onChangeText={setContent}
            textAlignVertical="top"
            numberOfLines={5}
            multiline={true}
          />
          <S.Title>가격(단위 : 원)</S.Title>
          <S.InputBox
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </S.ProgramContainer>
        <S.ProgramContainer>
          <LoginBtn
            disabled={isdisabled}
            onPress={handleSubmitAuthor}
            text={'프로그램 추가하기'}
          />
        </S.ProgramContainer>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default ReserveProgram;
