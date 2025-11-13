import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BackNavigation } from "@/components/BackNavigation";
 
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
        backgroundColor: "#033b85",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginBottom: 90,
    },
    textInput: {
        flex: 1,
        height: 40,
        width: 200
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#fff',
    },
    button : {
        backgroundColor: "#677db0",
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 10,
        width: 200,
        alignItems: "center",
        height: 50,
    },
    textButton : {
        flex: 1,
        height: 40,
        marginLeft: 5,
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },

})
