import * as Location from 'expo-location';

import { useWeather } from '../../context/WeatherContext';
const useLocation = () => {
  const { setAppLoading, setSearchValue } = useWeather();

  const requestLocationHandler = async () => {
    setAppLoading(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;

    const location = await Location.getCurrentPositionAsync({});
    const result = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    if (result?.length > 0) {
      const city = result[0].city || result[0].subregion;
      setSearchValue(city);
      setAppLoading(false);
    }
  };

  return { requestLocationHandler };
};

export default useLocation;
