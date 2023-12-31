import { StyleSheet, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { useWeather } from '../../context/WeatherContext';
import DynamicWeatherImages from '../../utils/DynamicWeatherImages';
import useWeatherCondition from '../../utils/hooks/useWeatherCondition';

interface IWeatherIconProps {
  iconProp?: string;
}

const WeatherIcon = ({ iconProp }: IWeatherIconProps) => {
  const { currentWeatherState } = useWeather();
  const iconValue = iconProp ? iconProp : currentWeatherState?.weather[0]?.icon || '01d';
  const { tap, animatedStyle, iconState } = useWeatherCondition(iconValue);
  const imageSrc = DynamicWeatherImages.GetImage(iconState.icon, iconState.dayTime);

  return (
    <View style={styles.iconContainer}>
      <GestureDetector gesture={tap}>
        {imageSrc ? (
          <Animated.Image
            //@ts-ignore
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
    </View>
  );
};

const styles = StyleSheet.create({
  weatherImage: {
    width: 200,
    height: 200,
  },
  iconContainer: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default WeatherIcon;
