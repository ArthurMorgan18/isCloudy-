import { IWeatherData } from '../../common/types';
import appFetch from '../index';

class WeatherService {
  static async getWeatherByCity(city: string = 'seattle'): Promise<IWeatherData | null> {
    const requestUrl = `/weather?q=${city}&units=metric`;
    try {
      const response = await appFetch.get(requestUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default WeatherService;
