import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fundo: {
    backgroundColor: '#A0D060'
  },
  navbar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB880',
  },
  textoNav: {
    fontSize: 30,
    marginVertical: 5,
  },
  containerTerritorios: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  territorio: {
    width: 130,
    height: 130,
    marginVertical: 40,
    marginHorizontal: "5%",
  },
  backgroundTerritorio: {
    borderRadius: 10,
  },
  tamanhoMaximo: {
    flex: 1,
  },
  imagemTerritorio: {
    width: "80%",
    height: "80%",
    margin: "10%",
  }
});