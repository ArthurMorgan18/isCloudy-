import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import WeatherService from '../../api/services/WeatherService';
import { IFavsWeatherSate } from '../../common/types';

interface IUseFavorites {
  name: string;
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
        const updatedFavorites = existingFavorites.filter(
          (favorite: string) => favorite !== name && favorite !== null,
        );
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites)).then(() => {
          setIsFavorite(false);
          setFavCities(updatedFavorites);
        });
      } else {
        existingFavorites.push(name);
        await AsyncStorage.setItem('favorites', JSON.stringify(existingFavorites)).then(() => {
          setIsFavorite(true);
          setFavCities(existingFavorites);
        });
      }
    } catch (error) {
      console.error('Error saving to favorites:', error);
    }
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
      const favoriteCities = JSON.parse(favoriteCitiesFromStorage || '[]').filter(
        (item) => item !== null,
      );
      setFavCities(favoriteCities);
    };
    getFavs();
  }, [name]);

  const fetchFavoritesWeather = async () => {
    const weatherPromises = favCities.map(async (city) => {
      const res = await WeatherService.getWeatherByCity(city);
      return {
        name: city,
        temp: res?.main.temp,
        icon: res?.weather[0].icon,
        description: res?.weather[0].description,
      };
    });

    const favsWeatherState = await Promise.all(weatherPromises);
    //@ts-ignore
    setFavsWeather(favsWeatherState);
  };

  useEffect(() => {
    fetchFavoritesWeather();
  }, [favCities]);

  console.log(favCities);

  return { isFavorite, saveToFavorites, fetchFavoritesWeather, favsWeather };
};

export default useFavorites;
