import { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

import { theme } from '../../utils';

const DescriptionText = ({ children }: { children: ReactNode }) => (
  <Text style={styles.headingText}>{children}</Text>
);

const styles = StyleSheet.create({
  headingText: {
    fontSize: 12,
    color: theme.input.textColor,
  },
});

export default DescriptionText;
