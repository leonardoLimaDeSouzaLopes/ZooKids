import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.botaoEntrar}>
        <Pressable onPress={ () => navigation.navigate('Entrar')}><Text>Entrar</Text></Pressable>
      </View>
    </View>
  );
}

