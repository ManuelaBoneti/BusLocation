import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                headerTitle: "",
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: "#677db0",
                    width: 300,
                    paddingTop: 40,
                },
                drawerLabelStyle: {
                    color: "#fff",
                },
                headerStyle: {
                    backgroundColor: "#677db0",
                    width: 10
                },
                headerTintColor: "#fff",
               
                
            }}>

            <Drawer.Screen
                name="visualizacaoOnibus"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Ônibus 3d",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="bus-outline" size={size} color={color} />
                      ),
                   
                }}
            />
           
            <Drawer.Screen
                name="cadastroPasse"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Cadastro do Passe Virtual",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="card-outline" size={size} color={color} />
                      ),
                }}
            />

        </Drawer>
    );
}
