import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { Dimensions, Image, TouchableOpacity, StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import localizacao from "./localizacao";

export default function CarrosselOnibusModerno() {
  const { width: screenWidth } = Dimensions.get("window");
  const { linhaEscolhida } = useLocalSearchParams();
  const localizacao = () => {
    router.push('/(drawer)/localizacao');
  }
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!linhaEscolhida) {
      setShowWarning(true);
    }
  }, []);

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

  const irParaProximo = () => setCurrentFrame(prev => (prev + 1) % totalFrames);
  const irParaAnterior = () => setCurrentFrame(prev => (prev - 1 + totalFrames) % totalFrames);

  return (
    <View style={styles.container}>
      
      {/* --- MODAL PERSONALIZADO DE AVISO --- */}
      <Modal visible={showWarning} transparent animationType="none">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Aviso</Text>
            <Text style={styles.modalText}>Você ainda não selecionou o trajeto.</Text>

            <Pressable
              style={styles.modalButton}
              onPress={() => {
                setShowWarning(false);
                router.push("/(drawer)/trajeto");
              }}
            >
              <Text style={styles.modalButtonText}>Selecionar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Conteúdo da tela */}
      <Image style={styles.tela} source={require('@/assets/telaInicial.png')} />

      <Text style={styles.title}>Visualização 360° do Ônibus</Text>

      <View style={[styles.viewerContainer, { width: screenWidth * 0.9 }]}>
        <Image source={frames[currentFrame]} style={styles.viewerImage} />

        <TouchableOpacity style={[styles.navButton, { left: 10 }]} onPress={irParaAnterior}>
          <Text style={styles.navButtonText}>◀</Text>
        </TouchableOpacity>

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
    backgroundColor: "#033b85",
    justifyContent: "center",
    alignItems: "center"
  },
  button : {
    backgroundColor: "#ccc",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 36,
    marginTop: 10,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: 'row',
},
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",      
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  modalContent: {
    width: "90%",              
    backgroundColor: "#fff",
    paddingVertical: 40,      
    paddingHorizontal: 30,
    borderTopLeftRadius: 30,    
    borderTopRightRadius: 30,
    elevation: 15,
    marginBottom: 150,        
  },
  modalTitle: {
    fontSize: 26,               
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  modalText: {
    fontSize: 18,               
    textAlign: "center",
    marginBottom: 30,
  },
  modalButton: {
    backgroundColor: "#033b85",
    paddingVertical: 16,        
    borderRadius: 14,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,              
    fontWeight: "bold",
  },
  tela: {
    width: 220,
    height: 280,
    marginTop: -150,
  },
  title: {
    color: "#fff",
    fontSize: 23,
    marginBottom: 20,
    fontFamily: "Quicksand_700Bold"
  },
  viewerContainer: {
    height: 260,
    borderRadius: 18,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  viewerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  navButton: {
    position: "absolute",
    top: "40%",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  navButtonText : {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    textTransform: 'uppercase',
},
});
