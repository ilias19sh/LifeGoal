import { View } from 'react-native';
import { GoalSection } from "../components/GoalSection/GoalSection.js";
import { useGoals } from '../hooks/useGoals.js';
import { LgButton } from '../components/LgButton/LgButton.js';

export const Home = () => {
    const { goals } = useGoals();
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e2027' }}>
        <LgButton title="Ajouter un objectif" onPress={() => console.log('Ajouter un objectif')} />
        {goals.map(goal => (
            <GoalSection key={goal.id} title={goal.title} progress={goal.progress} creationDate={goal.creationDate} description={goal.description} />
        ))}
    </View>
    );
};