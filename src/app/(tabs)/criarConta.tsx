import { Back } from "@/components/Back";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

export default function criarConta(){
    function menuPrincipal(){
        router.navigate("/(tabs)/menuPrincipal")
    }

    return(
        <View style={styles.container}>

        <Back /> 

            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />
            <View style={styles.section}>
                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='email' size={16} />
                    <TextInput style={styles.textInput} placeholder="Email:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='person' size={16} />
                    <TextInput style={styles.textInput} placeholder="Nome completo:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='person' size={16} />
                    <TextInput style={styles.textInput} placeholder="Nome do usuário:" />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons style={styles.icon} name='password' size={16} />
                    <TextInput style={styles.textInput} placeholder="Senha:" />
                </View>

                <TouchableOpacity onPress={menuPrincipal}style={styles.button} >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                
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
        height: 450,
        marginBlock: -90,
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
        height: 40,
        marginLeft: 5,
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        marginTop: 15,
        color: "black",
        fontWeight: 'bold',
        textDecorationStyle: 'solid',
        textAlign: 'center',
    },
    button : {
        backgroundColor: "#677db0",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 10,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    },
})
