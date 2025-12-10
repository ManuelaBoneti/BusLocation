

import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 
export default function Index() {
    const router = useRouter();
 
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);
 
    useEffect(() => {
        async function carregarLogin() {
            const dados = await AsyncStorage.getItem("usuario_logado");
 
            if (dados) {
                const usuario = JSON.parse(dados);
                setEmail(usuario.email);
                setSenha(usuario.senha);
                setLembrar(true);
            }
        }
 
        carregarLogin();
    }, []);
 
    function esqueciSenha() {
        router.navigate("/(tabs)/esqueciSenha");
    }
 
    function criarCadastro() {
        router.navigate("/(tabs)/criarConta");
    }
 
    async function menuPrincipal() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }
 
        try {
            const storedData = await AsyncStorage.getItem("usuario_dados");
 
            if (storedData) {
                const parsed = JSON.parse(storedData);
 
                if (parsed.email === email && parsed.senha === senha) {
 
                    if (lembrar) {
                        await AsyncStorage.setItem("usuario_logado", JSON.stringify({
                            email: email,
                            senha: senha
                        }));
                    } else {
                        await AsyncStorage.removeItem("usuario_logado");
                    }
 
                    router.navigate("/(tabs)/menuPrincipal");
 
                } else {
                    Alert.alert("Erro", "E-mail ou senha incorretos.");
                }
 
            } else {
                Alert.alert("Erro", "Conta não encontrada.");
            }
 
        } catch {
            Alert.alert("Erro", "Não foi possível fazer login.");
        }
    }
 
    return (
        <View style={styles.container}>
            <Image style={styles.tela} source={require('@/assets/telaInicial.png')} />
 
            <View style={styles.section}>
 
                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='email' size={16} />
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
                    <MaterialIcons style={styles.icon} name='lock' size={16} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha:"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                </View>
 
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.lembrarContainer}
                    onPress={() => setLembrar(!lembrar)}
                >
                    <View style={styles.checkbox}>
                        {lembrar && <MaterialIcons name="check" size={12} color="#033b85" />}
                    </View>
                    <Text style={styles.lembrarTexto}>Lembrar de mim</Text>
                </TouchableOpacity>
 
                <TouchableOpacity onPress={menuPrincipal} style={styles.button}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
 
                <View style={styles.links}>
                    <TouchableOpacity onPress={esqueciSenha}>
                        <Text style={styles.title}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
 
                    <TouchableOpacity onPress={criarCadastro}>
                        <Text style={styles.title}>Criar uma nova conta</Text>
                    </TouchableOpacity>
                </View>
 
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#033b85",
    },
    tela: {
        width: 340,
        height: 370,
        marginTop: 40,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        width: 300,
        height: 380,
        marginBlock: -70,
        elevation: 3
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 0,
        marginTop: 35,
        backgroundColor: '#fff',
    },
    icon: {
        marginLeft: 2,
        marginBottom: 2
    },
    textInput: {
        flex: 1,
        height: 40,
        marginLeft: 5,
        fontSize: 16,
    },
 
    lembrarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    checkbox: {
        width: 18,
        height: 18,
        borderWidth: 1.0,
        borderColor: "#033b85",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
        marginTop: 10
    },
 
    lembrarTexto: {
        fontSize: 13,
        color: "#033b85",
        marginTop: 10
    },
 
    button: {
        backgroundColor: "#677db0",
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 15,
    },
 
    textButton: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Quicksand_700Bold',
        textTransform: "uppercase"
    },
 
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
 
    title: {
        fontSize: 12,
        color: "#033b85",
        textDecorationLine: 'underline',
        fontFamily: 'Quicksand_700Bold'
    }
});
 
 