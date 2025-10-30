import menuPrincipal from "@/app/(tabs)/menuPrincipal";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Button = () => {
    return (
        <View>
            <TouchableOpacity onPress={menuPrincipal} style={styles.button} >
                <Text style={styles.textButton}>seguir</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button : {
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 36,
        marginTop: 10,
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
        textTransform: 'uppercase'
    }
});
