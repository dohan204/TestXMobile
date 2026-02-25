import { contextUser, UserContextType } from "@/contexts/contextUser";
import { RemoveStorage, useReadData, useStoreData } from "@/stores/useStoreData";
import { RootMainAllTabParamList } from "@/types/type.d";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
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

export const UserContextProvider = ({ children }: {children: ReactNode}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootMainAllTabParamList>>();
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<contextUser | null>(null);
    const login = async (user: contextUser, token: string) => {
        await useStoreData('access-token', token);
        setUser(user);
    }
    const logout =  async () => {
        setUser(null);
        await RemoveStorage('access-token');
        navigation.reset({
            index: 0,
            routes:  [
                {
                    name: 'HomeGroup',
                    params: {screen: 'Home'}
                }
            ]
        })
    }
    useEffect(() => {
        const decodedToken = async () => {
            try {
                const token = await useReadData('access-token');
                if (token) {
                    const decoded: contextUser = jwtDecode(token);
                    setUser(decoded)
                }
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false);
            }
        }
        decodedToken();
    }, [])

    const value = useMemo(() => ({user, login, logout}) ,[user])
    return (
        <ContextUser.Provider value={value}>
            {!loading ? children : <Text>Loading...</Text>}
        </ContextUser.Provider>
    )
}