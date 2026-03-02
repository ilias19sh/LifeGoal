import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './Styles';
import { LgButton } from '../LgButton/LgButton';

export const GoalForm = ({ isOpen }) => {
    const closeForm = () => {
        if (typeof isOpen === 'function') {
            isOpen(false);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulaire de création d'objectif</Text>
            <TextInput style={styles.input} placeholder="Titre de l'objectif" />
            <TextInput style={styles.input} placeholder="Description de l'objectif" multiline />
            <LgButton title="Créer l'objectif" onPress={closeForm} />
        </View>
    );
};