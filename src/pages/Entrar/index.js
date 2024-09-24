import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';

export default function Entrar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.containerTopo}>
        <Image style={styles.imagemZoo} source={require('../../../assets/zoo.jpeg')} />
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.containerBotoes}>
        <Pressable onPress={ () => navigation.navigate('Home')}>Home</Pressable>
      </View>
    </View>
  );
}

