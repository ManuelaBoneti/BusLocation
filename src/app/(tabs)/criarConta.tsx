import { Text, View, StyleSheet, Image } from "react-native";

export default function criarConta(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Criar conta</Text>
            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />
            <View style={styles.section}>

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
        marginTop: 80,
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
        height: 360,
        marginBlock: -70,
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
    icon : {
        marginLeft: 5,
    },
    textInput : {
        flex: 1,
        height: 40,
        marginLeft: 5,
        fontSize: 16,
    },
    title: {
        fontSize: 12,
        marginTop: 40,
        color: "#fff",
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textAlign: 'center',
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
})
