import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";

export default function TabsLayout(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle:{
                flexDirection: "row"
            }
        }}>

            <Tabs.Screen
                name="criarConta"
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarItemStyle: {display: "none"}
                }}
            />

            <Tabs.Screen
                name="esqueciSenha"
                options={{
                    tabBarItemStyle: { display: "none" },
                    title: ""
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarItemStyle: {display: "none"}
                    
                }}
                
            />

            <Tabs.Screen
                name="menuPrincipal"
                options={{
                    tabBarLabel: "Menu principal",
                    tabBarIcon: ({color, size}) => <MaterialIcons 
                    name="home" color={color} size={size} />
            
                }}
            />

            <Tabs.Screen
                name="codigoSenha"
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarItemStyle: {display: "none"}

                }}
            />
        </Tabs>
    )
}