import ForgotPasswordScreen from "@/components/screens/Auth/ForgotPasswordScreen";
import LoginScreen from "@/components/screens/Auth/LoginScreen";
import LogOutScreen from "@/components/screens/Auth/LogOutScreen";
import RegisterScreen from "@/components/screens/Auth/RegisterScreen";
import type { RootStackRouteAuthParamList } from "@/types/type.d";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const AuthStack = createNativeStackNavigator<RootStackRouteAuthParamList>();

export function Auth() {
    return (
        <AuthStack.Navigator screenOptions={{}} initialRouteName="Register">
            <AuthStack.Screen name='Login' component={LoginScreen} options={{
                headerShown: false,
                headerBackTitle: 'Đăng nhập'
            }} />
            <AuthStack.Screen name='Logout' component={LogOutScreen} />
            <AuthStack.Screen name='Forgot' component={ForgotPasswordScreen} options={{
                headerTitle: 'Quên mật khẩu'
            }} />
            <AuthStack.Screen name='Register' component={RegisterScreen} />
        </AuthStack.Navigator>
    )
}
