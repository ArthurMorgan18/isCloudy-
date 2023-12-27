import { ActivityIndicator, View, StyleSheet } from 'react-native';

import DescriptionText from './DescriptionText';
import { useWeather } from '../../context/WeatherContext';
const PrimeDescription = () => {
  const { appLoading, currentWeatherState } = useWeather();

  return (
    <View style={styles.primeDescription}>
      {appLoading || currentWeatherState === null ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          <DescriptionText fontSize={20}>{currentWeatherState.name}</DescriptionText>
          <DescriptionText fontSize={12}>{currentWeatherState.sys.country}</DescriptionText>
          <DescriptionText fontSize={55}>
            {Math.round(Number(currentWeatherState.main.temp))} C°
          </DescriptionText>
          <DescriptionText fontSize={15}>
            {currentWeatherState.weather[0].description}
          </DescriptionText>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  primeDescription: {
    width: 200,
    height: 200,
    marginTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrimeDescription;
