import { Text, View, StyleSheet } from 'react-native';

import { IWeatherData } from '../../common/types';
import { theme } from '../../utils';

const SubDescriptionSection = ({ currentWeatherState }: { currentWeatherState: IWeatherData }) => {
  return (
    <View style={styles.subDescContainer}>
      <View style={styles.subDescItem}>
        <Text style={{ color: theme.input.textColor }}>MAX: </Text>
        <Text style={{ color: theme.input.textColor }}>
          {Math.round(currentWeatherState.main.temp_max)} C°
        </Text>
      </View>
      <View style={styles.subDescItem}>
        <Text style={{ color: theme.input.textColor }}>MIN: </Text>
        <Text style={{ color: theme.input.textColor }}>
          {Math.round(currentWeatherState.main.temp_min)} C°
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subDescContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
    marginTop: 10,
  },
  subDescItem: {
    flexDirection: 'row',
    color: '#fff',
  },
});

export default SubDescriptionSection;
