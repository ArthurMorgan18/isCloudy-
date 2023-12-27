import { TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';

import LocationIcon from './LocationIcon';
import { useWeather } from '../../context/WeatherContext';
import { theme } from '../../utils';
import useLocation from '../../utils/hooks/useLocation';

const SearchBar = () => {
  const { onSearchBlurEvent, searchValue } = useWeather();
  const { requestLocationHandler } = useLocation();

  return (
    <View style={styles.searchContainer}>
      <TextInput
        maxLength={20}
        clearTextOnFocus
        placeholder="Search"
        placeholderTextColor={theme.input.placeholderColor}
        style={styles.searchInput}
        onBlur={onSearchBlurEvent}
      />
      <TouchableOpacity style={styles.locationButton} onPress={requestLocationHandler}>
        <LocationIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchInput: {
    width: '70%',
    height: 50,
    borderBottomColor: theme.input.textColor,
    borderBottomWidth: 1,
    color: theme.input.textColor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  locationButton: {
    width: 40,
    height: 40,
    backgroundColor: '#bbbdbf',
    alignSelf: 'center',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default SearchBar;
