import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#677db0"
                },
                drawerLabelStyle: {
                    color: "#fff"
                },
                headerStyle: {
                    backgroundColor: "#677db0"
                },
                headerTintColor: "#fff"
                
                
            }}>
            <Drawer.Screen
                name="index"
                options={{
                    headerShown: false,
                    drawerItemStyle: { display: "none" }
                }}
            />
           
            <Drawer.Screen
                name="add-Task/index"
                options={{
                    drawerItemStyle: { display: "none" },
                    title: "",
                }}
            />

        </Drawer>
    );
}
