import type { RootMergeAuthHomeParamList } from "@/types/type.d";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth } from "./route.auth";
import { HomeTabs } from "./route.home";
export const AppStack = createNativeStackNavigator<RootMergeAuthHomeParamList>();

export const MainApp = () => {
    return (
        <AppStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
            <AppStack.Screen name="Auth" component={Auth} />
            <AppStack.Screen name="Home" component={HomeTabs} />
        </AppStack.Navigator>
    )
}