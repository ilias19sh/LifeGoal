import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Styles';

export const LgButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};