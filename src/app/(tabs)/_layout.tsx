import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

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
                    href: null,      
                    tabBarStyle: { display: "none" },
                  }}
            />

            <Tabs.Screen
             name="esqueciSenha"
             options={{
               href: null,      
               tabBarStyle: { display: "none" },
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
                name="novaSenha"
                options={{
                    href: null,      
                    tabBarStyle: { display: "none" },
                  }}
            />

            <Tabs.Screen
                name="perfil"
                options={{
                    tabBarLabel: "Meu Perfil",
                    tabBarIcon: ({color, size}) => <MaterialIcons 
                    name="person" color={color} size={size} />
            
                }}
            />
            
        </Tabs>
    )
}