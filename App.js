import React from 'react';
import Router from './src/navigation/router';
import { GoalsProvider } from './src/context/GoalsContext';

export default function App() {
  return (
    <GoalsProvider>
      <Router />
    </GoalsProvider>
  );
}
