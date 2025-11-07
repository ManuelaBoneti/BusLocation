import { BackNavigation } from "@/components/BackNavigation";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";


export default function VizualizacaoOnibus() {
    const { width: screenWidth } = Dimensions.get("window");

    const data = [
        {
            image:
                "https://i0.wp.com/diariodotransporte.com.br/wp-content/uploads/2023/02/onibus-rio-de-janeiro-transporte-futuro-foto-ob.jpeg?fit=628%2C431&ssl=1",
        },
        {
            image: "https://2023.onibus.org/6/6/p/49d1dcba11213830d65050aa50987228.jpg",
        },
        {
            image: "https://2023.onibus.org/4/2/p/8fa26daad4bf5bd7237930e0e5ce6852.jpg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<any>(null);

    const handleNext = () => {
        carouselRef.current?.next();
    };

    const handlePrev = () => {
        carouselRef.current?.prev();
    };

    return (
        <View style={styles.container}>
            <BackNavigation />

            <Image 
                style={styles.tela} source={require('@/assets/telaInicial.png')} 
            />

            <Text style={styles.title}>Seu transporte!</Text>

            <View style={styles.carouselContainer}>
                <Carousel
                    ref={carouselRef}
                    width={screenWidth * 0.8}
                    height={260}
                    data={data}
                    loop
                    onSnapToItem={(index) => setCurrentIndex(index)}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 60,
                    }}
                    renderItem={({ item }) => (
                        <View style={styles.slide}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                        </View>
                    )}
                />

                {/* Botão anterior */}
                <TouchableOpacity style={[styles.navButton, styles.leftButton]} onPress={handlePrev}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </TouchableOpacity>

                {/* Botão próximo */}
                <TouchableOpacity style={[styles.navButton, styles.rightButton]} onPress={handleNext}>
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
    tela : {
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
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
    },
    slide: {
        borderRadius: 18,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
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
        left: 10,
    },
    rightButton: {
        right: 10,
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
