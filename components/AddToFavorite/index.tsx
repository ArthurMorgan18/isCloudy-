import { TouchableOpacity, View, StyleSheet } from 'react-native';

import { useWeather } from '../../context/WeatherContext';
import { theme } from '../../utils';
import useFavorites from '../../utils/hooks/useFavorites';
import FavoriteIcon from '../WeatherDetails/FavoriteIcon';

const AddToFavorite = () => {
  const { currentWeatherState } = useWeather();
  const { name } = currentWeatherState || '';
  const { isFavorite, saveToFavorites } = useFavorites({ name });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={saveToFavorites}>
        <FavoriteIcon fill={isFavorite ? '#ed7979' : theme.input.textColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 195,
    left: 150,
    zIndex: 2,
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default AddToFavorite;
