import { router } from 'expo-router';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Index() {
    function cadastro(){
        router.navigate("/telaInicial")
    }

    return(
        <View style={styles.container}>
            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />
            <TouchableOpacity style={styles.button} onPress={cadastro}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#033b85"
    },
    title: {
        color: "#fff",
        fontSize: 30,
    },
    tela : {
        width: 440,
        height: 370,
        marginTop: 200,
    },
    button : {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 30,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    }
})