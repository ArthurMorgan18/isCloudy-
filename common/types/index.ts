import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

type InputSearchEvent = NativeSyntheticEvent<TextInputFocusEventData>;
interface ICoord {
  lon: number;
  lat: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust?: number;
}

interface IClouds {
  all: number;
}

interface ISys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface IWeatherData {
  coord: ICoord;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface IFavsWeatherSate {
  name: string;
  temp: number;
  icon: string;
  description: string;
}

export { InputSearchEvent, IWeatherData, IFavsWeatherSate };
