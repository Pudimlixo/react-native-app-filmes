import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable} from 'react-native';
import styles from './style.js'
import Header from './components/header/header.js'
import Banner from './components/banner/banner.js'

export default function App(){
  return (
    <View style={styles.container}>
      <Header/>
      <Banner/>
    </View>
  );
}

