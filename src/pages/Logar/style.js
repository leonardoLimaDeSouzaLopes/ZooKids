import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    containerTopo: {
      flex: 2,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerInputs: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerBotoes: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagemZoo: {
      width: '80%',
      marginTop: '10%',
      marginRight: '10%',
      marginLeft: '10%',
      resizeMode: 'contain',
    },
    input: {
      width: '90%',
      height: 40/3 + '%',
      borderWidth: 2,
      borderColor: '#4000ff',
      borderRadius: 7,
      marginTop: 20/3 + '%',
      marginRight: '5%',
      marginLeft: '5%',
    },
    botaoCadastrar: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginBottom: 20,
    },
    botaoEntrar: {
      backgroundColor: '#A0D060',
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    textoModal: {
    },
    botaoVoltar: {
      backgroundColor: '#A0D060',
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
});