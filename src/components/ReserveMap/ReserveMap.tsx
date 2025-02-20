//홈 화면의 '장소 찾기' 버튼을 누르면 나오는 지도 페이지 입니다.

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import * as S from './Style';
import {API_KEY} from '@env';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import MapView, {Marker, MapPressEvent} from 'react-native-maps';
// Geocoding API 키 설정 (Google Cloud에서 발급)
Geocoder.init(API_KEY, {language: 'ko'});

interface ReserveMapProps {
  onLocationSelect: (
    newlet: string,
    newlon: string,
    locationName: string,
  ) => void; // 부모로 locationName을 전달하는 함수 타입 정의
}
const ReserveMap: React.FC<ReserveMapProps> = ({onLocationSelect}) => {
  const [region, setRegion] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationName, setLocationName] = useState('');

  // 지도 클릭 시 위치 설정
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
    address: string;
  } | null>(null);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.error('위치 가져오기 실패:', error),
      {enableHighAccuracy: true},
    );
  };

  // 컴포넌트 렌더링 후 바로 위치를 가져옴
  if (region === null) {
    getCurrentLocation();
  }
  const handleMapPress = async (event: MapPressEvent) => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    console.log('위치 : ', latitude, longitude);
    try {
      const geoResponse = await Geocoder.from(latitude, longitude);
      const address = geoResponse.results[0]?.formatted_address || '주소 없음';
      setLatitude(latitude.toString());
      setLongitude(longitude.toString());
      setLocationName(address);
      // 선택된 위치 업데이트
      setSelectedLocation({
        latitude: latitude,
        longitude: longitude,
        address: address,
      });
      // 위치가 선택되면 부모 컴포넌트로 locationName 전달
      onLocationSelect(latitude, longitude, address);
    } catch (error) {
      console.error('주소 가져오기 실패:', error);
    }
  };

  return (
    <SafeAreaView>
      {region && (
        <S.Box>
          <S.MapView>
            <MapView
              style={{width: '100%', height: 200}}
              region={region}
              onPress={handleMapPress}>
              {selectedLocation && (
                <Marker
                  coordinate={{
                    latitude: selectedLocation.latitude,
                    longitude: selectedLocation.longitude,
                  }}
                  title="선택한 위치"
                  description={selectedLocation.address}
                  pinColor={'green'}
                />
              )}
              <Marker coordinate={region} />
            </MapView>
          </S.MapView>
        </S.Box>
      )}
    </SafeAreaView>
  );
};

export default ReserveMap;
