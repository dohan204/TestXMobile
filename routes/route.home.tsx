
import CustomDrawerContent from "@/components/custom/DividerSeparator";
import ExamSubjectDetailsScreen from "@/components/screens/exams/ExamSubjectDetailsScreen";
import ExamListScreen from "@/components/screens/main/ExamListScreen";
import HomeScreen from "@/components/screens/main/HomeScreen";
import OverallRatingScreen from "@/components/screens/main/OverallRatingScreen";
import ChangeInfoScreen from "@/components/screens/user/ChangeInfoScreen";
import ProfileScreen from "@/components/screens/user/ProfileScreen";
import RatingMeScreen from "@/components/screens/user/RatingMeScreen";
import { useContextUser } from "@/hooks/useContextUser";
import { RootExamTabWithChildParamList, RootHomeParamList, RootHomeTabParamList, RootStackParamList } from "@/types/type.d";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";

type IoniconsName = keyof typeof Ionicons.glyphMap
const Drawer = createDrawerNavigator<RootHomeParamList>();

// home Drawer
export const HomeTabs = () => {
    const { user } = useContextUser();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name='MainTab'
                component={HomeDrawer}
                options={{
                    title: 'Trang chủ',
                    headerRight: () => (
                        user != undefined ?
                            (
                                <Ionicons name="person-circle-outline" size={24} />
                            ) :
                            (
                                <Pressable
                                    style={{ paddingRight: 16 }}
                                    onPress={() => navigation.navigate('Auth', {
                                        screen: 'Login'
                                    })}>
                                    <Text>Login</Text>
                                </Pressable>
                            )
                    )
                    // ,headerShown: false
                }}
            />
            <Drawer.Screen name='InfoMe' component={ProfileScreen} options={{ title: 'Thông tin Chi tiết' }} />
            <Drawer.Screen name='RatingMe' component={RatingMeScreen} options={{ title: 'Xếp hạng cá nhân' }} />
            <Drawer.Screen name='Update' component={ChangeInfoScreen} options={{ title: 'Thay đổi thông tin' }} />
        </Drawer.Navigator>
    )
}

// exam tab
const StackExam = createNativeStackNavigator<RootExamTabWithChildParamList>();
export const TabParent = () => {
    return (
        <StackExam.Navigator screenOptions={{headerShown: false}}>
            <StackExam.Screen name='Exam' component={ExamListScreen} />
            <StackExam.Screen name='ExamSubjectDetails' component={ExamSubjectDetailsScreen} />
        </StackExam.Navigator>
    )
}

// tab bottom
const Tab = createBottomTabNavigator<RootHomeTabParamList>();
export const HomeDrawer = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                let iconName: IoniconsName; 
                if(route.name === 'HomeGroup') {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === 'ExamParent' ) {
                    iconName = focused ? 'reader' : 'reader-outline'
                } else {
                    iconName = focused ? 'book' : 'book-outline'
                }
                return <Ionicons name={iconName} color={color} size={size} />
            }
        })}>
            <Tab.Screen name='HomeGroup' component={HomeScreen} />
            <Tab.Screen name='ExamParent' component={TabParent} />
            <Tab.Screen name='Rating' component={OverallRatingScreen} />
        </Tab.Navigator>
    )
}