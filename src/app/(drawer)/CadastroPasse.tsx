import { BackNavigation } from "@/components/BackNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";



export default function CadastroPasse(){




    return(
        <View style={styles.container}>
            <BackNavigation />
            <Text style={styles.title}>Cadastro do Passe</Text>


            <View style={styles.section}>
                <View style={styles.inputContainer}>

                    <MaterialIcons style={styles.icon} name='pin-drop' size={16} />
                    <TextInput style={styles.textInput} placeholder="Nome completo:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='person' size={16} />
                    <TextInput style={styles.textInput} placeholder="data de nascimento:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='search' size={16} />
                    <TextInput style={styles.textInput} placeholder="Código do passe fisíco:" />
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
    icon: {
        margin: 10
    },
    title:{
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 120,
        marginBottom: -250,
        paddingBottom: 50,
        fontFamily: 'Quicksand_400Regular', 
        textAlign: 'center',
  },

    tela : {
        width: 340,
        height: 370,
        marginBottom: -10,
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
        height: 380,
        marginBlock: 250,
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
    textInput : {
        flex: 1,
        height: 60,
        marginLeft: 5,
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        
    },

})

