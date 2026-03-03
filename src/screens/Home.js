import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header/Header.js';
import { GoalSection } from "../components/GoalSection/GoalSection";
import { LgButton } from '../components/LgButton/LgButton.js';
import { GoalForm } from '../components/GoalForm/GoalForm.js';
import { GlobalProgressBar } from '../components/GoalSection/GlobalProgressBar.js';
import { useAsyncGoals } from '../hooks/useAsyncGoals.js';

export const Home = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [filter, setFilter] = useState('tous');
    const [goals, setGoals, loading] = useAsyncGoals([
            {
                id: 1,
                title: 'Apprendre React Native',
                progress: 75,
                creationDate: '2024-01-15',
                description: 'Développer une application mobile avec React Native.',
                state: 'terminé',
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
        ]);

    return (
        <View style={styles.root}>
            <Header />
            <GlobalProgressBar total={goals.length} done={goals.filter(g => g.state === 'terminé').length} />
            <View style={styles.filterRow}>
                {['tous', 'en cours', 'terminé', 'abandonné'].map(st => (
                    <TouchableOpacity
                        key={st}
                        style={[styles.filterBtn, filter === st && styles.filterBtnActive]}
                        onPress={() => setFilter(st)}
                    >
                        <Text style={styles.filterText}>{st.charAt(0).toUpperCase() + st.slice(1)}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.addButtonContainer}>
                <LgButton title="Ajouter un objectif" onPress={() => setIsFormOpen(true)} />
            </View>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
                {loading ? (
                    <Text style={{ color: '#fff', textAlign: 'center', marginTop: 32 }}>Chargement...</Text>
                ) : (
                    (goals && Array.isArray(goals) && (filter === 'tous' ? goals : goals.filter(g => g.state === filter))).map(goal => (
                        <GoalSection
                            key={goal.id}
                            {...goal}
                            onDelete={() => setGoals(goals.filter(g => g.id !== goal.id))}
                            onStateChange={state => setGoals(goals.map(g => g.id === goal.id ? { ...g, state } : g))}
                            onUpdate={updates => setGoals(goals.map(g => g.id === goal.id ? { ...g, ...updates } : g))}
                        />
                    ))
                )}
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
    filterRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
    },
    filterBtn: {
        backgroundColor: '#222',
        borderRadius: 16,
        paddingHorizontal: 14,
        paddingVertical: 6,
        marginHorizontal: 4,
    },
    filterBtnActive: {
        backgroundColor: '#4caf50',
    },
    filterText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
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