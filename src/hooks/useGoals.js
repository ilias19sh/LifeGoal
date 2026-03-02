export const useGoals = () => {
    const goals = [
        {
            id: 1,
            title: 'Apprendre React Native',
            progress: 75,
            creationDate: '2024-01-15',
            description: 'Développer une application mobile avec React Native.',
        },
        {
            id: 2,
            title: 'Faire du sport régulièrement',
            progress: 50,
            creationDate: '2024-02-01',
            description: 'Aller à la salle de sport au moins 3 fois par semaine.',
        },
        {
            id: 3,
            title: 'Lire plus de livres',
            progress: 30,
            creationDate: '2024-03-10',
            description: 'Lire au moins un livre par mois.',
        },
        {
            id: 4,
            title: 'Apprendre une nouvelle langue',
            progress: 20,
            creationDate: '2024-04-05',
            description: 'Prendre des cours de langue et pratiquer régulièrement.',
        }
    ];

    return { goals };
};