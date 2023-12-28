enum api_endpoints {
  BASE_URL = 'https://api.openweathermap.org/data/2.5',
}

const weatherIconsDay = [
  {
    iconName: '01d',
    path: require('../../assets/images/day/01d.png'),
  },
  {
    iconName: '02d',
    path: require('../../assets/images/day/02d.png'),
  },
  {
    iconName: '03d',
    path: require('../../assets/images/day/03d.png'),
  },
  {
    iconName: '09d',
    path: require('../../assets/images/day/09d.png'),
  },
  {
    iconName: '10d',
    path: require('../../assets/images/day/10d.png'),
  },
  {
    iconName: '11d',
    path: require('../../assets/images/day/11d.png'),
  },
  {
    iconName: '13d',
    path: require('../../assets/images/day/13d.png'),
  },
  {
    iconName: '50d',
    path: require('../../assets/images/day/50d.png'),
  },
];

const weatherIconsNight = [
  {
    iconName: '01n',
    path: require('../../assets/images/night/01n.png'),
  },
  {
    iconName: '02n',
    path: require('../../assets/images/night/02n.png'),
  },
  {
    iconName: '03n',
    path: require('../../assets/images/night/03n.png'),
  },
  {
    iconName: '10n',
    path: require('../../assets/images/night/10n.png'),
  },
  {
    iconName: '11n',
    path: require('../../assets/images/night/11n.png'),
  },
  {
    iconName: '13n',
    path: require('../../assets/images/night/13n.png'),
  },
  {
    iconName: '50n',
    path: require('../../assets/images/night/50n.png'),
  },
];

export { api_endpoints, weatherIconsDay, weatherIconsNight };
