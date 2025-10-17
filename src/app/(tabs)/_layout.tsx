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
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarItemStyle: {display: "none"}
                }}
            />

            <Tabs.Screen
                name="esqueciSenha"
                options={{
                    tabBarLabel: "",
                    headerShown: false,
                    tabBarItemStyle: {display: "none"},
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
            
                }}
            />
        </Tabs>
    )
}