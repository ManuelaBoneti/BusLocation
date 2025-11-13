import {View,Text, StyleSheet, Alert, Image, TextInput} from "react-native";
import Start from "../../components/Back/Star";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function avaliacoes(){
    const [nota, setNota] = useState(0);

    const AvaliacaoEnviada = () =>{
        if(nota === 0){
            Alert.alert(
            "Selecione uma nota antes de enviar a avaliação.");
        
        }else
        Alert.alert(
            "Avaliação enviada com sucesso!"
            );
            setNota(0);
    };
    return(
        <View style={styles.container}>
            
            <Image
                style={styles.tela} source={require('@/assets/telaInicial.png')}
            />
      
            <Text style={styles.title}>Deixe uma avaliação do nosso aplicativo para melhorias!</Text>

            <TextInput style={styles.textInput} placeholder="Escreva aqui..."></TextInput>

            <View style={styles.inner}>
                <Start onChange={setNota}/>
            </View>
            
            <TouchableOpacity style={styles.button}onPress={AvaliacaoEnviada}>
                <Text style={styles.tituloButton}>
                    Avaliar agora
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#033b85",
        gap: 32,
    },
    title:{
        fontSize: 22,
        color: "#ffffff",
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Quicksand_700Bold', 
        marginLeft: 20,
        marginTop: -90
    },
    tela: {
        width: 220,
        height: 280,
        marginTop: -90,
    },
    textInput:{
        backgroundColor: "#ffffff",
        width: 320,
        height: 180,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        fontFamily: 'Quicksand_400Regular', 
        textAlignVertical: 'top',
    },
    inner:{
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        gap: 20,
    },
    button:{
        backgroundColor: "#677db0",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 10,
    },
    tituloButton:{
        fontSize: 20,
        color: "#ffffff",
        fontWeight: 'bold',
        textAlign: 'center',
    },

})