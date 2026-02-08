import { contextUser, UserContextType } from "@/contexts/contextUser";
import { useReadData } from "@/stores/useStoreData";
import { jwtDecode } from 'jwt-decode';
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { Text } from "react-native";
export const ContextUser = createContext<UserContextType | undefined>(undefined);

export const useContextUser = () => {
    const context = useContext(ContextUser);
    if (context === undefined) {
        throw new Error("UseContextUser phải được sử dụng trong contextProvider")
    }
    return context;
}

type ContextProviderProps = {
    children: ReactNode;
}

export const UserContextProvider = ({ children }: ContextProviderProps) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<contextUser | null>(null);
    const login = (user: contextUser) => setUser(user);
    const logout = () => setUser(null); 
    useEffect(() => {
        const decodedToken = async () => {
            try {
                const token = await useReadData('my-info');
                if (token) {
                    const decoded: contextUser = jwtDecode(token);
                    setUser(decoded)
                }
                setLoading(false);
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        decodedToken();
    }, [])

    const value = useMemo(() => ({user, login, logout}) ,[loading, user])
    return (
        <ContextUser.Provider value={value}>
            {!loading ? children : <Text>Loading...</Text>}
        </ContextUser.Provider>
    )
}