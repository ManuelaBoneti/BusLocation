import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
 
export default function Produtos(){
    return(
      <View style={styles.container}>
         <Text>Pagina gggggg</Text>
      </View>
 
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
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