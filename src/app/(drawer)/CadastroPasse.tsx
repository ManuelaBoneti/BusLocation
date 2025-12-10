import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useUser } from '../../components/Context/UserContext';

export default function CadastrePasseVirtual() {
  const { updateUser } = useUser();

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [saldo, setSaldos] = useState('');

  const mascaraCartao = (texto: string) => {
    let cpf = texto.replace(/\D/g, '');
    if (cpf.length > 11) cpf = cpf.slice(0, 11);
    if (cpf.length > 9) cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    else if (cpf.length > 6) cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    else if (cpf.length > 3) cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    setNumero(cpf); 
  };

  const mascaraData = (texto: string) => {
    let novoTexto = texto.replace(/\D/g, '');
    novoTexto = novoTexto.replace(/(\d{2})(\d)/, '$1/$2');
    setNascimento(novoTexto);
  };

  const mascaraMoeda = (texto: string) => {
    let numeros = texto.replace(/\D/g, '');
    if (numeros.length === 0) {
      setSaldos('');
      return;
    }
    let valor = (parseInt(numeros, 10) / 100).toFixed(2);
    valor = valor.replace('.', ',');
    setSaldos(valor);
  };

  const handleSalvar = async () => {
    if (!nome || !numero || !nascimento || !saldo) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      await updateUser({
        nome: nome.toUpperCase(),
        numeroCartao: numero,
        nascimento: nascimento,
        saldo: saldo,
      });

      Alert.alert("Sucesso", "Cartão cadastrado!");
      router.navigate("/(drawer)/passeVirtual");
    } catch (err) {
      console.error(err);
      Alert.alert("Erro", "Não foi possível salvar o cartão.");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.tela} source={require("../../assets/telaInicial.png")} />
      <Text style={styles.title}>Novo Cartão</Text>
      <View style={styles.section}>
        <TextInput style={styles.input} placeholder="Nome do Titular" placeholderTextColor="#ccc" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="CPF" placeholderTextColor="#ccc" keyboardType="numeric" maxLength={19} value={numero} onChangeText={mascaraCartao} />
        <TextInput style={styles.input} placeholder="Data de nascimento (MM/AA)" placeholderTextColor="#ccc" maxLength={5} value={nascimento} onChangeText={mascaraData} />
        <TextInput style={styles.input} placeholder="Quantidade de Créditos" placeholderTextColor="#ccc" maxLength={5} value={saldo} keyboardType='numeric' onChangeText={mascaraMoeda} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.textButton}>SALVAR CARTÃO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#033b85",
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        color: "#fff",
        fontSize: 28,
        fontFamily: 'Quicksand_700Bold',
        textAlign: 'center',
        marginTop: -80,
        marginBottom: 50, 
    },
    tela : {
      width: 220,
      height: 280,
      marginTop: -140,
      alignSelf: 'center',
  },
    section: {
      height: 340,
      width: 365,
      backgroundColor: '#ffff',
      borderRadius: 15,
      padding: 20,
    },
    input: {
        backgroundColor: "rgba(118, 110, 110, 0.1)",
        color: "#000",
        borderRadius: 12,
        padding: 15,
        marginBottom: 25,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "rgba(134, 121, 121, 0.52)",
        fontFamily: 'Quicksand_400Regular', 
    },
    button: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    textButton: {
        color: "#033b85",
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    }
});

 