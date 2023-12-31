import { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

import { theme } from '../../utils';

const HeadingText = ({ children }: { children: ReactNode }) => (
  <Text style={styles.headingText}>{children}</Text>
);

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.input.textColor,
  },
});

export default HeadingText;
