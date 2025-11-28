import React from 'react';
import { Image } from 'react-native';

import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps'; // Importe diretamente

export default function Localizacao() {

    const InitialRegion = {
        latitude: -22.3511,
        longitude: -48.7749,
        latitudeDelta: 0.05, // Zoom mais próximo
        longitudeDelta: 0.05, // Zoom mais próximo
    };

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', marginTop: -110 }}>
                <Image
                    style={styles.tela}
                    source={require('@/assets/telaInicial.png')}
                />
            </View>
            <Text style={styles.title}>Trajeto</Text>


            <MapView
                style={styles.map}
                initialRegion={InitialRegion}
            // NÃO precisa de provider={PROVIDER_GOOGLE} ou UrlTile
            // O Expo gerencia a renderização nativa (sem chave do Google no Android)
            />

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#033b85",
        alignItems: 'center',
        justifyContent: 'center',
    },
    tela: {
        width: 220,
        height: 280,
        marginTop: -4,
    },
    title: {
        fontSize: 27,
        color: "#fff",
        fontFamily: 'Quicksand_700Bold',
        marginBottom: 30, // espaço entre o título e a section
        marginTop: -50,
        alignItems: 'center',
    },
    icon: {
        margin: 10,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 13,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: 390,
        height: 400,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        height: 60,
        marginLeft: 5,
        fontSize: 16,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 65, // distância do topo do input 
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        zIndex: 20,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        maxHeight: 200,
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    button: {
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
    buttonPressed: {
        backgroundColor: "gray",
        transform: [{ scale: 0.97 }],
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginLeft: 30
    },

    map: {
        width: '100%',
        height: '100%',
    },
});