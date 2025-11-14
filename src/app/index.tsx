import { Redirect, router } from 'expo-router';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import {Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
// import { AppLoading } from 'expo';

export default function Index() {
    

    
    const [fontsLoaded] = useFonts({
        Quicksand_400Regular, Quicksand_700Bold    
      });
    
    //   if (!fontsLoaded) {
    //     return <AppLoading />;
    //   }
      
    function Cadastro(){
        router.navigate("/telaInicial")


    return (
        <View style={styles.container}>
            <Image style={styles.tela}source={require('@/assets/telaInicial.png')} />

            <TouchableOpacity style={styles.button} onPress={Cadastro}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

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
        fontFamily: 'Quicksand_700Bold', 
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
        fontFamily: 'Quicksand_700Bold',
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    }
})