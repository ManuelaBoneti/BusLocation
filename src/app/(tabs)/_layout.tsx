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
                    tabBarLabel: "Criar conta",
                    tabBarActiveTintColor: "#black",
                    tabBarIcon: ({color, size}) => <MaterialIcons
                    name="person" color={color} size={size}/>,
                    tabBarItemStyle: {flex: 1}
                }}
            />

            <Tabs.Screen
                name="esqueciSenha"
                options={{
                    tabBarLabel: "Esqueci a senha",
                    tabBarActiveTintColor: "#black",
                    tabBarIcon: ({color, size}) => <MaterialIcons
                    name="password" color={color} size={size}/>,
                    tabBarItemStyle: {flex: 1}
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
        </Tabs>
    )
}