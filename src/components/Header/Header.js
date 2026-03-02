import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>🎯 LifeGoal</Text>
    <Text style={styles.subtitle}>Atteins tes objectifs avec style</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#312c3f',
    paddingTop: 48,
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    color: '#bdbdbd',
    fontSize: 16,
    marginTop: 8,
    fontStyle: 'italic',
  },
});
