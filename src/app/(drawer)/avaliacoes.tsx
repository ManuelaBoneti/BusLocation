import {View,Text, StyleSheet, Alert} from "react-native";
import Start from "../../components/Back/Star";
import { TouchableOpacity } from "react-native";
import { BackNavigation } from "@/components/BackNavigation";
import { useState } from "react";

export default function avaliacoes(){
    const [nota, setNota] = useState(0);

    const AvaliacaoEnviada = () =>{
        if(nota === 0){
            Alert.alert(
            "Selecione uma nota antes de enviar a avaliação."
            );
        }else
        Alert.alert(
            "Avaliação enviada com sucesso!"

        );
        
        setNota(0);
    }
    return(
        <View style={styles.container}>
            <BackNavigation/>
            <Text style={styles.tituloPrincipal}>Avaliações</Text>
            <View style={styles.inner}>
                <Start
                onChange={setNota}
                />
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
    tituloPrincipal:{
        fontSize: 40,
        color: "#ffffff",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -10,  
    },
    inner:{
        backgroundColor: "#e1e6eb",
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
         boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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