import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
// Remova "MapViewPropsAndMethods" daqui, pois não é reconhecido
import MapView, { Marker } from 'react-native-maps'; 

// 1. DEFINIÇÃO DO TIPO:
type LocationData = {
    bairro: string;
    latitude: number;
    longitude: number;
};
 
// Dados JSON fornecidos pelo usuário (agora tipados)
const ubsData: LocationData[] = [
    { bairro: "Centro", latitude: -22.351944, longitude: -48.775000 },
    { bairro: "Cidade Nova", latitude: -22.32130532421314, longitude: -48.79683089338152 },
    { bairro: "Facciollo", latitude: -22.37287893684414, longitude: -48.77365077334054 },
    { bairro: "Leonor Mendes", latitude: -22.351667, longitude: -48.775000 }
];

const InitialRegion = {
    latitude: ubsData[0].latitude, // Acesso seguro ao primeiro item
    longitude: ubsData[0].longitude,
    latitudeDelta: 0.1, 
    longitudeDelta: 0.1, 
};

export default function Localizacao() {
    // ⚠️ HOOKS DEVEM FICAR DENTRO DO COMPONENTE
    // Use esta linha para tipar corretamente o mapRef:
    const mapRef = useRef<MapView | null>(null); 

    // Estado pode ser LocationData ou null
    const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(ubsData[0]); 

    const handleLocationPress = (location: LocationData) => {
        setSelectedLocation(location);
        if (mapRef.current) {
            // A tipagem MapView | null permite o acesso a animateToRegion
            mapRef.current.animateToRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01, 
                longitudeDelta: 0.01,
            }, 1000); 
        }
    };

    // 3. TIPAGEM DA FUNÇÃO renderItem:
    const renderLocationItem = ({ item }: { item: LocationData }) => (
        <TouchableOpacity 
            style={[
                styles.option, 
                selectedLocation && selectedLocation.bairro === item.bairro ? styles.selectedOption : {} 
            ]}
            onPress={() => handleLocationPress(item)}
        >
            <Text style={styles.optionText}>{item.bairro}</Text>
        </TouchableOpacity>
    );

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
                ref={mapRef}
                style={styles.map}
                initialRegion={InitialRegion}
            >
                {ubsData.map((location, index) => (
                    <Marker
                        key={index} 
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title={location.bairro}
                        pinColor={selectedLocation && selectedLocation.bairro === location.bairro ? '#FF0000' : '#0099FF'}
                        onPress={() => handleLocationPress(location)}
                    />
                ))}
            </MapView>

            <View style={styles.locationListContainer}>
                <FlatList<LocationData> 
                    data={ubsData}
                    renderItem={renderLocationItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                />
            </View>

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
        marginBottom: 20, 
        marginTop: -50,
    },
    map: {
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        marginTop: 20, 
    },
    locationListContainer: {
        position: 'absolute',
        bottom: 20,
        height: 70, 
        width: '100%',
        zIndex: 10,
    },
    option: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        justifyContent: 'center',
        elevation: 3,
        width: 150, 
        alignItems: 'center',
    },
    selectedOption: {
        borderColor: '#FF0000', 
        borderWidth: 2,
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
});