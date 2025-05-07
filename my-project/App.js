import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable,} from 'react-native';
import { db_films } from './database.js';
import styles from './style.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Título teste</Text>
    </View>
  );
}

