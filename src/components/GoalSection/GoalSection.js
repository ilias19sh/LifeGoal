import { styles } from './Styles';
import { View, Text } from 'react-native';

export const GoalSection = ({ title, progress, creationDate, description }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.progress}>Progression : {progress}%</Text>
            <Text style={styles.date}>Créé le : {creationDate}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
        </View>
    );
};