import { memo } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

import { IFavsWeatherSate } from '../../common/types';
import { useWeather } from '../../context/WeatherContext';
import { theme } from '../../utils';
import { WeatherIcon } from '../WeatherConditions';

const { width } = Dimensions.get('window');

interface IFavoriteCityProps extends IFavsWeatherSate {
  icon: string;
  setIsFavoritesModalOpen: (value: boolean) => void;
}
const FavoriteCity = ({
  name,
  temp,
  icon,
  description,
  setIsFavoritesModalOpen,
}: IFavoriteCityProps) => {
  const { setAppLoading, setSearchValue } = useWeather();

  const handleFavoritePress = () => {
    setSearchValue(name);
    setAppLoading(true);
    setIsFavoritesModalOpen(false);
  };
  return (
    <TouchableOpacity onPress={handleFavoritePress}>
      <View style={styles.favCityContainer}>
        <Text style={styles.cityName}>{name}</Text>
        <Text style={styles.cityTemp}>{Math.round(temp)} C°</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.weatherIcon}>
          <WeatherIcon iconProp={icon} />
        </View>
      </View>
    </TouchableOpacity>
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
