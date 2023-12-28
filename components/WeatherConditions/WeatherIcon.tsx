import { StyleSheet } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useWeather } from '../../context/WeatherContext';
import DynamicWeatherImages from '../../utils/DynamicWeatherImages';
import useWeatherCondition from '../../utils/hooks/useWeatherCondition';

const WeatherIcon = () => {
  const { currentWeatherState } = useWeather();
  const iconValue = currentWeatherState.weather[0].icon || '01d';
  const { tap, animatedStyle, iconState } = useWeatherCondition(iconValue);
  const imageSrc = DynamicWeatherImages.GetImage(iconState.icon, iconState.dayTime);

  return (
    <GestureDetector gesture={tap}>
      {imageSrc ? (
        <Animated.Image
          source={imageSrc}
          resizeMode="center"
          style={[styles.weatherImage, animatedStyle]}
        />
      ) : (
        <Animated.Image
          source={require('../../assets/images/defaults/defaultWeatherCondition.png')}
          resizeMode="center"
          style={[styles.weatherImage, animatedStyle]}
        />
      )}
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  weatherImage: {
    width: 200,
    height: 200,
  },
});

export default WeatherIcon;
