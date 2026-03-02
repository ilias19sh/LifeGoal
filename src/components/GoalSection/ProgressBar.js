import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProgressBar = ({ progress }) => (
  <View style={styles.barContainer}>
    <View style={[styles.bar, { width: `${progress}%` }]} />
    <Text style={styles.label}>{progress}%</Text>
  </View>
);

const styles = StyleSheet.create({
  barContainer: {
    height: 18,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    height: 18,
    backgroundColor: '#4caf50',
    borderRadius: 8,
  },
  label: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
