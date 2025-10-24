import { Back } from "@/components/Back";
import { StyleSheet, Text, View } from "react-native";

export default function CadastroPasse(){
    return(
        <View style={styles.container}>
            <Back />
            <View style={styles.content}>
                <Text style={styles.title}>Página</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#033b85"
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        color: "#fff",
        fontSize: 30,
    },
})