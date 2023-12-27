import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import { PrimeDescription } from './components/PrimeDescription';
import { SearchBar } from './components/SearchBar';
import { WeatherProvider } from './context/WeatherContext';
import { theme } from './utils';

export default function App() {
  return (
    <WeatherProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <SearchBar />
        <PrimeDescription />
      </SafeAreaView>
    </WeatherProvider>
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
