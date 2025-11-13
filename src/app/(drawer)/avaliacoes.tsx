import {View,Text, StyleSheet, Alert, Image, Modal} from "react-native";
import { TouchableOpacity } from "react-native";
import { BackNavigation } from "@/components/BackNavigation";
import { useState } from "react";
import StarRating from "@/components/Back/Star";


export default function avaliacoes(){

  const [nota, setNota] = useState(0);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  

  const AvaliacaoEnviada = () => {
    if (nota === 0) {
      setAlertMessage("Preencha a avaliação antes de enviar.");
      setAlertVisible(true);
    } else {
      setAlertMessage("Avaliação enviada com sucesso!");
      setAlertVisible(true);
      setNota(0);
    }
  };
    return(
        <View style={styles.container}>
            <BackNavigation/>
            <Text style={styles.tituloPrincipal}>Avaliações</Text>
            <View style={styles.inner}>
                <StarRating
                value={nota}
                onChange={setNota}
                
                />
            </View>
            <TouchableOpacity style={styles.button}onPress={AvaliacaoEnviada}>
                <Text style={styles.tituloButton}>
                    Avaliar agora
                </Text>
            </TouchableOpacity>
        {/* alert */}
              <Modal transparent visible={alertVisible} animationType="fade">
                <View style={styles.overlay}>
                  <View style={styles.alertBox}>
                    <Text style={styles.alertText}>{alertMessage}</Text>
        
                    <TouchableOpacity
                      style={styles.okButton}
                      onPress={() => setAlertVisible(false)}
                    >
                      <Text style={styles.okText}>OK</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            


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
    // alert
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  alertBox: {
    width: 300,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  alertText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  okButton: {
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  okText: {
    fontSize: 16,
    color: "rgb(3, 83, 223)",
    fontWeight: "600",
  },

})