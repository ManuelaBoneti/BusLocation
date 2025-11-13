import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// No additional imports or code are needed at this placeholder.
export default function Index() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function esqueciSenha(){
        router.navigate("/(tabs)/esqueciSenha")
    }

    function criarCadastro (){
        router.navigate("/(tabs)/criarConta")
    }

    async function menuPrincipal(){
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Preencha todos os campos.");
            return;
        }

        try {
            const storedData = await AsyncStorage.getItem("usuario_dados");
            if (storedData) {
                const parsed = JSON.parse(storedData);
                if (parsed.email === email && parsed.senha === senha) {
                    router.navigate("/(tabs)/menuPrincipal");
                } else {
                    Alert.alert("Erro", "E-mail ou senha incorretos.");
                }
            } else {
                Alert.alert("Erro", "Conta não encontrada. Crie uma conta primeiro.");
            }
        } catch (error) {
            Alert.alert("Erro", "Não foi possível fazer login.");
        }
    }

    return(
        <View style={styles.container}>
            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />
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
                    <MaterialIcons style={styles.icon} name='lock' size={16}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Senha:"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity onPress={menuPrincipal} style={styles.button} >
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.links}>
                    <TouchableOpacity onPress={esqueciSenha}>
                        <Text style={styles.title}>Esqueceu a senha?</Text>
                    </TouchableOpacity >

                    <TouchableOpacity onPress={criarCadastro}>
                        <Text style={styles.title}>Criar uma nova conta</Text>
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
    tela : {
        width: 340,
        height: 370,
        marginTop: 40,
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
        height: 360,
        marginBlock: -70,
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
    icon : {
        marginLeft: 5,
    },
    textInput : {
        flex: 1,
        height: 40,
        marginLeft: 5,
        fontSize: 16,
    },
    title: {
        fontSize: 12,
        marginTop: 10,
        color: "#033b85",
       
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        fontFamily: 'Quicksand_700Bold', 
    },
 
    button : {
        backgroundColor: "#677db0",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 30,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textButton : {
        fontSize: 18,
        fontFamily: 'Quicksand_700Bold', 
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
    links : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    }
})