import { Back } from "@/components/Back";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function menuPrincipal() {
    return (
        <View style={styles.container}>
            <Back />
            <View >
                <Text style={styles.title}>MENU</Text>
            </View>

            <View style={styles.gridContainer}>
                <View style={styles.caixaIcon}>
                    <TouchableOpacity onPress={() => router.navigate('/(drawer)/trajeto' as any)}>
                        <FontAwesome6 name="map-location-dot" size={60} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.subtitulo}>Trajeto</Text>
                </View>

                <View style={styles.caixaIcon}>
                    <TouchableOpacity onPress={() => router.navigate('/visualizacaoOnibus' as any)}>
                        <FontAwesome6 name="bus" size={60} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.subtitulo}>Visualização</Text>
                </View>

                <View style={styles.caixaIcon}>
                    <TouchableOpacity onPress={() => router.navigate('/(drawer)/avaliacoes' as any)}>
                    <FontAwesome6 name="star" size={60} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.subtitulo}>Avaliações</Text>
                </View>

                <View style={styles.caixaIcon}>
                    <Icon name="chat" size={60} color="#fff" />
                    <Text style={styles.subtitulo}>Chat</Text>
                </View>

                <View style={styles.caixaIcon}>
                    <FontAwesome6 name="address-card" size={60} color={'white'} />
                    <Text style={styles.subtitulo}>Passe Virtual</Text>
                </View>

                <View style={styles.caixaIcon}>
                    <TouchableOpacity onPress={() => router.navigate('/(drawer)/CadastroPasse' as any)}>
                        <FontAwesome6 name="id-card" size={60} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.subtitulo}>Cadastro do Passe</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#033b85",
        alignItems: "center",
        paddingTop: 100,
    },
    title: {
        fontSize: 36,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 40, 
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    caixaIcon: {
        width: "42%", 
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 15,
        paddingVertical: 20,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 12,
        textAlign: "center",
    },
});