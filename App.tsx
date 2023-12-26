import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import WeatherService from './api/services/WeatherService';
import { theme } from './utils';
import {InputSearchEvent} from "./common/types";
import {SearchBar} from "./components/SearchBar";
import useSearch from "./utils/hooks/useSearch";


export default function App() {
  const {searchValue} = useSearch();

  console.log(searchValue);



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
     <SearchBar/>
      <View style={styles.primeDescription}>
        <Text>{searchValue}</Text>
        <View>
          <Text>13</Text>
          <Text>C°</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignContent: 'center',
    alignItems: 'center',
  },
  primeDescription: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    marginTop: 75,
  }
});
