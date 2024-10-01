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
        <Image style={styles.imagemZoo} source={require('../../../assets/zoo.jpg')} />
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input} placeholder='    Nome'></TextInput>
        <TextInput style={styles.input} placeholder='    Idade'></TextInput>
        <TextInput style={styles.input} placeholder='    Telefone'></TextInput>
        <TextInput style={styles.input} placeholder='    Email'></TextInput>
        <TextInput style={styles.input} placeholder='    Qual seu animal preferido?'></TextInput>
      </View>
      <View style={styles.containerBotoes}>
      <View style={styles.botaoVisitante}>
          <Pressable Pressable onPress={ () => navigation.navigate('PaginaInicial')}>Entrar como visitante</Pressable>
        </View>
        <View style={styles.botaoEntrar}>
          <Pressable Pressable onPress={ () => navigation.navigate('PaginaInicial')}>Entrar</Pressable>
        </View>
      </View>
    </View>
  );
}

