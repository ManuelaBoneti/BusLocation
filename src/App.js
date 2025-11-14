import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location"
import MapView, {Marker} from "react-native-maps"
import { StyleSheet, View } from "react-native"

export default function App() {

    const [location, setLocation] = useState<LocationObject | null>(null);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if(granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);
    
    return(
        <View>
            {location &&
                <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                >
                </MapView>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: '100%',
    }
})