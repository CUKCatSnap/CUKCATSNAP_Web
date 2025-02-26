//채팅 페이지 입니다.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Modal,
  View,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';
import * as S from './Style';
import CalendarBtn from '../Calendar/CalendarBtn/CalendarBtn';
import {fetchTimeFormat} from '../../apis/AuthorTimeFormat/getAuthorTimeFormat';
import ReserveBox from '../Reserve/ReserveBox/ReserveBox';
import {postAuthorWeekFormat} from '../../apis/AuthorTimeFormat/postAuthorWeekFormat';
import {deleteAuthorWeekFormat} from '../../apis/AuthorTimeFormat/deleteAuthorWeekFormat';

interface CustomModalProps {
  selectedDay: string;
  visible: boolean;
  onClose: () => void;
  message: string;
  onSelectFormats: (formats: string[]) => void; // 선택된 데이터를 전달할 콜백
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  message,
  onSelectFormats,
  selectedDay,
}) => {
  const [timeFormatList, setTimeFormatList] = useState([]); // 목록 데이터를 저장할 상태
  const [isClicked, setIsClicked] = useState(false);
  const [isTimeExist, setIsTimeExist] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null); // 하나의 선택된 포맷만 저장
  const [reservationTimeFormatId, setreservationTimeFormatId] = useState<
    string | null
  >(null); // 선택된 포맷 ID 저장

  // API 호출로 설정 가져오기
  const loadTimeFormat = async () => {
    try {
      const response = await fetchTimeFormat();
      if (response && response.data) {
        setTimeFormatList(response.data.reservationTimeFormatList); // 목록 저장
      }
    } catch (error) {
      console.log('예약 알림을 불러오는 중 오류 발생: ' + error.message);
    }
  };

  useEffect(() => {
    if (visible) {
      setSelectedFormat(null); // 모달이 열릴 때마다 선택된 포맷 초기화
      setreservationTimeFormatId(null); // 포맷 ID도 초기화
    }
    loadTimeFormat();
  }, [visible]);

  // 예약 요소 선택
  const toggleSelect = (
    formatName: string,
    reservationTimeFormatId: string,
  ) => {
    if (selectedFormat === formatName) {
      // 이미 선택된 항목이면 해제
      setSelectedFormat(null);
      setIsClicked(true);
      setreservationTimeFormatId(null);
    } else {
      setSelectedFormat(formatName); // 하나의 포맷만 선택
      setIsClicked(false);
      setreservationTimeFormatId(reservationTimeFormatId); // 해당 포맷 ID도 선택
    }
  };
  // 요소 보내기
  const handleConfirm = async () => {
    if (selectedDay && reservationTimeFormatId && selectedFormat) {
      onSelectFormats([selectedFormat]); // 선택된 포맷을 배열로 전달
      try {
        const response = await postAuthorWeekFormat(
          selectedDay,
          reservationTimeFormatId,
        ); // formatId를 함께 전달

        console.log(response); // 응답 확인
      } catch (error) {
        console.log('예약 설정을 보내는 중 오류 발생: ' + error.message);
      }
    }

    onClose(); // 모달 닫기
  };

  //요소 삭제하기
  const handleDelete = async () => {
    onSelectFormats([]);
    try {
      const response = await deleteAuthorWeekFormat(selectedDay); // formatId를 함께 전달
      console.log(response); // 응답 확인
    } catch (error) {
      console.log('예약 설정을 삭제하는 중 오류 발생: ' + error.message);
    }
    onClose(); // 모달 닫기
  };

  //설정 취소하고 모달 창 끄기
  const handleCancel = () => {
    onClose();
  };

  return (
    <SafeAreaView>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}>
        <S.ModalViewContainer>
          <S.ModalBox>
            <View>
              <S.ContentsText>{message}</S.ContentsText>

              <S.ModalFlatBox>
                {timeFormatList.length > 0 ? (
                  <FlatList
                    data={timeFormatList}
                    contentContainerStyle={{flexGrow: 1}}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.formatName}
                    ListFooterComponent={
                      <S.BtnBox>
                        <S.Btn>
                          <CalendarBtn
                            text="확인"
                            onPress={handleConfirm}
                            disabled={isClicked}
                          />
                        </S.Btn>
                        <S.Btn>
                          <CalendarBtn
                            text="삭제"
                            onPress={handleDelete}
                            disabled={isTimeExist}
                          />
                        </S.Btn>
                        <S.Btn>
                          <CalendarBtn text="취소" onPress={handleCancel} />
                        </S.Btn>
                      </S.BtnBox>
                    }
                    renderItem={({item}) => (
                      <S.Content
                        onPress={() =>
                          toggleSelect(
                            item.formatName,
                            item.reservationTimeFormatId,
                          )
                        }
                        isClicked={selectedFormat === item.formatName} // 선택된 포맷만 강조
                      >
                        <S.FormatText>{item.formatName}</S.FormatText>
                      </S.Content>
                    )}
                  />
                ) : (
                  <View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <S.TextBox>
                        <S.TimeText>생성된 예약 시간이 없습니다.</S.TimeText>
                      </S.TextBox>
                      <S.BtnBox>
                        <S.Btn>
                          <CalendarBtn
                            text="확인"
                            onPress={handleConfirm}
                            disabled={isClicked}
                          />
                        </S.Btn>
                        <S.Btn>
                          <CalendarBtn
                            text="삭제"
                            onPress={handleDelete}
                            disabled={isTimeExist}
                          />
                        </S.Btn>
                        <S.Btn>
                          <CalendarBtn text="취소" onPress={handleCancel} />
                        </S.Btn>
                      </S.BtnBox>
                    </ScrollView>
                  </View>
                )}
              </S.ModalFlatBox>
            </View>
          </S.ModalBox>
        </S.ModalViewContainer>
      </Modal>
    </SafeAreaView>
  );
};

export default CustomModal;
