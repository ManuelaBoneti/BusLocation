import { router } from "expo-router";
import {View,Text,StyleSheet, Image,TouchableOpacity} from "react-native";


export default function codigoSenha(){
    return(
        <View style={styles.container}>
            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />
            <Text style={styles.tituloPrincipal}>ESQUECI SENHA</Text>
            <View style={styles.inner}>
                <Text style={styles.title}>CÓDIGO ENVIADO!</Text>
                <Text style={styles.text}>
                    Clique no link enviado em seu e-mail e crie uma nova senha
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/telaInicial')}>
                    <Text style={styles.buttonText}>
                      Entendi
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#677db0",
        gap: 32,
    },
    tela:{
        width: 340,
        height: 370,
        marginTop: -100,
    },
    tituloPrincipal:{
        fontSize: 20,
        color: "#ffffff",
        fontFamily: 'Quicksand_700Bold', 
        textAlign: 'center',
        marginTop: -150,
        
    },
    inner:{
        backgroundColor: "#e1e6eb",
        padding: 20,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        gap: 20,
    },
    title:{
        fontSize: 15,
        color: "#d33333",
        fontFamily: 'Quicksand_700Bold', 
        textAlign: 'center',
    },
    text:{
        fontSize: 12,
        color: "#000",
        textAlign: 'center',
        fontFamily: 'Quicksand_500Medium', 
    },
    button:{
        backgroundColor: "#d33333",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 10,
    },
    buttonText:{
        fontSize: 12,
        color: "white",
        fontFamily: 'Quicksand_500Medium', 
        textAlign: 'center',
    }

})