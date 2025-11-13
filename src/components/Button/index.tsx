import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Button = () => {

    function IrParaTrajeto() {
        router.navigate("/(drawer)/visualizacaoOnibus");
    }

    return (
        <View>
            <Pressable 
                onPress={IrParaTrajeto} 
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]} >
                <Text style={styles.textButton}>Criar</Text>
                <Ionicons
                    name="search"
                    size={22}
                    color="#fff"
                    style={{ marginLeft: 10, marginTop: 2 }}
                />
            </Pressable>
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
    buttonPressed: {
        backgroundColor: "gray",
        transform: [{ scale: 0.97 }], 
    },
    textButton : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 1,
        textTransform: 'uppercase',
        marginLeft: 30
    },
});
