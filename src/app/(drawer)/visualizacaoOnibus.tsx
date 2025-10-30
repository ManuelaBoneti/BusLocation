import { Back } from "@/components/Back";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function VizualizacaoOnibus(){

    const { width: screenWidth } = Dimensions.get("window");

    const data = [
        { image: "https://i0.wp.com/diariodotransporte.com.br/wp-content/uploads/2023/02/onibus-rio-de-janeiro-transporte-futuro-foto-ob.jpeg?fit=628%2C431&ssl=1" },
        { image: "https://2023.onibus.org/6/6/p/49d1dcba11213830d65050aa50987228.jpg" },
        { image: "https://2023.onibus.org/4/2/p/8fa26daad4bf5bd7237930e0e5ce6852.jpg" },
    ];


    return(
        <View style={styles.container}>
            <Back />
            <Text style={styles.title}>Seu ônibus em 3d!</Text>

            <Carousel
                width={screenWidth * 0.75}
                height={280}
                data={data}
                loop
                autoPlay
                autoPlayInterval={3500}
                scrollAnimationDuration={900}
                mode="parallax" 
                modeConfig={{
                    parallaxScrollingScale: 0.85, // tamanho dos cards nas laterais
                    parallaxScrollingOffset: 60,  // deslocamento lateral
                }}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#033b85"
    },
    title: {
        color: "#fff",
        fontSize: 30,
        marginTop: 70,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
        resizeMode: "contain",
    },
    slide: {
        borderRadius: 16,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },

})