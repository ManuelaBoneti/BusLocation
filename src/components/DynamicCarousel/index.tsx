import React, { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Animated, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VirtualCard, VirtualCardProps } from "../VirtualCard";

const { width: screenWidth } = Dimensions.get("window");

interface DynamicCarouselProps {
  data: VirtualCardProps[]; // Agora ele espera a lista de dados do cartão
}

export function DynamicCarousel({ data }: DynamicCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  if (!data || data.length === 0) return null;

  const currentCardData = data[currentIndex];

  // --- Lógica de Animação (Igual à anterior) ---
  const handleTransition = (nextIndex: number, direction: "left" | "right") => {
    const move = direction === "left" ? -screenWidth : screenWidth;
    Animated.timing(translateX, { toValue: move, duration: 250, useNativeDriver: true }).start(() => {
      setCurrentIndex(nextIndex);
      translateX.setValue(-move);
      Animated.timing(translateX, { toValue: 0, duration: 250, useNativeDriver: true }).start();
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
    <View style={styles.carouselContainer}>
      <Animated.View style={[styles.slideWrapper, { transform: [{ translateX }] }]}>
        
        {/* AQUI ESTÁ A MÁGICA: Renderizamos o componente do cartão */}
        <VirtualCard 
            holderName={currentCardData.holderName}
            cardNumber={currentCardData.cardNumber}
            expiryDate={currentCardData.expiryDate}
            type={currentCardData.type}
            balance={currentCardData.balance}
        />

      </Animated.View>

      {/* Botões de Navegação (Só aparecem se tiver mais de 1 cartão) */}
      {data.length > 1 && (
        <>
          <TouchableOpacity style={[styles.navButton, styles.leftButton]} onPress={handlePrev}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navButton, styles.rightButton]} onPress={handleNext}>
            <Ionicons name="chevron-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </>
      )}

      {/* Indicadores */}
      {data.length > 1 && (
        <View style={styles.indicatorContainer}>
            {data.map((_, index) => (
            <View key={index} style={[styles.indicator, currentIndex === index && styles.indicatorActive]} />
            ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  slideWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth, 
  },
  navButton: {
    position: "absolute",
    top: "45%", 
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 30,
    zIndex: 2,
  },
  leftButton: { left: 20 },
  rightButton: { right: 20 },
  indicatorContainer: {
    flexDirection: "row",
    marginTop: 20,
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
    width: 20, 
  },
});