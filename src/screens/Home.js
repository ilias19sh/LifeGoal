import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { GoalSection } from "../components/GoalSection/GoalSection.js";
import { useGoalsContext } from '../context/GoalsContext.js';
import { LgButton } from '../components/LgButton/LgButton.js';
import { GoalForm } from '../components/GoalForm/GoalForm.js';

export const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { goals } = useGoalsContext();
    return (
        <View style={styles.root}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Mes Objectifs</Text>
            </View>
            <View style={styles.addButtonContainer}>
                <LgButton title="Ajouter un objectif" onPress={() => setIsFormOpen(true)} />
            </View>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
                {goals.map(goal => (
                    <GoalSection key={goal.id} {...goal} />
                ))}
            </ScrollView>
            {isFormOpen && (
                <View style={styles.formOverlay}>
                    <GoalForm isOpen={setIsFormOpen} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#1e2027',
        position: 'relative',
    },
    header: {
        backgroundColor: '#312c3f',
        paddingTop: 48,
        paddingBottom: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
    },
    headerTitle: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    scroll: {
        flex: 1,
        marginBottom: 80,
    },
    scrollContent: {
        padding: 16,
        paddingBottom: 32,
    },
    addButtonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 16,
        backgroundColor: '#312c3f',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 8,
    },
    formOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(30,32,39,0.95)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
});