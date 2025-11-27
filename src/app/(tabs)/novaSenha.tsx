import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Image} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function NovaSenha() {
  const { email } = useLocalSearchParams();

  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const senhasDiferentes =
    confirmarSenha.length > 0 && novaSenha !== confirmarSenha;

  const alterarSenha = async () => {
    if (!novaSenha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não são iguais");
      return;
    }

    try {
      const dadosSalvos = await AsyncStorage.getItem("usuario_dados");

      if (!dadosSalvos) {
        Alert.alert("Erro", "Nenhum usuário encontrado");
        return;
      }

      const usuario = JSON.parse(dadosSalvos);

      if (usuario.email !== email) {
        Alert.alert("Erro", "Este e-mail não pertence a nenhuma conta.");
        return;
      }

      const novosDados = {
        ...usuario,
        senha: novaSenha
      };

      await AsyncStorage.setItem("usuario_dados", JSON.stringify(novosDados));

      Alert.alert("Sucesso", "Senha alterada com sucesso!", [
        {
          text: "OK",
          onPress: () => router.replace("/telaInicial"),
        },
      ]);

    } catch (error) {
      Alert.alert("Erro", "Não foi possível alterar a senha.");
    }
  };

  return (
    <View style={styles.container}>
        <Image style={styles.tela} source={require('@/assets/telaInicial.png')} />
      <Text style={styles.title}>Nova Senha</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={email as string}
        editable={false}
        style={styles.input}
      />

      <Text style={styles.label}>Nova senha</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Digite sua nova senha"
          secureTextEntry={!mostrarSenha}
          value={novaSenha}
          onChangeText={setNovaSenha}
        />

        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <MaterialIcons
            name={mostrarSenha ? "visibility" : "visibility-off"}
            size={22}
            color="#033b85"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirmar senha</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Repita a nova senha"
          secureTextEntry={!mostrarConfirmar}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
          <MaterialIcons
            name={mostrarConfirmar ? "visibility" : "visibility-off"}
            size={22}
            color="#033b85"
          />
        </TouchableOpacity>
      </View>

      {senhasDiferentes && (
        <Text style={styles.erroText}>
          As senhas não são iguais
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={alterarSenha}>
        <Text style={styles.buttonText}>Mudar Senha</Text>
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
    padding: 20
  },
  tela:{
    width: 340,
    height: 370,
    marginBottom: -110,
    marginTop: 10
  },
  title: {
    fontSize: 35,
    color: "#fff",
    marginBottom: 25,
    fontFamily: "Quicksand_700Bold"
  },
  label: {
    color: "#fff",
    alignSelf: "flex-start",
    marginBottom: 5
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 12,
    marginBottom: 10
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  inputSenha: {
    flex: 1,
    height: 50
  },
  erroText: {
    color: "#ffb3b3",
    marginBottom: 10,
    alignSelf: "flex-start",
    fontSize: 13
  },
  button: {
    backgroundColor: "#677db0",
    width: "100%",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Quicksand_500Medium"
  }
});
