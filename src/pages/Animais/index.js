import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native-web';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Animais() {

  const navigation = useNavigation();

  const [visivel, setVisivel] = useState(false);

  const [planetaClicado, setPlanetaClicado] = useState(0);

  const [planeta, setPlaneta] = useState([
    {
      nome: "Elefante",
      caracteristicas: "Os elefantes são os maiores mamíferos terrestres, com corpos maciços, trombas versáteis e presas de marfim. Eles têm pele grossa e orelhas grandes que ajudam a dissipar o calor. São conhecidos por sua inteligência e memória impressionantes.",
      habitos: "Eles vivem em grupos liderados por fêmeas e são altamente sociais. Passam grande parte do tempo se alimentando de folhas, frutas e cascas de árvores.",
      reproducao: "A gestação do elefante dura cerca de 22 meses, a mais longa entre os mamíferos. Cada fêmea geralmente dá à luz um único filhote, que é cuidado pelo grupo.",
      conservacao: "Ameaçados pela caça ilegal e perda de habitat, os elefantes são protegidos por leis internacionais e esforços de conservação. A educação ambiental é essencial para garantir sua sobrevivência.",
      imagem: require('../../../assets/elefante.png'),
    },
    {
      nome: "Puma",
      caracteristicas: "O puma, também chamado de leão-da-montanha, é um felino ágil com pelagem castanho-clara. Possui corpo musculoso, patas fortes e cauda longa, adaptados para caça.",
      habitos: "Pumas são solitários e caçam ao entardecer ou à noite. Alimentam-se de cervos, roedores e outros animais menores, adaptando-se a diversos habitats.",
      reproducao: "A fêmea dá à luz de 2 a 4 filhotes após uma gestação de cerca de 90 dias. Os filhotes permanecem com a mãe até os dois anos de idade.",
      conservacao: "Embora amplamente distribuídos, o puma enfrenta ameaças como perda de habitat e caça. Programas de manejo e corredores ecológicos são importantes para sua proteção.",
      imagem: require('../../../assets/puma.png'),
    },
    {
      nome: "Crocodilo",
      caracteristicas: "Crocodilos são répteis de grande porte com pele escamosa, focinho longo e dentes afiados. Adaptados à vida aquática, têm olhos e narinas no topo da cabeça para vigilância.",
      habitos: "Vivem em rios, lagos e manguezais, onde são predadores oportunistas. Alimentam-se de peixes, mamíferos e aves, utilizando emboscadas para capturar presas.",
      reproducao: "Fêmeas constroem ninhos de vegetação para depositar ovos. Os filhotes, ao nascerem, recebem cuidados maternos e são protegidos dos predadores.",
      conservacao: "A caça e a destruição de habitats ameaçam os crocodilos. Iniciativas de manejo sustentável e conservação de áreas alagadas têm ajudado na recuperação de populações.",
      imagem: require('../../../assets/crocodilo.png'),
    },
    {
      nome: "Onça-Pintada",
      caracteristicas: "A onça-pintada é o maior felino das Américas, com pelagem dourada e manchas negras características. É um predador poderoso, adaptado a diversos habitats.",
      habitos: "Caçam principalmente ao anoitecer e vivem solitárias. São hábeis nadadoras e se alimentam de presas variadas, como capivaras e jacarés.",
      reproducao: "A reprodução ocorre durante todo o ano. A fêmea dá à luz de 1 a 4 filhotes após uma gestação de cerca de 100 dias, cuidando deles sozinha.",
      conservacao: "A onça está ameaçada pela caça e perda de habitat. Projetos de conservação e combate à caça ilegal são fundamentais para sua sobrevivência.",
      imagem: require('../../../assets/onca.png'),
    },
    {
      nome: "Flamingo",
      caracteristicas: "Flamingos têm plumagem rosa vibrante, pernas longas e bico curvado adaptado à filtragem de alimentos. A cor intensa vem de sua dieta rica em carotenoides.",
      habitos: "Vivem em colônias em lagos e lagoas rasas. Alimentam-se de algas, pequenos crustáceos e moluscos. Passam horas filtrando água para se alimentar.",
      reproducao: "Os flamingos constroem ninhos de lama, onde cada fêmea coloca um único ovo. Ambos os pais cuidam do filhote, que é alimentado com leite produzido no trato digestivo.",
      conservacao: "A destruição de habitats e a poluição ameaçam os flamingos. Esforços de conservação incluem a proteção de zonas úmidas e a conscientização ambiental.",
      imagem: require('../../../assets/flamingo.png'),
    },
    {
      nome: "Felino",
      caracteristicas: "Felinos são mamíferos ágeis e carnívoros com corpos musculosos, patas acolchoadas e garras retráteis. Suas visões noturnas e audições aguçadas os tornam caçadores excepcionais.",
      habitos: "A maioria dos felinos é solitária, ativa ao entardecer e à noite. Alimentam-se de uma variedade de presas, ajustando-se a habitats variados.",
      reproducao: "Os felinos geralmente têm gestações curtas, de 2 a 4 meses, e dão à luz de 2 a 6 filhotes, que ficam sob cuidado materno até atingirem independência.",
      conservacao: "Felinos enfrentam desafios como perda de habitat e caça. Iniciativas de conservação buscam proteger espécies ameaçadas e restaurar ecossistemas naturais.",
      imagem: require('../../../assets/felino.png'),
    }
  ]);

  const irTelaPlaneta = (numeroPlaneta) => {

    setVisivel(true);

    setPlanetaClicado(numeroPlaneta);

  };

  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.fundo}>
        <View style={styles.navbar}>
          <Text style={styles.textoNav}>Territórios</Text>
        </View>
        <View style={styles.container}>
          <Pressable onPress={() => irTelaPlaneta(0)}>
            <ImageBackground style={styles.imagemLista} imageStyle={styles.imagemDaImagemLista} source={planeta[0].imagem} resizeMode="cover"><Text style={styles.titulo}>{planeta[0].nome}</Text></ImageBackground>
          </Pressable>
          <Pressable onPress={() => irTelaPlaneta(1)}>
            <ImageBackground style={styles.imagemLista} imageStyle={styles.imagemDaImagemLista} source={planeta[1].imagem} resizeMode="cover"><Text style={styles.titulo}>{planeta[1].nome}</Text></ImageBackground>
          </Pressable>
          <Pressable onPress={() => irTelaPlaneta(2)}>
            <ImageBackground style={styles.imagemLista} imageStyle={styles.imagemDaImagemLista} source={planeta[2].imagem} resizeMode="cover"><Text style={styles.titulo}>{planeta[2].nome}</Text></ImageBackground>
          </Pressable>
          <Pressable onPress={() => irTelaPlaneta(3)}>
            <ImageBackground style={styles.imagemLista} imageStyle={styles.imagemDaImagemLista} source={planeta[3].imagem} resizeMode="cover"><Text style={styles.titulo}>{planeta[3].nome}</Text></ImageBackground>
          </Pressable>
          <Pressable onPress={() => irTelaPlaneta(4)}>
            <ImageBackground style={styles.imagemLista} imageStyle={styles.imagemDaImagemLista} source={planeta[4].imagem} resizeMode="cover"><Text style={styles.titulo}>{planeta[4].nome}</Text></ImageBackground>
          </Pressable>
          <Pressable onPress={() => irTelaPlaneta(5)}>
            <ImageBackground style={styles.imagemLista} imageStyle={styles.imagemDaImagemLista} source={planeta[5].imagem} resizeMode="cover"><Text style={styles.titulo}>{planeta[5].nome}</Text></ImageBackground>
          </Pressable>
        </View>
      </View>

      <Modal visible={visivel} >
        <View style={styles.fundo}>
          <View style={styles.navbar}>
            <Text style={styles.textoNav}>Territórios</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.espacoImagemGrande}>
              <Image style={styles.imagemGrande} source={planeta[planetaClicado].imagem} />
            </View>
            <View style={styles.informacoes}>
              <Text style={styles.titulo}>{planeta[planetaClicado].nome}</Text>
              <Text style={styles.texto}>{planeta[planetaClicado].caracteristicas}</Text>
              <Text style={styles.titulo}>Hábitos</Text>
              <Text style={styles.texto}>{planeta[planetaClicado].habitos}</Text>
              <Text style={styles.titulo}>Reprodução</Text>
              <Text style={styles.texto}>{planeta[planetaClicado].reproducao}</Text>
              <Text style={styles.titulo}>Conservação</Text>
              <Text style={styles.texto}>{planeta[planetaClicado].conservacao}</Text>
            </View>
            <Pressable style={styles.botaoVoltar} onPress={() => { setVisivel(false) }}><Text style={styles.voltar}>Voltar</Text></Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

