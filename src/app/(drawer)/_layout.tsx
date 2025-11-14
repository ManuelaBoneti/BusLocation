import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <Drawer
            screenOptions={{
                title:'',
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
                    headerLeft: () => {
                        return <Ionicons
                                    name="arrow-back"
                                    size={30}
                                    color="#fff"
                                    style={{ marginLeft: 20 }}
                                    onPress={() => router.navigate("/menuPrincipal")}
                                />
                    }
                   
                }}
            />
            <Drawer.Screen
                name="avaliacoes"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Avaliar Ônibus",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: () => (
                        <Ionicons name="star-outline" 
                        size={22} />
                      ),
                      headerLeft: () => {
                        return <Ionicons
                                    name="arrow-back"
                                    size={30}
                                    color="#fff"
                                    style={{ marginLeft: 20 }}
                                    onPress={() => router.navigate("/menuPrincipal")}
                                />
                    }
                   
                }}
            />
            <Drawer.Screen
                name="passeVirtual"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Passe Virtual",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: () => (
                        <Ionicons name="card-outline" 
                        size={22} />
                      ),
                      headerLeft: () => {
                        return <Ionicons
                                    name="arrow-back"
                                    size={30}
                                    color="#fff"
                                    style={{ marginLeft: 20 }}
                                    onPress={() => router.navigate("/menuPrincipal")}
                                />
                    }
                   
                }}
            />

<Drawer.Screen
                name="chat"
                options={{
                    drawerActiveTintColor: "#fff",
                    drawerLabel: "Chat de Conversa",
                    drawerLabelStyle: {
                        color: "#fff"
                    },
                    drawerIcon: () => (
                        <Ionicons name="card-outline" 
                        size={22} />
                      ),
                      headerLeft: () => {
                        return <Ionicons
                                    name="arrow-back"
                                    size={30}
                                    color="#fff"
                                    style={{ marginLeft: 20 }}
                                    onPress={() => router.navigate("/menuPrincipal")}
                                />
                    }
                   
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
                      headerLeft: () => {
                        return <Ionicons
                                    name="arrow-back"
                                    size={30}
                                    color="#fff"
                                    style={{ marginLeft: 20 }}
                                    onPress={() => router.navigate("/menuPrincipal")}
                                />
                    }
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
                    headerLeft: () => {
                        return <Ionicons
                                    name="arrow-back"
                                    size={30}
                                    color="#fff"
                                    style={{ marginLeft: 20 }}
                                    onPress={() => router.navigate("/menuPrincipal")}
                                />
                    }
                }}
            />

        </Drawer>
    );
}
