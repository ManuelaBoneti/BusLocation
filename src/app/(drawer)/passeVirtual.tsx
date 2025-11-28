
import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { DynamicCarousel } from "@/components/DynamicCarousel";
import { VirtualCardProps } from "@/components/VirtualCard"; 
import { useUser } from "../context/UserContext";

export default function TelaInicial() {
    const { user, logout } = useUser(); 

    const cartoesDoUsuario: VirtualCardProps[] = [
        {
            // FRENTE
            holderName: user.nome,
            cardNumber: user.numeroCartao,
            expiryDate: user.validade,
            balance: user.saldo,
            type: "frente",
        },
        {
            // VERSO (Usa os mesmos dados do user, mas com tipo 'verso')
            holderName: user.nome, 
            cardNumber: user.numeroCartao,
            expiryDate: user.validade,
            type: "verso"
        }
    ];

    return (
        <View style={styles.container}>
             <Image
                style={styles.telaBg}
                source={require("../../assets/telaInicial.png")} 
            />
            
            <Text style={styles.title}>Meus Passes</Text>

            <DynamicCarousel data={cartoesDoUsuario} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#033b85",
        paddingTop: 50,
    },
    telaBg: {
        width: 220,
        height: 280,
        marginTop: -50
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontFamily: 'Quicksand_700Bold',
        marginTop: -20,
    }
});