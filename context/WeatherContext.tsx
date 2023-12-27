import React, { createContext, useCallback, useContext, useEffect } from 'react';

import WeatherService from '../api/services/WeatherService';
import { InputSearchEvent } from '../common/types';

interface IContextValue {
  currentWeatherState: any;
  onSearchBlurEvent: (event: InputSearchEvent) => void;
  resetSearchingValue: () => void;
  searchValue: string | null;
  appLoading: boolean;
  setAppLoading: (value: boolean) => void;
  setSearchValue: (value: string | null) => void;
}

const WeatherContext = createContext<IContextValue | undefined>(undefined);

const WeatherProvider: React.FC<any> = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState<string | null>(null);
  const [currentWeatherState, setCurrentWeatherState] = React.useState<any>(null);
  const [appLoading, setAppLoading] = React.useState<boolean>(false);

  const fetchWeatherFromSearch = useCallback(async (searchValue?: string) => {
    setAppLoading(true);
    await WeatherService.getWeatherByCity(searchValue)
      .then((response) => setCurrentWeatherState(response))
      .finally(() => setAppLoading(false));
  }, []);

  useEffect(() => {
    if (searchValue) {
      fetchWeatherFromSearch(searchValue);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchWeatherFromSearch();
  }, []);

  console.log('currentWeatherState', currentWeatherState);

  const onSearchBlurEvent = (event: InputSearchEvent) => setSearchValue(event.nativeEvent.text);
  const resetSearchingValue = () => setSearchValue(null);

  const contextValue: IContextValue = {
    currentWeatherState,
    onSearchBlurEvent,
    resetSearchingValue,
    searchValue,
    appLoading,
    setAppLoading,
    setSearchValue,
  };

  return <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>;
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
};

export { WeatherProvider, useWeather };
