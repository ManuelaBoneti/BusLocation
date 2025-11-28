import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface UserData {
    nome: string;
    numeroCartao: string;
    validade: string;
    codigoCvc: string;
    saldo: string;
}

interface UserContextData {
    user: UserData;
    updateUser: (data: Partial<UserData>) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export function UserProvider({ children }: { children: ReactNode }) {

    const defaultUser: UserData = {
        nome: "NOME DO USUÁRIO",
        numeroCartao: "0000 0000 0000 0000",
        validade: "MM/AA",
        codigoCvc: "000",
        saldo: "R$ 0,00"
    };

    const [user, setUser] = useState<UserData>(defaultUser);

    function updateUser(newData: Partial<UserData>) {
        setUser((current) => ({ ...current, ...newData }));
    }

    function logout() {
        setUser(defaultUser);
      }

    return (
        <UserContext.Provider value={{ user, updateUser, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// Hook
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
}