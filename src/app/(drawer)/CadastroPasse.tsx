import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

export default function CadastroPasse(){

  const [nota, setNota] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  

  const PasseCadastrado = () => {
    if (nota === 0) {
      setAlertMessage("Preencha todos os campos acima para criar o cadastro.");
      setAlertVisible(true);
    } else {
      setAlertMessage("Cadastro concluído!");
      setAlertVisible(true);
      setNota(0);
    }
  };

    return(
        <View style={styles.container}>
            <Image
                style={styles.tela} source={require('@/assets/telaInicial.png')}
            />
         
            <Text style={styles.title}>Cadastro do Passe</Text>

      <Text style={styles.title}>Cadastro do Passe</Text>

      <View style={styles.section}>
        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="pin-drop" size={16} />
          <TextInput style={styles.textInput} placeholder="Nome completo:" placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="person" size={16} />
          <TextInput style={styles.textInput} placeholder="Data de nascimento:" placeholderTextColor="#aaa" />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="search" size={16} />
          <TextInput style={styles.textInput} placeholder="Código do passe físico:" placeholderTextColor="#aaa" />
        </View>

        <TouchableOpacity style={styles.button} onPress={PasseCadastrado}>
          <Text style={styles.tituloButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* alert */}
      <Modal transparent visible={alertVisible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>{alertMessage}</Text>

            <TouchableOpacity
              style={styles.okButton}
              onPress={() => setAlertVisible(false)}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#033b85",
  },
  tela: {
    width: 220,
    height: 280,
    marginTop: -23,
  },
  icon: {
    margin: 10,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginTop: -40,
    paddingBottom: 50,
    textAlign: "center",
    fontFamily: 'Quicksand_700Bold',
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: 390,
    height: 400,
    marginBlock: 250,
    alignItems: "center",
    marginTop: 8
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    height: 60,
    marginLeft: 5,
    fontSize: 18,
    color: "#000",
  },
  button: {
    backgroundColor: "#677db0",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  tituloButton: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: 'Quicksand_700Bold',
    textAlign: "center",
  },
  // alert
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: 300,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  alertText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  okButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  okText: {
    fontSize: 16,
    color: "rgb(3, 83, 223)",
    fontWeight: "600",
    fontFamily: 'Quicksand_700Bold',
  },
});
  }

