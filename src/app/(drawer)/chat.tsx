
import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text:
        "Olá! aqui é o suporte do BusLocation. Em que posso ajudar?\n\n" +
        "Digite:\n1 - Problemas com login\n2 - Problemas com o cartão do passe\n3 - Problemas com o trajeto\n4 - Problemas na visualização dos ônibus\n5 - Problemas no cadastro do passe",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    const userText = input.trim();
    setInput("");

    setTimeout(() => {
      let botReply = "";


      if (userText === "1") {
        botReply =
          "Para problemas com login: verifique se seu e-mail e senha estão corretos ou tente redefinir sua senha.";
      } else if (userText === "2") {
        botReply =
          "Para problemas com o cartão do passe: verifique seu saldo, validade ou entre em contato com o guichê de suporte.";
      } else if (userText === "3") {
        botReply =
          "Para problemas com trajeto: verifique se o app tem permissão de GPS e se a conexão com a internet está estável ou informe qual linha está com problema e iremos analisar para você.";
      } 
      else if (userText === "4") {
        botReply =
          "Para problemas com visualização dos ônibus: verifique se sua localização está ativada, se o app tem permissão de GPS e se a conexão com a internet está estável.";
      }else if (userText === "5") {
      botReply =
        "Para problemas com o cadastro do passe: confirme se seus dados estão corretos (data de validade, nome e data de nascimento). Se o erro persistir, procure o guichê para validar o cadastro.";
    } else {
        botReply =
          "Infelizmente, ainda não sou capaz de responder suas perguntas. Mas qualquer dúvida entre em contato com o seguinte número: (14) 3283-9570";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.tela} source={require('@/assets/telaInicial.png')} />

      <View>
        <Text style={styles.headerText}>CHAT</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === "user" ? styles.userMsg : styles.botMsg,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 10 }}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={input}
          onChangeText={setInput}
        />
        <Pressable style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#033b85",
  },
  tela: {
    width: 220,
    height: 200,
    marginTop: 20,
    marginBottom: -30,
    marginLeft: 95,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: 'Quicksand_700Bold',
    marginLeft: 165,
    gap: 20,
  },
  message: {
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
    color: "#fff",
  },
  userMsg: {
    backgroundColor: "#677db0",
    alignSelf: "flex-end",
    borderRadius: 10,
  },
  botMsg: {
    backgroundColor: "#5A7BAA",
    alignSelf: "flex-start",
    borderRadius: 20,
  },
  messageText: { color: "#fff" },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    paddingHorizontal: 15,
    marginLeft: 10,
    backgroundColor: "#677db0",
    borderRadius: 10,
    justifyContent: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
