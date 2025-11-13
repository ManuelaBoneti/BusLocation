import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BackNavigation } from '@/components/BackNavigation';
import { Button } from '@/components/Button';

export default function Trajeto() {

    return (
        <View style={styles.container}>
            
            <View style={{ alignItems: 'center', marginTop: -110 }}>
                <Image
                    style={styles.logo}
                    source={require('@/assets/telaInicial.png')}
                />
            </View>

            <Text style={styles.title}>Trajeto</Text>

            <BackNavigation />

            <View style={styles.section}>
                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='pin-drop' size={16} />
                    <TextInput style={styles.textInput} placeholder="Insira sua localização atual:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='pin-drop' size={16} />
                    <TextInput style={styles.textInput} placeholder="Selecione seu destino:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='schedule' size={16} />
                    <TextInput style={styles.textInput} placeholder="Horário:" />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder="" />
                </View>

                <Button />

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
    logo: {
        width: 300,
        height: 360,
        resizeMode: 'contain',
        marginBottom: -100, // pequeno espaçamento entre logo e título
    },
    title: {
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 120,
        marginBottom: -250,
        paddingBottom: 50,   },
    tela : {
        width: 340,
        height: 370,
        marginBottom: -10,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: 360,
        height: 430,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        height: 60,
        marginLeft: 5,
        fontSize: 16,
    },
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#033b85',
        marginTop: 10,
        marginBottom: 5,
    },
    busOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
    },
    busText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 8,
    },
});
