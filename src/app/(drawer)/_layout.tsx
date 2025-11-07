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
                    drawerIcon: () => (
                        <Ionicons name="bus-outline" 
                        size={22} />
                      ),
                   
                }}
            />
           
            <Drawer.Screen
                name="CadastroPasse"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Cadastro do Passe Virtual",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: () => (
                        <Ionicons name="card-outline"
                        size={22}  />
                      ),
                }}
            />

            <Drawer.Screen
                name="trajeto"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Trajeto",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: () => (
                        <Ionicons name="location-outline" 
                        size={22}/>
                    ),
                }}
            />

        </Drawer>
    );
}
