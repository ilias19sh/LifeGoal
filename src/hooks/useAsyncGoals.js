import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'LIFEGOAL_GOALS';

export const useAsyncGoals = (initialGoals) => {
  const [goals, setGoals] = useState(initialGoals);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setGoals(JSON.parse(stored));
      } catch {}
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!loading) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  }, [goals, loading]);

  return [goals, setGoals, loading];
};
