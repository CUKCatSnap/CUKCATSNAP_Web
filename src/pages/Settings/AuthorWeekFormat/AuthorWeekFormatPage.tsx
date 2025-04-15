//작가의 요일별 예약 설정을 조회하는 페이지 입니다.
import React, {useState, useEffect} from 'react';
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
import {fetchTimeFormatAll} from '../../../apis/AuthorTimeFormat/getAuthorTimeFormatAll';
import {useFocusEffect} from '@react-navigation/native';

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

  const getTimeFormatAll = async () => {
    try {
      const response = await fetchTimeFormatAll();
      const result = response?.data?.reservationTimeFormatAllList;
      if (Array.isArray(result)) {
        const newFormatsByDay = {
          MONDAY: [],
          TUESDAY: [],
          WEDNESDAY: [],
          THURSDAY: [],
          FRIDAY: [],
          SATURDAY: [],
          SUNDAY: [],
          HOLIDAY: [],
        };

        result.forEach(item => {
          const {weekday, reservationTimeFormat} = item;
          const formatName = reservationTimeFormat?.formatName;

          if (weekday && formatName) {
            newFormatsByDay[weekday].push(formatName);
          }
        });

        setFormatsByDay(newFormatsByDay);
      } else {
        console.warn('서버에서 요일별 데이터가 없습니다.');
      }
    } catch (error) {
      console.error('오류 발생');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getTimeFormatAll();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <S.Container>
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
                    <S.ContentsView key={format}>
                      <S.ContentBox>
                        <S.TitleText numberOfLines={1}>{format}</S.TitleText>
                      </S.ContentBox>
                    </S.ContentsView>
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
        </S.Container>
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
