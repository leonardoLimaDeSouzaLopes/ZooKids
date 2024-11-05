import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';

const [nome, setNome] = useState("");
const [idade, setIdade] = useState("");
const [telefone, setTelefone] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const CriarConta = () => {

  navigation.navigate('PaginaInicial')
  
}

export default function Cadastrar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.containerTopo}>
          <Image style={styles.imagemZoo} source={require('../../../assets/zoo.png')} />
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input} value={nome} onChangeText={(text) => setNome(text)} placeholder='    Nome'></TextInput>
        <TextInput style={styles.input} value={idade} onChangeText={(text) => setIdade(text)} placeholder='    Idade'></TextInput>
        <TextInput style={styles.input} value={telefone} onChangeText={(text) => setTelefone(text)} placeholder='    Telefone'></TextInput>
        <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='    Email'></TextInput>
        <TextInput style={styles.input} value={senha} onChangeText={(text) => setSenha(text)} placeholder='    Senha'></TextInput>
      </View>
      <View style={styles.containerBotoes}>
      <View style={styles.botaoLogar}>
          <Pressable Pressable onPress={ () => navigation.navigate('Logar')}>Já tenho uma Conta</Pressable>
        </View>
        <View style={styles.botaoEntrar}>
          <Pressable Pressable onPress={() => navigation.navigate('PaginaInicial')}>Criar</Pressable>
        </View>
      </View>
    </View>
  );
}

