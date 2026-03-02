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
  },
  {
    id: 5,
    title: 'Économiser pour un voyage',
    progress: 40,
    creationDate: '2024-05-12',
    description: 'Mettre de l’argent de côté chaque mois pour voyager.',
    state: 'en cours',
  },
  {
    id: 6,
    title: 'Manger plus sainement',
    progress: 60,
    creationDate: '2024-06-01',
    description: 'Préparer des repas maison et éviter la junk food.',
    state: 'en cours',
  },
  {
    id: 7,
    title: 'Se lever plus tôt',
    progress: 35,
    creationDate: '2024-07-10',
    description: 'Adopter une routine matinale productive.',
    state: 'en cours',
  },
  {
    id: 8,
    title: 'Apprendre à coder en Python',
    progress: 55,
    creationDate: '2024-08-20',
    description: 'Suivre un cours en ligne et pratiquer chaque semaine.',
    state: 'en cours',
  },
  {
    id: 9,
    title: 'Faire du bénévolat',
    progress: 10,
    creationDate: '2024-09-05',
    description: 'Donner de son temps à une association locale.',
    state: 'en cours',
  },
  {
    id: 10,
    title: 'Développer une application mobile',
    progress: 5,
    creationDate: '2024-10-01',
    description: 'Créer une app utile et la publier sur le store.',
    state: 'en cours',
  },
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
