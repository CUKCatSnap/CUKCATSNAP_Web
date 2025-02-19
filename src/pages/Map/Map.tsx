//홈 화면의 '장소 찾기' 버튼을 누르면 나오는 지도 페이지 입니다.

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import * as S from './Style';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.error(error),
      {enableHighAccuracy: true},
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {region && (
        <MapView style={styles.map} region={region}>
          <Marker coordinate={region} />
        </MapView>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  map: {width: '100%', height: '100%'},
});

export default Map;
