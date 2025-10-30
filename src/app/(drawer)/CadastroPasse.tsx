import { router } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";


export default function CadastroPasse() {
    
    const menuPrincipal = () => {
        router.navigate("/(tabs)/menuPrincipal")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro do Passe</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Nome Completo: " />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Data de nascimento: " />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Código do passe físico: " />
            </View>

              <TouchableOpacity onPress={menuPrincipal}style={styles.button} >
                  <Text style={styles.textButton}>Criar</Text>
              </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#033b85",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginBottom: 90,
    },
    textInput: {
        flex: 1,
        height: 40,
        width: 200
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
        backgroundColor: '#fff',
    },
    button : {
        backgroundColor: "#677db0",
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 10,
        width: 200,
        alignItems: "center",
        height: 50,
    },
    textButton : {
        flex: 1,
        height: 40,
        marginLeft: 5,
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },

})
