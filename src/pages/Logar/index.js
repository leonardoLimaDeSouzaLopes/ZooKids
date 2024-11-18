import { StatusBar } from 'expo-status-bar';
import { Image, Modal, Pressable, Text, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react';

export default function Logar() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loginCerto, setLoginCerto] = useState(true);

  const [visivel, setVisivel] = useState(false);
  const [msgModal, setMsgModal] = useState("Algo deu errado");

  const VerificarDados = () => {

    if (email == "" || senha == "") {
      setMsgModal('Você não preencheu todos os dados');
      setVisivel(true);
      return;
    }

    setLoginCerto(true);

    AsyncStorage.getItem('email').then(value => {
      if (value == email) {
        AsyncStorage.getItem('senha').then(value => {
          if (value == senha) {
            navigation.navigate('PaginaInicial');
          } else {
            LoginIncorreto();
          }
        }).catch(error => {
          console.error('Erro ao verificar a senha');
        });
      } else {
        LoginIncorreto();
      }
    }).catch(error => {
      console.error('Erro ao verificar o email');
    });

  }

  const LoginIncorreto =() => {

    setMsgModal('Login está incorreto, tente novamente');
    setVisivel(true);

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.containerTopo}>
          <Image style={styles.imagemZoo} source={require('../../../assets/zoo.png')} />
      </View>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='    Email'></TextInput>
        <TextInput style={styles.input} value={senha} onChangeText={(text) => setSenha(text)} placeholder='    Senha'></TextInput>
      </View>
      <View style={styles.containerBotoes}>
      <View style={styles.botaoCadastrar}>
          <Pressable Pressable onPress={ () => navigation.navigate('Cadastrar')}>Não tenho uma Conta</Pressable>
        </View>
        <View style={styles.botaoEntrar}>
          <Pressable Pressable onPress={ () => VerificarDados()}>Logar</Pressable>
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

