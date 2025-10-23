import { StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { FaMapLocationDot } from "react-icons/fa6";



export default function menuPrincipal(){
    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>MENU</Text>
            </View>

            <View style={styles.caixaIcon}>
            {/* <MaterialCommunityIcons style={styles.icon} name='' size={16} /> */}
            <Text style={styles.subtitulo}>Trajeto</Text>
            </View>

            <View style={styles.caixaIcon}>
            <FontAwesome6 name="map-location-dot" size={24}/>
            {/* <FontAwesomeIcon  style={styles.icon} icon={faMapPin} size={16} /> */}
            <Text style={styles.subtitulo}>Visualização Onibus</Text>
            </View>

            <View style={styles.caixaIcon}>
            {/* <MaterialIcons style={styles.icon} name='location' size={16} /> */}
            <Text style={styles.subtitulo}>Avaliações</Text>
            </View>

            <View style={styles.caixaIcon}>
            {/* <MaterialIcons style={styles.icon} name='location' size={16} /> */}
            <Text style={styles.subtitulo}>Chat</Text>
            </View>

            <View style={styles.caixaIcon}>
            {/* <MaterialIcons style={styles.icon} name='location' size={16} /> */}
            <Text style={styles.subtitulo}>Passe virtual</Text>
            </View>

            <View style={styles.caixaIcon}>
            {/* <MaterialIcons style={styles.icon} name='location' size={16} /> */}
            <Text style={styles.subtitulo}>Cadastro do passe</Text>
            </View>

            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#033b85"
    },
    title:{
        fontSize: 30,
        color: "#fff",
        fontWeight: 'bold',

    },
    subtitulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',

    },
    caixaIcon:{
        flex: 1,
        marginLeft: 40,
        marginTop: 20,
       
    },
    icon:{
        marginBottom: 10,
    }


})
