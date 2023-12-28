import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { PrimeDescription } from './components/PrimeDescription';
import { SearchBar } from './components/SearchBar';
import WeatherIcon from './components/WeatherConditions/WeatherIcon';
import { WeatherProvider } from './context/WeatherContext';
import { theme } from './utils';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WeatherProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <SearchBar />
          <PrimeDescription />
          <View style={styles.iconContainer}>
            <WeatherIcon />
          </View>
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
  iconContainer: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },
});
