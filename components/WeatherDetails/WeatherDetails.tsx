import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, TouchableHighlight } from 'react-native';

import DescriptionText from './DescriptionText';
import FavoriteIcon from './FavoriteIcon';
import HeadingText from './HeadingText';
import { saveDesriptionObj } from '../../common/constants/';
import { useWeather } from '../../context/WeatherContext';
import { theme } from '../../utils';
import { unixConverter } from '../../utils/unixConverter';
import Favorites from '../Favorites';

const { width, height } = Dimensions.get('window');

const WeatherDetails = () => {
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const { currentWeatherState, appLoading } = useWeather();
  const {
    visibility,
    main: { feels_like, humidity, pressure },
    sys: { sunrise, sunset },
    wind: { deg, speed, gust },
  } = currentWeatherState || saveDesriptionObj;

  return (
    <View style={styles.weatherDetailsContainer}>
      {appLoading || (!sunrise && !sunset) ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          <View style={styles.rowContainer}>
            <View style={styles.column}>
              <HeadingText>Sunrise:</HeadingText>
              <DescriptionText>{unixConverter(sunrise)}</DescriptionText>
            </View>
            <View style={styles.column}>
              <HeadingText>Sunset:</HeadingText>
              <DescriptionText>{unixConverter(sunset)}</DescriptionText>
            </View>
            <View style={styles.column}>
              <HeadingText>Wind:</HeadingText>
              <DescriptionText>speed: {speed} m/s</DescriptionText>
              <DescriptionText>degrees: {deg}°</DescriptionText>
              <DescriptionText>gust: {gust} m/s</DescriptionText>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.column}>
              <HeadingText>Visibility:</HeadingText>
              <DescriptionText>{visibility} m</DescriptionText>
            </View>
            <View style={styles.column}>
              <HeadingText>Feels like:</HeadingText>
              <DescriptionText>{feels_like} c°</DescriptionText>
            </View>
            <View style={styles.column}>
              <HeadingText>Humidity:</HeadingText>
              <DescriptionText>{humidity}</DescriptionText>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.column}>
              <HeadingText>Pressure:</HeadingText>
              <DescriptionText>{pressure} h/p</DescriptionText>
            </View>
            <View style={styles.favColumn}>
              <TouchableHighlight
                style={{ width: 24 }}
                onPress={() => setIsFavoritesModalOpen(true)}>
                <FavoriteIcon fill={theme.input.textColor} />
              </TouchableHighlight>
            </View>
          </View>
          <Favorites
            setIsFavoritesModalOpen={setIsFavoritesModalOpen}
            isFavoritesModalOpen={isFavoritesModalOpen}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  weatherDetailsContainer: {
    width: width - 25,
    height: height / 2.8,
    backgroundColor: theme.descriptionWindowColor,
    position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  favColumn: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 15,
    marginRight: 15,
    padding: 5,
    borderRadius: 10,
    width: 24,
    height: 24,
  },
});

export default WeatherDetails;
