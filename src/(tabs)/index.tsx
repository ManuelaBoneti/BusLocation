import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { router } from "expo-router";
 
export default function Produtos(){
    return(
      <View style={styles.container}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <TouchableOpacity style={styles.button} onPress={() => router.back()}
            >
            <Text style={styles.textButton}>Voltar</Text>
          </TouchableOpacity>
 
          <TouchableOpacity onPress={() => router.navigate({pathname: '/(tabs)/[id]', params: {id: '57'}})}>
            <Text>Abrir Produto</Text>
          </TouchableOpacity>
      </View>
 
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        // paddingTop: 60
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000'
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 10,
        paddingHorizontal: 32,
        paddingVertical: 10
    }
});