import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const formatarHorario = (value: string) => {
    let digits = value.replace(/\D/g, ''); 
    
    if (digits.length > 4) {
        digits = digits.substring(0, 4);
    }

    if (digits.length > 2) {
        return `${digits.substring(0, 2)}:${digits.substring(2)}`;
    }

    return digits;
};


export default function Trajeto() {

    const [busLines, setBusLines] = useState([

        '001 - Centro / Leonor Mendes', '002 - Centro / Cidade nova', '003 - Centro / Facciolo',
        '004 - Leonor Mendes / Cidade nova', '005 - Leonor Mendes / Facciolo', '006 - Leonor Mendes / Centro',
        '007 - Cidade nova / Leonor Mendes', '008 - Cidade nova / Facciolo', '009 - Cidade nova / Centro',
        '010 - Facciolo / Leonor Mendes', '011 - Facciolo / Cidade nova', '012 - Facciolo / Centro',
    ]);

    const [search, setSearch] = useState('');
    const [selectedLine, setSelectedLine] = useState('');
    const [time, setTime] = useState(''); 

    const filteredLines = busLines.filter(line =>
        line.toLowerCase().includes(search.toLowerCase())
    );

    const handleTimeChange = (text: string) => {
        const maskedValue = formatarHorario(text);
        setTime(maskedValue);
    };

    const handleContinue = () => {
        if (selectedLine) {
            router.push({
                pathname: '/(drawer)/visualizacaoOnibus',
                params: { 
                    linhaEscolhida: selectedLine,
                    horario: time, 
                },
            });
        } else {
            Alert.alert('Atenção', 'Selecione uma linha antes de continuar.');
        }
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

            <View style={styles.section}>
                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='pin-drop' size={16} />
                    <TextInput style={styles.textInput} placeholder="Insira sua localização atual:" />
                </View>

                <View style={{ position: 'relative', width: '100%' }}>
                    <View style={styles.inputContainer}>
                        <MaterialIcons style={styles.icon} name='directions-bus' size={16} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Selecione a linha de ônibus:"
                            value={search}
                            onChangeText={setSearch}
                        />
                    </View>

                    {search.length > 0 && (
                        <View style={styles.dropdownContainer}>
                            <FlatList
                                data={filteredLines}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.option}
                                        onPress={() => {
                                            setSelectedLine(item);
                                            setSearch(item); 
                                        }}
                                    >
                                        <Text style={styles.optionText}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='schedule' size={16} />
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Horário (HH:MM):" 
                        keyboardType="numeric" 
                        maxLength={5}
                        value={time} 
                        onChangeText={handleTimeChange} 
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={handleContinue}>
                        <Text style={styles.textButton}>Procurar</Text>
                    </TouchableOpacity>
                </View>

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
    tela : {
        width: 220,
        height: 280,
        marginTop: -4,
    },
    title: {
        fontSize: 27,
        color: "#fff",
       fontFamily: 'Quicksand_700Bold',
        marginBottom: 30, 
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
        top: 65, 
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
    buttonPressed: {
        backgroundColor: "gray",
        transform: [{ scale: 0.97 }], 
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});
