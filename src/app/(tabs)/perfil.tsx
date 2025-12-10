import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { JSX, useEffect, useState } from "react";
import {ActivityIndicator,Alert,Image,StyleSheet,Text,TextInput,TouchableOpacity,View} from "react-native";
import { useUser } from "../../components/Context/UserContext";

type UserData = {
  nomeCompleto: string;
  email: string;
  senha: string;
  avatar: string | number;
};

type EditData = {
  nomeCompleto: string;
  email: string;
  senhaAtual: string;
  novaSenha: string;
  confirmarSenha: string;
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
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState<EditData>({
    nomeCompleto: "",
    email: "",
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: "",
  });

  const { updateUser } = useUser();

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

  const handleAvatarChange = async (fromCamera: boolean = false) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permissão necessária", "Precisamos de permissão para acessar suas fotos.");
      return;
    }

    if (fromCamera) {
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      if (!cameraPermission.granted) {
        Alert.alert("Permissão necessária", "Precisamos de permissão para acessar a câmera.");
        return;
      }
    }

    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        base64: true,
      })
      : await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        base64: true,
      });

    if (!result.canceled) {
      const asset = result.assets[0];
      if (asset.base64) {
        setUserData((prev) => ({ ...prev, avatar: `data:image/jpeg;base64,${asset.base64}` }));
      } else {
        setUserData((prev) => ({ ...prev, avatar: asset.uri }));
      }
    }
  };

  const handleAvatarClear = () => {
    setUserData((prev) => ({ ...prev, avatar: imagemPadrao }));
  };

  const validateInputs = () => {
    const errors: string[] = [];

    if (!userData.nomeCompleto.trim()) {
      errors.push("Nome completo é obrigatório.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      errors.push("E-mail inválido.");
    }

    if (userData.senha && userData.senha.length < 6) {
      errors.push("A senha deve ter pelo menos 6 caracteres.");
    }

    return errors;
  };

  const handleSalvar = async () => {
    const errors = validateInputs();
    if (errors.length > 0) {
      Alert.alert("Erros de validação", errors.join("\n"));
      return;
    }

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      "Confirmar Logout",
      "Tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: async () => {
            try {
              // Remove dados do usuário
              await AsyncStorage.removeItem("userData");

              // Zera o cartão virtual no contexto
              await updateUser({
                nome: "NOME DO USUÁRIO",
                numeroCartao: "0000 0000 0000 0000",
                nascimento: "MM/AA",
                saldo: "R$ 0,00",
              });

              router.navigate("/telaInicial");
            } catch (error) {
              Alert.alert("Erro", "Não foi possível fazer logout.");
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imagem}
          source={
            typeof userData.avatar === "string"
              ? { uri: userData.avatar }
              : userData.avatar
          }
        />
        <Text style={styles.title}>Perfil do Usuário</Text>
      </View>

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
            <Text style={styles.value}>Senha </Text>
          ) : (
            <Text style={styles.value}>Senha não definida</Text>
          )}
        </View>

        {editando && (
          <View style={styles.avatarButtons}>
            <TouchableOpacity
              style={styles.avatarButton}
              onPress={() => {
                Alert.alert(
                  "Adicionar Foto",
                  "Escolha a fonte da imagem",
                  [
                    { text: "Galeria", onPress: () => handleAvatarChange(false) },
                    { text: "Câmera", onPress: () => handleAvatarChange(true) },
                    { text: "Cancelar", style: "cancel" },
                  ]
                );
              }}
            >
              <Text style={styles.avatarButtonText}>Adicionar Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.avatarButton, styles.removeButton]}
              onPress={handleAvatarClear}
            >
              <Text style={styles.avatarButtonText}>Remover Foto</Text>
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
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Salvar</Text>
              )}
            </TouchableOpacity>
          )}
        </View>

        {!editando && (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#033b85", paddingTop: 50 },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#fff",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: { fontSize: 24, color: "#fff", fontWeight: "700", letterSpacing: 0.5 },
  section: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 20,
    marginTop: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: "rgba(111, 111, 111, 0.1)",
    height: 55,
  },
  icon: { marginRight: 12, color: "#6c757d" },
  textInput: { flex: 1, fontSize: 16, color: "#495056", fontWeight: "500" },
  value: { flex: 1, fontSize: 16, color: "#212529", fontWeight: "500" },
  avatarButtons: { flexDirection: "row", justifyContent: "space-around", marginBottom: 25 },
  avatarButton: {
    backgroundColor: "#1A8754",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 120,
    alignItems: "center",
    shadowColor: "#007bf9",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  removeButton: { backgroundColor: "#A62929" },
  avatarButtonText: { color: "#fff", fontWeight: "600", fontSize: 14 },
  actions: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
  button: {
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 30,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editButton: { backgroundColor: "#5A7BAA" },
  saveButton: { backgroundColor: "#1E63B1" },
  buttonText: { color: "#fff", fontWeight: "700", fontSize: 14, letterSpacing: 0.5 },
  logoutButton: {
    backgroundColor:"#5A7BAA", /*Botão logout*/
    marginTop: 25,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    color: "black",
  },
});