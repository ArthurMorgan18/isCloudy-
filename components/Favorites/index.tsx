import React from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, FlatList } from 'react-native';

import CloseModalIcon from './CloseModalIcon';
import FavoriteCity from './FavoriteCity';
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
  const { favsWeather } = useFavorites({ name: currentWeatherState.name });

  return (
    <Modal
      animationType="slide"
      visible={isFavoritesModalOpen}
      onRequestClose={() => setIsFavoritesModalOpen(false)}
      presentationStyle="pageSheet">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.modalHeader}>Favorite cities</Text>
            <TouchableHighlight
              style={styles.closeModal}
              onPress={() => setIsFavoritesModalOpen(false)}>
              <CloseModalIcon />
            </TouchableHighlight>
          </View>
          <View style={styles.FavoritesContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={favsWeather}
              renderItem={({ item }) => (
                <FavoriteCity
                  name={item.name}
                  temp={item.temp}
                  icon={item.icon}
                  description={item.description}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
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
    backgroundColor: theme.modalBackground,
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  modalHeader: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.primaryColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  closeModal: { width: 34, height: 34, marginTop: 5 },
  FavoritesContainer: {},
});
export default Favorites;
