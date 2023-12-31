import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AddToFavorite from './components/AddToFavorite';
import { PrimeDescription } from './components/PrimeDescription';
import { SearchBar } from './components/SearchBar';
import WeatherIcon from './components/WeatherConditions/WeatherIcon';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { WeatherProvider } from './context/WeatherContext';
import { theme } from './utils';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WeatherProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <SearchBar />
          <AddToFavorite />
          <PrimeDescription />
          <WeatherIcon />
          <WeatherDetails />
        </SafeAreaView>
      </WeatherProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignContent: 'center',
    alignItems: 'center',
  },
});
