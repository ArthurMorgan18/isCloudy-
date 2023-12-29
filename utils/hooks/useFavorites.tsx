import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

import WeatherService from '../../api/services/WeatherService';

interface IUseFavorites {
  name: string;
}

interface IFavsWeatherSate {
  name: string;
  temp: number;
}

const useFavorites = ({ name }: IUseFavorites) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favCities, setFavCities] = useState<string[]>([]);
  const [favsWeather, setFavsWeather] = useState<[IFavsWeatherSate | []]>();
  const saveToFavorites = async () => {
    const res = await AsyncStorage.getItem('favorites');
    try {
      const favoritesCollection = res;
      const existingFavorites = favoritesCollection ? JSON.parse(favoritesCollection) : [];

      if (existingFavorites.includes(name)) {
        // If the name is already in favorites, remove it
        const updatedFavorites = existingFavorites.filter((favorite: string) => favorite !== name);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites)).then(() =>
          setIsFavorite(false),
        );
      } else {
        existingFavorites.push(name);
        await AsyncStorage.setItem('favorites', JSON.stringify(existingFavorites)).then(() =>
          setIsFavorite(true),
        );
      }
    } catch (error) {
      console.error('Error saving to favorites:', error);
    }
    setFavCities(res ? JSON.parse(res) : []);
  };

  useEffect(() => {
    const checkIfFavorite = async () => {
      try {
        const favoriteCitiesFromStorage = await AsyncStorage.getItem('favorites');
        const favoriteCities = JSON.parse(favoriteCitiesFromStorage || '[]');
        const isCurrentlyFavorite = favoriteCities.includes(name);
        setIsFavorite(isCurrentlyFavorite);
      } catch (error) {
        console.error('Error checking if favorite:', error);
      }
    };

    checkIfFavorite();
  }, [name]);

  useEffect(() => {
    const getFavs = async () => {
      const favoriteCitiesFromStorage = await AsyncStorage.getItem('favorites');
      const favoriteCities = JSON.parse(favoriteCitiesFromStorage || '[]');
      setFavCities(favoriteCities);
    };
    getFavs();
  }, [name]);

  const fetchFavoritesWeather = useCallback(async () => {
    favCities.forEach((city: string) => {
      WeatherService.getWeatherByCity(city).then((res) => {
        const newState = [...favsWeather, { name: city, temp: res?.main.temp }];
        setFavsWeather((prevFavsWeather) => [...prevFavsWeather, ...newState]);
      });
    });
  }, [favCities]);

  return { isFavorite, saveToFavorites, fetchFavoritesWeather, favsWeather };
};

export default useFavorites;
