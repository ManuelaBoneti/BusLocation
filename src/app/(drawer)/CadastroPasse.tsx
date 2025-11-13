
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

                    <MaterialIcons style={styles.icon} name='pin-drop' size={16} />
                    <TextInput style={styles.textInput} placeholder="Nome completo:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='person' size={16} />
                    <TextInput style={styles.textInput} placeholder="Data de nascimento:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='search' size={16} />
                    <TextInput style={styles.textInput} placeholder="Código do passe fisíco:" />
                </View>
                   <Button />

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
        width: 220,
        height: 280,
        marginTop: -4,
    },
    title: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold",
        fontFamily: 'Quicksand_700Bold',
        marginBottom: 30, 
        marginTop: -50,
    },
    icon: {
        margin: 10,
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
        width: 390,
        height: 400,
        alignItems: 'center',
        marginBlock: 250,
        marginTop: 10,
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
        fontSize: 16,
        color: "white",
    }
})

