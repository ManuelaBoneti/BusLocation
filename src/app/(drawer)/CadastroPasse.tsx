
import { BackNavigation } from "@/components/BackNavigation";
import { Button } from "@/components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";



export default function CadastroPasse(){

    return(
        <View style={styles.container}>
            <Image
                style={styles.tela} source={require('@/assets/telaInicial.png')}
            />
         
            <Text style={styles.title}>Cadastro do Passe</Text>


      <View style={styles.section}>
        <View style={styles.inputContainer}>
          <MaterialIcons style={styles.icon} name="pin-drop" size={16} />
          <TextInput style={styles.textInput} placeholder="Nome completo:" placeholderTextColor="#aaa" />
        </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='person' size={16} />
                    <TextInput style={styles.textInput} placeholder="data de nascimento:" />
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
        alignItems: 'center',
        backgroundColor: "#033b85",
    },
    icon: {
        margin: 10
    },
    title: {
        fontSize: 35,
        color: "#fff",
        marginTop: 120,
        marginBottom: -250,
        paddingBottom: 50,
        fontFamily: 'Quicksand_700Bold', 
        textAlign: 'center',
  },

    tela : {
        width: 340,
        height: 370,
        marginBottom: -240,
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
        height: 400,
        marginBlock: 250,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#fff'
    },
    textInput: {
        flex: 1,
        height: 60,
        marginLeft: 5,
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
})

