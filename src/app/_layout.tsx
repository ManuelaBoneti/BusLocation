import { Stack } from "expo-router";
import { UserProvider } from "../components/Context/UserContext";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </UserProvider>
  );
}
