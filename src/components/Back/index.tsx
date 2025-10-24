import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const Back = () => {
    return(
        <View style={styles.containerIcon}>
            <TouchableOpacity onPress={() => router.navigate("/telaInicial")}>
                <Ionicons
                    name="arrow-back"
                    size={30}
                    color="#fff"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerIcon: {
        position: 'absolute', 
        top: 0, 
        left: 20
    },
    icon: {
        marginTop: 60
    },

});