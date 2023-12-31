import React, { useEffect } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

import { useWeather } from '../../context/WeatherContext';
import { theme } from '../../utils';
import useFavorites from '../../utils/hooks/useFavorites';

const Favorites = ({
  isFavoritesModalOpen,
  setIsFavoritesModalOpen,
}: {
  isFavoritesModalOpen: boolean;
  setIsFavoritesModalOpen: (value: boolean) => void;
}) => {
  const { currentWeatherState } = useWeather();
  const { fetchFavoritesWeather, favsWeather } = useFavorites({ name: currentWeatherState.name });

  console.log(favsWeather);

  useEffect(() => {
    fetchFavoritesWeather();
  }, []);
  return (
    <Modal
      animationType="slide"
      visible={isFavoritesModalOpen}
      onRequestClose={() => setIsFavoritesModalOpen(false)}
      presentationStyle="pageSheet">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Modal Content</Text>
          <TouchableHighlight onPress={() => setIsFavoritesModalOpen(false)}>
            <Text>Close Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: theme.descriptionWindowColor,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
export default Favorites;
