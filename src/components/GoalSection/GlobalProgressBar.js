import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const GlobalProgressBar = ({ total, done }) => {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Progression globale : {percent}%</Text>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${percent}%` }]} />
      </View>
      <Text style={styles.count}>{done} / {total} objectifs atteints</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  barContainer: {
    width: '90%',
    height: 16,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  bar: {
    height: 16,
    backgroundColor: '#4caf50',
    borderRadius: 8,
  },
  count: {
    color: '#bdbdbd',
    fontSize: 13,
    marginTop: 2,
  },
});
