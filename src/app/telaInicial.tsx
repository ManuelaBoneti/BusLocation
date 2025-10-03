import { router } from 'expo-router';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

export default function Index() {

    return(
        <View style={styles.container}>
            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />
            <View style={styles.section}>
                <TextInput placeholder="Email" />
                <TextInput placeholder="Senha" />
                <TouchableOpacity style={styles.button}>
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
        backgroundColor: "#033b85"
    },
    title: {
        color: "#fff",
        fontSize: 30,
    },
    tela : {
        width: 340,
        height: 370,
        marginTop: 80,
    },
    button : {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 40,
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
    },
    section: {
        backgroundColor: '#ffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: 300,
        height: 280,
    },
})