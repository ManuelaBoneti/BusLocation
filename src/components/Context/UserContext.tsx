import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface UserData {
  nome: string;
  numeroCartao: string;
  nascimento: string;
  codigoCvc: string;
  saldo: string;
  cadastrado?: boolean;
}

interface UserContextData {
  user: UserData;
  updateUser: (data: Partial<UserData>) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  const defaultUser: UserData = {
    nome: "NOME DO USUÁRIO",
    numeroCartao: "0000 0000 0000 0000",
    nascimento: "MM/AA",
    codigoCvc: "000",
    saldo: "R$ 0,00",
    cadastrado: false,
  };

  const [user, setUser] = useState<UserData>(defaultUser);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedUser = await AsyncStorage.getItem("@user_data");
        if (storedUser) setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function updateUser(newData: Partial<UserData>) {
    const updatedUser: UserData = { ...user, ...newData, cadastrado: true };
    setUser(updatedUser);
    await AsyncStorage.setItem("@user_data", JSON.stringify(updatedUser));
  }

  async function logout() {
    await AsyncStorage.removeItem("@user_data");
    setUser({ ...defaultUser });
  }

  return (
    <UserContext.Provider value={{ user, updateUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
