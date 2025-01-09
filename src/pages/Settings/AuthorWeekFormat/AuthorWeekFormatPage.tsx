//작가의 요일별 예약 설정을 조회하는 페이지 입니다.
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Modal,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import ContentsHeader from '../../../components/ContentsHeader/ContentsHeader';
import * as S from './Style';
import LoginBtn from '../../../components/Login/LoginBtn';
import CustomModal from '../../../components/Modal/Modal';
import CalendarBtn from '../../../components/Calendar/CalendarBtn/CalendarBtn';

const AuthorWeekFormatPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>(''); // 선택된 요일을 관리
  const [formatsByDay, setFormatsByDay] = useState<any>({
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    SATURDAY: [],
    SUNDAY: [],
    HOLIDAY: [],
  });

  const handleBtn = (day: string) => {
    setSelectedDay(day); // 선택된 요일에 맞춰 모달 열기
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSelectFormats = (formats: string[]) => {
    setFormatsByDay(prevFormats => ({
      ...prevFormats,
      [selectedDay]: formats, // 선택된 요일에 맞춰 포맷 저장
    }));
  };
  const handleWeekSave = () => {};
  const handleDelete = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ContentsHeader text="요일별 예약 설정" />
        {[
          'MONDAY',
          'TUESDAY',
          'WEDNESDAY',
          'THURSDAY',
          'FRIDAY',
          'SATURDAY',
          'SUNDAY',
          'HOLIDAY',
        ].map(day => (
          <S.DayBox key={day}>
            <S.DayText>
              {day === 'MONDAY'
                ? '월요일'
                : day === 'TUESDAY'
                ? '화요일'
                : day === 'WEDNESDAY'
                ? '수요일'
                : day === 'THURSDAY'
                ? '목요일'
                : day === 'FRIDAY'
                ? '금요일'
                : day === 'SATURDAY'
                ? '토요일'
                : day === 'SUNDAY'
                ? '일요일'
                : '공휴일'}{' '}
              :
            </S.DayText>
            {formatsByDay[day].length > 0 ? (
              <S.TimeBox>
                {formatsByDay[day].map(format => (
                  <S.Contents key={format}>
                    <S.TitleText>{format}</S.TitleText>
                  </S.Contents>
                ))}
              </S.TimeBox>
            ) : (
              <S.NoneText>선택된 시간이 없습니다.</S.NoneText>
            )}

            <S.ContentsBtn>
              <LoginBtn text="추가/삭제" onPress={() => handleBtn(day)} />
            </S.ContentsBtn>
          </S.DayBox>
        ))}
        <CustomModal
          visible={modalVisible}
          onClose={closeModal}
          message=""
          onSelectFormats={handleSelectFormats}
          selectedDay={selectedDay}
        />
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

export default AuthorWeekFormatPage;
