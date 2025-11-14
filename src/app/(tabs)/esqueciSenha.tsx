
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Modal} from 'react-native';

export default function EsqueciSenha() {


  const [email, setEmail] = useState("");

  const enviarCodigo = () => {
    if (!email.trim()) {
      Alert.alert("Campo obrigatório", "Digite seu e-mail para continuar.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("E-mail inválido", "Por favor, digite um e-mail válido.");
      return;
    }


    router.push("/codigoSenha");
  };

  return (
    <View style={styles.container}>
      

      <Text style={styles.title}>ESQUECI A SENHA</Text>
      <Image style={styles.Image} source={require('@/assets/Cadeado.png')} />

      <Text style={styles.esqueceuSenha}>
         Esqueceu a senha?
      </Text>
      <Text style={styles.informacao}>
        Informe seu e-mail para enviarmos o código de recuperação.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

<TouchableOpacity style={styles.button} onPress={enviarCodigo}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033b85',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Quicksand_700Bold', 
    marginBottom: 30,
    marginTop: -130
  },
  Image:{
    width: 200,
    height: 200
  },
  esqueceuSenha: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    fontSize:22,
    fontFamily: 'Quicksand_700Bold', 
  },
  informacao: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 18
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 25,
    marginBottom: 15,
    paddingLeft: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#677db0',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Quicksand_500Medium', 
    fontSize: 16,
  }
});