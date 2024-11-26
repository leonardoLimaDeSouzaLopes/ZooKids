import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import { ImageBackground, ScrollView } from 'react-native-web';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function PaginaInicial() {

  const navigation = useNavigation();

  const EscolherTerritorio = (territorio) => {

    navigation.navigate('Animais');

  }

  return (
    <ScrollView style={styles.fundo}>
      <StatusBar style="auto" />
      <View style={styles.navbar}>
        <Text style={styles.textoNav}>Territórios</Text>
      </View>
      <View style={styles.containerTerritorios}>
        <ImageBackground style={styles.territorio} imageStyle={styles.backgroundTerritorio} source={require("../../../assets/territorio1.png")}>
          <Pressable style={styles.tamanhoMaximo} onPress={() => EscolherTerritorio(0)}>
            <Animatable.View style={styles.tamanhoMaximo} animation={"fadeIn"} duration={500}>
              <Image style={styles.imagemTerritorio} source={require('../../../assets/animal1.gif')} />
            </Animatable.View>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.territorio} imageStyle={styles.backgroundTerritorio} source={require("../../../assets/territorio2.png")}>
          <Pressable style={styles.tamanhoMaximo} onPress={() => EscolherTerritorio(1)}>
            <Animatable.View style={styles.tamanhoMaximo} animation={"fadeIn"} duration={500}>
              <Image style={styles.imagemTerritorio} source={require('../../../assets/animal2.gif')} />
            </Animatable.View>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.territorio} imageStyle={styles.backgroundTerritorio} source={require("../../../assets/territorio3.png")}>
          <Pressable style={styles.tamanhoMaximo}onPress={() => EscolherTerritorio(2)}>
            <Animatable.View style={styles.tamanhoMaximo} animation={"fadeIn"} duration={500}>
              <Image style={styles.imagemTerritorio} source={require('../../../assets/animal3.gif')} />
            </Animatable.View>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.territorio} imageStyle={styles.backgroundTerritorio} source={require("../../../assets/territorio4.png")}>
          <Pressable style={styles.tamanhoMaximo} onPress={() => EscolherTerritorio(3)}>
            <Animatable.View style={styles.tamanhoMaximo} animation={"fadeIn"} duration={500}>
              <Image style={styles.imagemTerritorio} source={require('../../../assets/animal4.gif')} />
            </Animatable.View>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.territorio} imageStyle={styles.backgroundTerritorio} source={require("../../../assets/territorio5.png")}>
          <Pressable style={styles.tamanhoMaximo} onPress={() => EscolherTerritorio(4)}>
            <Animatable.View style={styles.tamanhoMaximo} animation={"fadeIn"} duration={500}>
              <Image style={styles.imagemTerritorio} source={require('../../../assets/animal5.gif')} />
            </Animatable.View>
          </Pressable>
        </ImageBackground>
        <ImageBackground style={styles.territorio} imageStyle={styles.backgroundTerritorio} source={require("../../../assets/territorio6.png")}>
          <Pressable style={styles.tamanhoMaximo} onPress={() => EscolherTerritorio(5)}>
            <Animatable.View style={styles.tamanhoMaximo} animation={"fadeIn"} duration={500}>
              <Image style={styles.imagemTerritorio} source={require('../../../assets/animal6.gif')} />
            </Animatable.View>
          </Pressable>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

