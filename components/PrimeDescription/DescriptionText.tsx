import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { theme } from '../../utils';

interface DescriptionTextProps {
  fontSize: number;
  children: React.ReactNode;
}

const DescriptionText: React.FC<DescriptionTextProps> = ({ children, fontSize }) => (
  <Text style={[styles.primeDescriptionCity, { fontSize }]}>{children}</Text>
);

const styles = StyleSheet.create({
  primeDescriptionCity: {
    fontWeight: 'bold',
    color: theme.input.textColor,
  },
});

export default DescriptionText;
