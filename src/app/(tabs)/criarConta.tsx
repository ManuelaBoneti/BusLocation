import { BackMenu } from "@/components/BackMenu";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function criarConta(){
    const [email, setEmail] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const validateInputs = () => {
        if (!email.trim() || !nomeCompleto.trim() || !nomeUsuario.trim() || !senha.trim()) {
            Alert.alert("Erro", "Todos os campos são obrigatórios.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Erro", "E-mail inválido.");
            return false;
        }
        if (senha.length < 6) {
            Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres.");
            return false;
        }
        return true;
    };

    async function criarConta(){
        if (!validateInputs()) return;

        try {
            const userData = {
                nomeCompleto,
                email,
                senha,
                avatar: null,
            };
            await AsyncStorage.setItem("usuario_dados", JSON.stringify(userData));
            Alert.alert("Sucesso", "Conta criada com sucesso!");
            router.navigate("/telaInicial");
        } catch (error) {
            Alert.alert("Erro", "Não foi possível criar a conta.");
        }
    }

    return(
        <View style={styles.container}>

        <BackMenu /> 

            <View style={styles.content}>
                <Image style={styles.tela} source={require('@/assets/telaInicial.png')} />
                <View style={styles.section}>
                    <View style={styles.inputContainer}>
                        <MaterialIcons  name='email' size={16} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email:"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MaterialIcons  name='person' size={16} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Nome completo:"
                            value={nomeCompleto}
                            onChangeText={setNomeCompleto}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MaterialIcons  name='person' size={16} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Nome do usuário:"
                            value={nomeUsuario}
                            onChangeText={setNomeUsuario}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <MaterialIcons name='password' size={16} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Senha:"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity onPress={criarConta} style={styles.button} >
                        <Text style={styles.textButton}>Criar Conta</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#033b85",
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    tela : {
        width: 240,
        height: 370,
        marginBottom: -90,
        marginTop: 20
    },
    section: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: 300,
        height: 450,
    },
    inputContainer : {
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
    textInput : {
        flex: 1,
        height: 40,
        marginLeft: 5,
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        marginTop: 15,
        color: "black",
        fontFamily: 'Quicksand_700Bold', 
        textDecorationStyle: 'solid',
        textAlign: 'center',
    },
    button : {
        backgroundColor: "#677db0",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 10,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
})
