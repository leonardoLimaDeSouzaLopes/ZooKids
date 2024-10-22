import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { ImageBackground, ScrollView } from 'react-native-web';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function PaginaInicial() {

  const navigation = useNavigation();

  return (
    <ScrollView>
      <StatusBar style="auto"/>
      <View style={styles.navbar}>
        <Text style={styles.textoNav}>Territórios</Text>
      </View>
      <View style={styles.containerTerritorios}>
        {/*<ImageBackground style={styles.territorio} source={require("../../../assets/territorio1.png")}>
        </ImageBackground>
        <ImageBackground style={styles.territorio} source={require("../../../assets/territorio1.png")}>
        </ImageBackground>
        <ImageBackground style={styles.territorio} source={require("../../../assets/territorio1.png")}>
        </ImageBackground>*/}
      </View>
    </ScrollView>
  );
}

