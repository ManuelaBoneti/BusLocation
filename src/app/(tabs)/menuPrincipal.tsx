import { StyleSheet, Text, View } from "react-native";

export default function EsqueciSenha(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Menu principal</Text>
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
        fontSize: 12,
        marginTop: ,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
    },
   
   
   
})
