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
    }
});