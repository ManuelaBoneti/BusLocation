import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import localizacao from "./localizacao";
import { router } from "expo-router";
 
export default function CarrosselOnibusModerno() {
  const { width: screenWidth } = Dimensions.get("window");
 
  // ---- Array de imagens diretamente nesta página ----
  const frames = [
    require('@/assets/bus_360/bus_01.png'),
    require('@/assets/bus_360/bus_04.png'),
   
    require('@/assets/bus_360/bus_06.png'),
    require('@/assets/bus_360/bus_03in.png'),
    require('@/assets/bus_360/bus_09.png'),
    require('@/assets/bus_360/bus_07.png'),
    require('@/assets/bus_360/frente_180.png'),
    require('@/assets/bus_360/bus_07in.png'),
   
  ];
 
  const totalFrames = frames.length;
  const [currentFrame, setCurrentFrame] = useState(0);
 
  const irParaProximo = () => {
    setCurrentFrame(prev => (prev + 1) % totalFrames);
  };
 
  const irParaAnterior = () => {
    setCurrentFrame(prev => (prev - 1 + totalFrames) % totalFrames);
  };
  const localizacao = () => {
    router.push('/(drawer)/localizacao');
    };
 
  return (
   
    <View style={styles.container}>
        <Image
                            style={styles.tela}
                            source={require('@/assets/telaInicial.png')}
                        />
      <Text style={styles.title}>Visualização 360° do Ônibus</Text>
 
      {/* Container da imagem */}
      <View style={[styles.viewerContainer, { width: screenWidth * 0.9 }]}>
        <Image source={frames[currentFrame]} style={styles.viewerImage} />
 
        {/* Botão anterior */}
        <TouchableOpacity style={[styles.navButton, { left: 10 }]} onPress={irParaAnterior}>
          <Text style={styles.navButtonText}>◀</Text>
        </TouchableOpacity>
 
        {/* Botão próximo */}
        <TouchableOpacity style={[styles.navButton, { right: 10 }]} onPress={irParaProximo}>
          <Text style={styles.navButtonText}>▶</Text>
        </TouchableOpacity>
        
      </View>
     
        <TouchableOpacity style={styles.button} onPress={localizacao}>
            <Text style={styles.navButtonText}>Ver Trajeto</Text>
        </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: "center", 
     alignItems: "center", 
     backgroundColor: "#033b85", 
     paddingVertical: 20 
    },
  title: { 
    color: "#fff", 
    fontSize: 23, 
    fontFamily: 'Quicksand_700Bold',
    fontWeight: "600", 
    marginBottom: 20
 },
  viewerContainer: {
    height: 260,
    // backgroundColor: "#fff",
    borderRadius: 18,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  button: {
    backgroundColor: "#677db0",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop:  80,
    
},
tituloButton: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: 'Quicksand_700Bold',
    textAlign: 'center',
},
  tela : {
    width: 220,
    height: 280,
    marginTop: -180,
 
},
  viewerImage: { width: "100%", height: "100%", resizeMode: "contain" },
  navButton: {
    position: "absolute",
    top: "40%",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  navButtonText: { fontSize: 22, fontWeight: "bold", color: "#fff" },
});
 
 