import React, { createContext, useContext, useState } from 'react';

const initialGoals = [
  {
    id: 1,
    title: 'Apprendre React Native',
    progress: 75,
    creationDate: '2024-01-15',
    description: 'Développer une application mobile avec React Native.',
    state: 'en cours',
  },
  {
    id: 2,
    title: 'Faire du sport régulièrement',
    progress: 50,
    creationDate: '2024-02-01',
    description: 'Aller à la salle de sport au moins 3 fois par semaine.',
    state: 'en cours',
  },
  {
    id: 3,
    title: 'Lire plus de livres',
    progress: 30,
    creationDate: '2024-03-10',
    description: 'Lire au moins un livre par mois.',
    state: 'en cours',
  },
  {
    id: 4,
    title: 'Apprendre une nouvelle langue',
    progress: 20,
    creationDate: '2024-04-05',
    description: 'Prendre des cours de langue et pratiquer régulièrement.',
    state: 'en cours',
  }
];

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState(initialGoals);

  const addGoal = (goal) => {
    setGoals([...goals, { ...goal, id: goals.length + 1 }]);
  };

  const updateGoal = (id, updates) => {
    setGoals(goals.map(goal => goal.id === id ? { ...goal, ...updates } : goal));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const setGoalState = (id, state) => {
    setGoals(goals.map(goal => goal.id === id ? { ...goal, state } : goal));
  };

  return (
    <GoalsContext.Provider value={{ goals, setGoals, addGoal, updateGoal, deleteGoal, setGoalState }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => useContext(GoalsContext);
