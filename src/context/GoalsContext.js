import React, { createContext, useContext, useState } from 'react';

const initialGoals = [
  {
    id: 1,
    title: 'Apprendre React Native',
    progress: 75,
    creationDate: '2024-01-15',
    description: 'Développer une application mobile avec React Native.',
  },
  {
    id: 2,
    title: 'Faire du sport régulièrement',
    progress: 50,
    creationDate: '2024-02-01',
    description: 'Aller à la salle de sport au moins 3 fois par semaine.',
  },
  {
    id: 3,
    title: 'Lire plus de livres',
    progress: 30,
    creationDate: '2024-03-10',
    description: 'Lire au moins un livre par mois.',
  },
  {
    id: 4,
    title: 'Apprendre une nouvelle langue',
    progress: 20,
    creationDate: '2024-04-05',
    description: 'Prendre des cours de langue et pratiquer régulièrement.',
  },
  {
    id: 5,
    title: 'Économiser pour un voyage',
    progress: 40,
    creationDate: '2024-05-12',
    description: 'Mettre de l’argent de côté chaque mois pour voyager.',
  }
];

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState(initialGoals);

  return (
    <GoalsContext.Provider value={{ goals, setGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => useContext(GoalsContext);
