import { TextInput, StyleSheet } from 'react-native';

import { useWeather } from '../../context/WeatherContext';
import { theme } from '../../utils';

const SearchBar = () => {
  const { onSearchBlurEvent } = useWeather();

  return (
    <TextInput
      maxLength={10}
      clearTextOnFocus
      placeholder="Search"
      placeholderTextColor={theme.input.placeholderColor}
      style={styles.searchInput}
      onBlur={onSearchBlurEvent}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: '70%',
    height: 50,
    borderBottomColor: theme.input.textColor,
    borderBottomWidth: 1,
    color: theme.input.textColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SearchBar;
