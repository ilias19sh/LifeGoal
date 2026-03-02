import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#312c3f',
        borderRadius: 12,
        borderColor: '#fff',
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff',
    },
    progress: {
        fontSize: 16,
        color: '#4caf50',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 4,
    },
    description: {
        fontSize: 15,
        color: '#fff',
        marginTop: 6,
    },
});