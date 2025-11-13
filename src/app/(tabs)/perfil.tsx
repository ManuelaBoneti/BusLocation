import React, { useState, useEffect, JSX } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

type UserData = {
  nomeCompleto: string;
  email: string;
  senha: string;
  avatar: string | number;
};

export default function Perfil(): JSX.Element {
  const imagemPadrao = require("@/assets/usuarioFavicon.png");

  const [userData, setUserData] = useState<UserData>({
    nomeCompleto: "",
    email: "",
    senha: "",
    avatar: imagemPadrao,
  });

  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("usuario_dados");
        if (storedData) {
          const parsed = JSON.parse(storedData);
          setUserData({
            nomeCompleto: parsed.nomeCompleto || "",
            email: parsed.email || "",
            senha: parsed.senha || "",
            avatar: parsed.avatar || imagemPadrao,
          });
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadUserData();
  }, []);

  const handleAvatarChange = () => {
    ImagePicker.launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel || response.errorCode) return;
      const uri = response.assets?.[0]?.uri;
      if (uri) {
        setUserData((prev) => ({ ...prev, avatar: uri }));
      }
    });
  };

  const handleAvatarClear = () => {
    setUserData((prev) => ({ ...prev, avatar: imagemPadrao }));
  };

  const handleSalvar = async () => {
    try {
      const dataToSave = {
        ...userData,
        avatar: typeof userData.avatar === "string" ? userData.avatar : null,
      };
      await AsyncStorage.setItem("usuario_dados", JSON.stringify(dataToSave));
      Alert.alert("Sucesso", "Dados salvos com sucesso!");
      setEditando(false);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={
          typeof userData.avatar === "string"
            ? { uri: userData.avatar }
            : userData.avatar
        }
      />
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.section}>
        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="person" size={20} />
          {editando ? (
            <TextInput
              style={styles.textInput}
              value={userData.nomeCompleto}
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, nomeCompleto: text }))
              }
              placeholder="Nome completo"
              placeholderTextColor="#999"
            />
          ) : (
            <Text style={styles.value}>{userData.nomeCompleto}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="email" size={20} />
          {editando ? (
            <TextInput
              style={styles.textInput}
              value={userData.email}
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, email: text }))
              }
              placeholder="E-mail"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          ) : (
            <Text style={styles.value}>{userData.email}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="lock" size={20} />
          {editando ? (
            <TextInput
              style={styles.textInput}
              value={userData.senha}
              onChangeText={(text) =>
                setUserData((prev) => ({ ...prev, senha: text }))
              }
              placeholder="Alterar senha"
              placeholderTextColor="#999"
              secureTextEntry
            />
          ) : userData.senha ? (



            <Text style={styles.value}>Senha não </Text>




            
          ) : (
            <Text style={styles.value}>Senha não definida</Text>
          )}
        </View>

        {editando && (
          <View style={styles.avatarButtons}>
            <TouchableOpacity
              style={styles.avatarButton}
              onPress={handleAvatarChange}
            >
              <Text style={styles.avatarButtonText}>Alterar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.avatarButton, styles.removeButton]}
              onPress={handleAvatarClear}
            >
              <Text style={styles.avatarButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setEditando(!editando)}
          >
            <Text style={styles.buttonText}>
              {editando ? "Cancelar" : "Editar Dados"}
            </Text>
          </TouchableOpacity>

          {editando && (
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSalvar}
            >
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#033b85",
    paddingTop: 60,
  },
  imagem: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: 320,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#333",
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  avatarButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  avatarButton: {
    backgroundColor: "#2a58b5",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  removeButton: {
    backgroundColor: "#d9534f",
  },
  avatarButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    elevation: 3,
  },
  editButton: {
    backgroundColor: "#007bff",
  },
  saveButton: {
    backgroundColor: "#28a745",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
