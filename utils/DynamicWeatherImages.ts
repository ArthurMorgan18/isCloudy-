import { weatherIconsDay, weatherIconsNight } from '../common/constants';
interface Icon {
  iconName: string;
  path: string;
}
class DynamicWeatherImages {
  static dayIcons: Icon[] = [...weatherIconsDay];
  static nightIcons: Icon[] = [...weatherIconsNight];

  static GetImage = (name: string | null, folder: string | null) => {
    const collection =
      folder === 'day' ? DynamicWeatherImages.dayIcons : DynamicWeatherImages.nightIcons;
    const searchedIcon = collection.find((element) => element.iconName === name);
    return searchedIcon?.path;
  };
}

export default DynamicWeatherImages;
