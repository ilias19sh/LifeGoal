import { View } from 'react-native';
import { GoalSection } from "../components/GoalSection/GoalSection.js";

export const Home = () => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e2027' }}>
        <GoalSection title="Apprendre React Native" progress={75} creationDate="2024-01-15" description="Développer une application mobile avec React Native." />
    </View>
    );
};