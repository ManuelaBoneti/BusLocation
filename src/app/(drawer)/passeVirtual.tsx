import {View,Text,Image, TouchableOpacity, Dimensions, StyleSheet,Animated,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
   
  const { width: screenWidth } = Dimensions.get("window");
   
  export default function PasseVirtual() {
    const data = [
      { image: require("@/assets/passeVirtualFrente.png") },
      { image: require("@/assets/passeVirtualVerso.png") },
    ];
   
    const [currentIndex, setCurrentIndex] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;
   
    const handleTransition = (nextIndex: number, direction: "left" | "right") => {
      const move = direction === "left" ? -screenWidth : screenWidth;
   
      Animated.timing(translateX, {
        toValue: move,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setCurrentIndex(nextIndex);
        translateX.setValue(-move);
   
        Animated.timing(translateX, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start();
      });
    };
   
    const handleNext = () => {
      const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      handleTransition(nextIndex, "left");
    };
   
    const handlePrev = () => {
      const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
      handleTransition(prevIndex, "right");
    };
   
    return (
      <View style={styles.container}>
        <Image
          style={styles.tela}
          source={require("@/assets/telaInicial.png")}
        />
   
        <Text style={styles.title}>Passe Virtual</Text>
   
        <View style={styles.carouselContainer}>
          <Animated.View
            style={[
              styles.slideWrapper,
              { transform: [{ translateX }] },
            ]}
          >
            <Image source={data[currentIndex].image} style={styles.image} />
          </Animated.View>
   
          {/* Botão anterior */}
          <TouchableOpacity
            style={[styles.navButton, styles.leftButton]}
            onPress={handlePrev}
          >
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
   
          {/* Botão próximo */}
          <TouchableOpacity
            style={[styles.navButton, styles.rightButton]}
            onPress={handleNext}
          >
            <Ionicons name="chevron-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
   
        {/* Indicadores */}
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
   
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#033b85",
      paddingTop: 70,
    },
    tela: {
      width: 220,
      height: 280,
      marginTop: -60,
    },
    title: {
      color: "#fff",
      fontSize: 26,
      fontWeight: "600",
      marginBottom: 20,
      marginTop: -30,
    },
    carouselContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    slideWrapper: {
      width: screenWidth * 0.9,
      height: 260,
      borderRadius: 20,
      overflow: "hidden",
      backgroundColor: "transparent", // 🔹 sem fundo branco
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain", // 🔹 mantém proporção e centraliza
    },
    navButton: {
      position: "absolute",
      top: "45%",
      backgroundColor: "rgba(0,0,0,0.4)",
      padding: 8,
      borderRadius: 30,
      zIndex: 2,
    },
    leftButton: {
      left: 20,
    },
    rightButton: {
      right: 20,
    },
    indicatorContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 16,
    },
    indicator: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgba(255,255,255,0.5)",
      marginHorizontal: 4,
    },
    indicatorActive: {
      backgroundColor: "#fff",
      width: 12,
    },
  });
