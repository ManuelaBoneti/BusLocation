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
                    name="list" color={color} size={size}/>,
                    tabBarItemStyle: {flex: 1}
                }}
            />
            <Tabs.Screen
                name="telaInicial"
                options={{
                    tabBarLabel: "Login",
                    tabBarActiveTintColor: "#black",
                    tabBarIcon: ({color, size}) => <MaterialIcons
                    name="home" color={color} size={size}/>,
                    tabBarItemStyle: {flex: 1}
                }}
            />
        </Tabs>
    )
}