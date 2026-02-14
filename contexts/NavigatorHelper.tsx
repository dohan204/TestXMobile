import { RootMainAllTabParamList, RootMergeAuthHomeParamList } from "@/types/type.d";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function navigatorDeepHome
    <TRoot extends keyof RootMergeAuthHomeParamList, 
    TParent extends keyof RootMainAllTabParamList,
    TChild extends string,
    TParams = undefined>
    (root: TRoot, parent: TParent, child: TChild, params?: TParams){
        const navigation = useNavigation<NativeStackNavigationProp<any>>();
        navigation.navigate(root as never, {
            screen: parent,
            params: {
                screen: child,
                params
            }
        } as never)
    }