import menuPrincipal from "@/app/(tabs)/menuPrincipal";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Button = () => {

    function IrParaTrajeto() {
        router.navigate("/(drawer)/visualizacaoOnibus");
    }

    return (
        <View>
            <TouchableOpacity onPress={IrParaTrajeto} style={styles.button} >
                <Text style={styles.textButton}>PROCURAR</Text>
                <Ionicons
                    name="search"
                    size={22}
                    color="#fff"
                    style={{ marginLeft: 10, marginTop: 2 }}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button : {
        backgroundColor: "#ccc",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 10,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: 'row',
        
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginLeft: 30
    }
});
