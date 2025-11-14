import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable, StyleSheet, Image } from "react-native";
 
type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
};
 
export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Olá! aqui é o suporte do BusLocation. Em que posso ajudar??", sender: "bot" },
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
    setInput("");
 
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Infelizmente, ainda não sou capaz de responder suas perguntas. Mas qualquer dúvida entre em contato com o seguinte número: (14) 3283-9570 !",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 800);
  };
 
  return (
    <View style={styles.container}>
     <Image
        style={styles.tela}
        source={require('@/assets/telaInicial.png')}
    />
     
    <View >
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
//   header:{
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: "#fff",
//     padding: 10,
//     borderTopColor: '#000',
//     borderTopWidth: 1,
//   },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 165,
    gap: 20,
  },
 
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "80%",
  },
 
  userMsg: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
 
  botMsg: {
    backgroundColor: "#cfe8ff",
    alignSelf: "flex-start",
    borderRadius: 10,
  },
 
  messageText: { color: "#000" },
 
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