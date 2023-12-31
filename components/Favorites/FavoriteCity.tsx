import { memo } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { IFavsWeatherSate } from '../../common/types';
import { theme } from '../../utils';
import { WeatherIcon } from '../WeatherConditions';

const { width } = Dimensions.get('window');

interface IFavoriteCityProps extends IFavsWeatherSate {
  icon: string;
}
const FavoriteCity = ({ name, temp, icon, description }: IFavoriteCityProps) => {
  return (
    <View style={styles.favCityContainer}>
      <Text style={styles.cityName}>{name}</Text>
      <Text style={styles.cityTemp}>{Math.round(temp)} C°</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.weatherIcon}>
        <WeatherIcon iconProp={icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favCityContainer: {
    width: width - 40,
    height: 190,
    backgroundColor: theme.primaryColor,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
  },
  cityName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.input.textColor,
  },
  cityTemp: {
    fontSize: 45,
    fontWeight: 'bold',
    color: theme.input.textColor,
  },
  weatherIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    color: theme.input.textColor,
    bottom: 10,
    left: 10,
  },
});
export default memo(FavoriteCity);
