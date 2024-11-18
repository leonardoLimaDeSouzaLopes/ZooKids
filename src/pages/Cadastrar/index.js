import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react';


export default function Cadastrar() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [visivel, setVisivel] = useState(false);
  const [msgModal, setMsgModal] = useState("Algo deu errado");

  const VerificarDados = () => {

    if (nome == "" || idade == "" || telefone == "" || email == "" || senha == "") {
      setMsgModal('Você não preencheu todos os dados');
      setVisivel(true);
      return;
    }

    AsyncStorage.getItem('email').then(value => {
      if (value == email) {
        setMsgModal('Já existe uma conta com esse email');
        setVisivel(true);
      } else {
        CriarConta();
      }
    }).catch(error => {
      console.error('Erro ao verificar o email');
    })

  }

  const CriarConta = () => {

    AsyncStorage.setItem('nome', nome).then(() => { }).catch(error => { console.error('Erro ao cadastrar o nome'); });
    AsyncStorage.setItem('idade', idade).then(() => { }).catch(error => { console.error('Erro ao cadastrar a idade'); });
    AsyncStorage.setItem('telefone', telefone).then(() => { }).catch(error => { console.error('Erro ao cadastrar o telefone'); });
    AsyncStorage.setItem('email', email).then(() => { }).catch(error => { console.error('Erro ao cadastrar o email'); });
    AsyncStorage.setItem('senha', senha).then(() => { }).catch(error => { console.error('Erro ao cadastrar a senha'); });

    navigation.navigate('PaginaInicial');

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
          <Pressable Pressable onPress={() => navigation.navigate('Logar')}>Já tenho uma Conta</Pressable>
        </View>
        <View style={styles.botaoEntrar}>
          <Pressable Pressable onPress={() => VerificarDados()}>Criar</Pressable>
        </View>
      </View>
      <Modal visible={visivel}>
        <View style={styles.Modal}>
          <Text style={styles.textoModal}>{msgModal}</Text>
          <View style={styles.botaoVoltar}>
            <Pressable Pressable onPress={() => setVisivel(false)}>Voltar</Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

