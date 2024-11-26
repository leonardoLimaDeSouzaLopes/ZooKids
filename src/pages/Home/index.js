import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Animatable.View style={styles.tamanhoMaximo} animation={"fadeOut"} duration={500} delay={1500} onAnimationEnd={() => navigation.navigate('Logar')}>
        <Image style={styles.gif} source={require('../../../assets/loading.gif')}/>
      </Animatable.View>
    </View>
  );
}

