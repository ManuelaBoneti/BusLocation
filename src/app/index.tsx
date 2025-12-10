import { Quicksand_400Regular, Quicksand_700Bold, useFonts } from '@expo-google-fonts/quicksand';
import { router } from 'expo-router';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserProvider } from '../components/Context/UserContext';

export default function Index() {
    // 1. Carregamento das Fontes
    const [fontsLoaded] = useFonts({
        Quicksand_400Regular,
        Quicksand_700Bold
    });

    // 2. Função de Navegação
    function handleCadastro() {
        router.push("/telaInicial"); 
    }

    // 3. Proteção: Enquanto a fonte não carrega, mostramos um loading ou nada.
    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" style={{flex: 1, justifyContent:'center'}}/>;
    }

    // 4. Renderização (O return deve estar AQUI, fora da função handleCadastro)
    return (
        <UserProvider>
            <View style={styles.container}>
                <Image 
                    style={styles.tela} 
                    source={require('@/assets/telaInicial.png')} 
                    resizeMode="contain"
                />

                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </UserProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#033b85"
    },
    tela: {
        width: 440,
        height: 370,
        marginTop: 100, 
    },
    button: {
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
    textButton: {
        fontSize: 18,
        fontFamily: 'Quicksand_700Bold',
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    }
});