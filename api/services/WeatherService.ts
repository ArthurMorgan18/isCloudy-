import appFetch from '../index';

class WeatherService {
  static async getWeatherByCity(city: string = 'seattle'): Promise<any> {
    const requestUrl = `/weather?q=${city}`;
    try {
      const response = await appFetch.get(requestUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default WeatherService;
