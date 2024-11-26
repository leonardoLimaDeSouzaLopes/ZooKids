import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fundo: {
    backgroundColor: '#006CA3',
    flex:1,
    width: "100%",
    height: "100%",
    fontFamily: "Arial",
  },
  textoNav: {
    fontSize: 30,
    marginVertical: 5,
  },
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB880',
  },
  container: {
    flex:1,
    width: "100%",
    height: "100%",
  },
  titulo: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "Arial",
  },
  texto: {
    color: "#ffffff",
    fontSize: 13,
    fontFamily: "Arial",
    marginBottom: 15,
  },
  imagemLista: {
    width: '90%',
    height: 150,
    marginVertical: 20,
    marginHorizontal: '5%',
  },
  imagemDaImagemLista: {
    width: '100%',
    margin: 0,
    borderRadius: 10,
  },
  espacoImagemGrande: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagemGrande: {
    flex: 1,
    resizeMode: "contain",
    margin: "10%",
  },
  botaoVoltar: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 100,
    alignSelf: "center",
  },
  voltar: {
    color: "#000000",
    fontFamily: "Arial",
    fontSize: 20,
  },
  informacoes: {
    flex: 2,
    textAlign: "left",
    marginHorizontal: "15%",
    marginBottom: "4em",
  }
});