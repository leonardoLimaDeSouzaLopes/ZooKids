import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';

export default function Logar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.containerTopo}>
          <Image style={styles.imagemZoo} source={require('../../../assets/zoo.png')} />
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input} placeholder='    Email'></TextInput>
        <TextInput style={styles.input} placeholder='    Senha'></TextInput>
      </View>
      <View style={styles.containerBotoes}>
      <View style={styles.botaoCadastrar}>
          <Pressable Pressable onPress={ () => navigation.navigate('Cadastrar')}>Não tenho uma Conta</Pressable>
        </View>
        <View style={styles.botaoEntrar}>
          <Pressable Pressable onPress={ () => navigation.navigate('PaginaInicial')}>Logar</Pressable>
        </View>
      </View>
    </View>
  );
}

