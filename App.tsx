import { StatusBar } from 'expo-status-bar';
import {StyleSheet, SafeAreaView, View} from 'react-native';

import { PrimeDescription } from './components/PrimeDescription';
import { SearchBar } from './components/SearchBar';
import { WeatherProvider } from './context/WeatherContext';
import { theme } from './utils';
import Cloudy from "./components/WeatherConditions/Cloudy";

export default function App() {
  return (
    <WeatherProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <SearchBar />
        <PrimeDescription />
        <View style={styles.iconContainer}>
          <Cloudy/>
        </View>
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
  iconContainer:{
    height:'50%',
    width:'100%',
    backgroundColor:'#fc3',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  }
});
