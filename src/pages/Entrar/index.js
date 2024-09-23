import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function Entrar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text>Entrar</Text>
      <Pressable onPress={ () => navigation.navigate('Home')}>Home</Pressable>
    </View>
  );
}

