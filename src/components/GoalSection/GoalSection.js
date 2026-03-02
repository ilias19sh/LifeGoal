import { styles } from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';

export const GoalSection = ({ title, progress, creationDate, description, state, onDelete, onUpdate, onStateChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.progress}>Progression : {progress}%</Text>
            <Text style={styles.date}>Créé le : {creationDate}</Text>
            {description && <Text style={styles.description}>{description}</Text>}
            <Text style={{ color: '#fff', marginTop: 6 }}>État : {state}</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <TouchableOpacity onPress={() => onStateChange('en cours')} style={{ marginRight: 8 }}><Text style={{ color: '#4caf50' }}>En cours</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => onStateChange('terminé')} style={{ marginRight: 8 }}><Text style={{ color: '#2196f3' }}>Terminé</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => onStateChange('abandonné')} style={{ marginRight: 8 }}><Text style={{ color: '#f44336' }}>Abandonné</Text></TouchableOpacity>
                <TouchableOpacity onPress={onDelete}><Text style={{ color: '#fff', backgroundColor: '#f44336', paddingHorizontal: 8, borderRadius: 6 }}>Supprimer</Text></TouchableOpacity>
            </View>
        </View>
    );
};