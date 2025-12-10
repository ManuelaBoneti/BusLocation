import { DynamicCarousel } from "@/components/DynamicCarousel";
import { VirtualCardProps } from "@/components/VirtualCard";
import React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { useUser } from "../../components/Context/UserContext";

export default function TelaInicial() {
  const { user, loading } = useUser();

  if (loading) {
    return <Text>Carregando...</Text>;
  }

  const passeVirtual = user.cadastrado
    ? user
    : {
        nome: "NOME DO USUÁRIO",
        numeroCartao: "0000 0000 0000 0000",
        nascimento: "MM/AA",
        saldo: "R$ 0,00",
      };

  const cartoesDoUsuario: VirtualCardProps[] = [
    {
      holderName: passeVirtual.nome,
      cardNumber: passeVirtual.numeroCartao,
      expiryDate: passeVirtual.nascimento,
      balance: passeVirtual.saldo,
      type: "frente",
    },
    {
      holderName: passeVirtual.nome,
      cardNumber: passeVirtual.numeroCartao,
      expiryDate: passeVirtual.nascimento,
      type: "verso",
    }
  ];

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.main}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.telaBg} source={require("../../assets/telaInicial.png")} />
          <Text style={styles.title}>Meus Passes</Text>
          <View style={styles.carouselWrapper}>
            <DynamicCarousel data={cartoesDoUsuario} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "#033b85" },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 60,
  },

  telaBg: {
    width: 220,
    height: 280,
    marginBottom: -10,
    opacity: 0.8,
    marginTop: -70,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginTop: -10,
  },

  carouselWrapper: {
    height: 260,
    width: "100%",
    alignItems: "center",
  },
});
