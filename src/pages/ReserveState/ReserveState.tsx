//작가는 자신의 예약 상태를 변경하는 페이지 입니다.
//사용자는 자신의 예약 내역을 확인하고, 예약 리뷰 버튼이 있는 페이지 입니다.
import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  View,
  Alert,
} from 'react-native';
import ContentsHeader from '../../components/ContentsHeader/ContentsHeader';
import ReserveAuthorBox from '../../components/Reserve/ReserveComponent/ReserveAuthorBox/ReserveAuthorBox';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ReserveUserBox from '../../components/Reserve/ReserveComponent/ReserveUserBox/ReserveUserBox';
import {Picker} from '@react-native-picker/picker';
import {postReserveStatus} from '../../apis/AuthorReserve/postReserveState';
import * as S from './Style';
import LoginBtn from '../../components/Login/LoginBtn';

const ReserveState = ({route}) => {
  const {item} = route.params; // 전달된 item을 받기
  const [reservationStatus, setReservationStatus] = useState(item.state);

  const isAuthor = useSelector(state => state.auth.user?.isAuthor);
  const isUser = useSelector(state => state.auth.user);
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  const handleReview = () => {
    navigation.navigate('CreateReviewPage', {
      reservationId: item.reservationId,
    });
  };

  const handleStatusChange = (newStatus: string) => {
    postReserveStatus(item.reservationId, newStatus);
    console.log(`예약 상태가 ${newStatus}로 변경되었습니다.`);
    Alert.alert('예약 상태가 변경되었습니다.');
    navigation.navigate('MyCalendar');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isAuthor ? (
          <View>
            <ContentsHeader text={'예약 상태 변경하기'} />
            <S.StateComponent>
              <S.Container>
                <S.ContainerText>
                  <S.Title>{item.reservedProgramResponse.title}</S.Title>
                  <S.Content>
                    {item.memberTinyInformationResponse.nickname} 님
                  </S.Content>
                  <S.Content>
                    {item.startTime[0]}-{item.startTime[1]}-{item.startTime[2]}
                  </S.Content>
                  <S.Content>
                    {item.startTime[3]}:
                    {item.startTime[4] === 0 ? '00' : item.startTime[4]}
                  </S.Content>
                  <S.Content>
                    위치 : {item.reservationLocation.locationName}
                  </S.Content>
                </S.ContainerText>
                <S.ContainerBox state={reservationStatus} />
              </S.Container>

              <S.StateBox>
                {reservationStatus === 'PENDING' && (
                  <S.BtnText>예약 승인 대기중 입니다.</S.BtnText>
                )}
                {reservationStatus === 'APPROVED' && (
                  <S.BtnText>예약을 승인했습니다.</S.BtnText>
                )}
                {reservationStatus === 'REJECTED' && (
                  <S.BtnText>예약을 취소했습니다.</S.BtnText>
                )}
                {reservationStatus === 'PHOTOGRAPHY_CANCELLED' && (
                  <S.BtnText>촬영을 취소했습니다.</S.BtnText>
                )}
                <S.StateComponent>
                  {reservationStatus === 'PENDING' && (
                    <S.BtnBox>
                      <S.Btn>
                        <LoginBtn
                          text={'예약 승인'}
                          onPress={() => handleStatusChange('APPROVED')}
                        />
                      </S.Btn>
                      <S.Btn>
                        <LoginBtn
                          text={'예약 거부'}
                          onPress={() => handleStatusChange('REJECTED')}
                        />
                      </S.Btn>
                    </S.BtnBox>
                  )}

                  {reservationStatus === 'APPROVED' && (
                    <S.BtnBox>
                      <S.Btn>
                        <LoginBtn
                          text={'촬영 취소'}
                          onPress={() =>
                            handleStatusChange('PHOTOGRAPHY_CANCELLED')
                          }
                        />
                      </S.Btn>
                    </S.BtnBox>
                  )}
                </S.StateComponent>
              </S.StateBox>
            </S.StateComponent>
          </View>
        ) : (
          <S.StateComponent>
            <ContentsHeader text={'예약 확인'} />

            <S.Container>
              <S.ContainerText>
                <S.Title>{item.reservedProgramResponse.title}</S.Title>
                <S.Content>
                  {item.photographerTinyInformationResponse.nickname} 작가
                </S.Content>
                <S.Content>{item.startTime.split(' ')[0]}</S.Content>
                <S.Content>{item.startTime.split(' ')[1]}</S.Content>
                <S.Content>
                  위치 : {item.reservationLocation.locationName}
                </S.Content>
              </S.ContainerText>
              <S.ContainerBox state={reservationStatus} />
            </S.Container>

            <S.StateBox>
              {reservationStatus === 'PENDING' && (
                <S.BtnText>예약 승인 대기중 입니다.</S.BtnText>
              )}
              {reservationStatus === 'APPROVED' && (
                <S.BtnText>예약이 확정되었습니다.</S.BtnText>
              )}
              {reservationStatus === 'REJECTED' && (
                <S.BtnText>작가가 예약을 취소했습니다.</S.BtnText>
              )}
              {reservationStatus === 'PHOTOGRAPHY_CANCELLED' && (
                <S.BtnText>촬영이 취소되었습니다.</S.BtnText>
              )}
            </S.StateBox>

            <S.StateBox>
              {/*승인되었을때만 리뷰 작성 가능*/}
              <S.Btn2>
                {reservationStatus === 'APPROVED' && (
                  <LoginBtn text={'리뷰하기'} onPress={handleReview} />
                )}
              </S.Btn2>
            </S.StateBox>
          </S.StateComponent>
        )}
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
export default ReserveState;
