import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, StyleSheet, TouchableOpacity } from "react-native"

export const BackNavigation = () => {
    return(
        <View style={styles.containerIcon}>
            <TouchableOpacity onPress={() => router.navigate("/(tabs)/menuPrincipal")}>
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