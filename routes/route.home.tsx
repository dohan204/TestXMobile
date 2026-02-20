import CommunityScreen from "@/components/screens/childScreen/CommunityScreen";
import ExamResultScreen from "@/components/screens/childScreen/ExamResultScreen";
import ExamStartingScreen from "@/components/screens/childScreen/ExamStartingScreen";
import ExamSubjectDetailsScreen from "@/components/screens/childScreen/ExamSubjectDetailsScreen";
import NotificationsScreen from "@/components/screens/childScreen/NotificationsScreen";
import StudyHistoryScreen from "@/components/screens/childScreen/StudyHistoryScreen";
import TestOfTimeScreen from "@/components/screens/childScreen/TestOfTimeScreen";
import ExamListScreen from "@/components/screens/main/ExamListScreen";
import HomeScreen from "@/components/screens/main/HomeScreen";
import OverallRatingScreen from "@/components/screens/main/OverallRatingScreen";
import ProfileScreen from "@/components/screens/main/ProfileScreen";
import Header from "@/hooks/helper/headerComponentHelper";
import { RootExamTabWithChildParamList, RootHomeTabWithChildParamList, RootMainAllTabParamList } from "@/types/type.d";
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

type IoniconsName = keyof typeof Ionicons.glyphMap


// home tab 
const HomeStack = createNativeStackNavigator<RootHomeTabWithChildParamList>();
export const StackHomeTab = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Notifications" component={NotificationsScreen} options={({ navigation }) => ({
                headerShown: true,
                header: () => <Header headerTitle="Thông báo" />
            })} />
            <HomeStack.Screen 
                name="StudyHistory" 
                component={StudyHistoryScreen} 
                options={{
                    headerShown: true,
                    header: () => <Header headerTitle="Tiến độ học tập" />
                }} />
            <HomeStack.Screen 
                name='Community' 
                component={CommunityScreen}
                options={{
                    headerShown: true,
                    header: () => <Header headerTitle="Cộng đồng" />
                }} 
            />
            <HomeStack.Screen
                name="TestOfTime"
                component={TestOfTimeScreen}
                options={{
                    headerShown: true,
                    header: () => <Header headerTitle="Thử thách thời gian" />
                }}
            />
        </HomeStack.Navigator>
    )
}

// exam tab
const Stack = createNativeStackNavigator<RootExamTabWithChildParamList>();
export const StackExamTab = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Exam' component={ExamListScreen} />
            <Stack.Screen 
                name='ExamSubjectDetails' 
                component={ExamSubjectDetailsScreen} 
                options={{
                    headerShown: true,
                    header: () => <Header headerTitle="Đề thi" />
                }} />
            <Stack.Screen name='ExamStarting' component={ExamStartingScreen} />
            <Stack.Screen name='ExamResult' component={ExamResultScreen} />
        </Stack.Navigator>
    )
}


// tab bottom
const Tab = createBottomTabNavigator<RootMainAllTabParamList>();
export const TabMain = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'top']}>
            <Tab.Navigator screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: IoniconsName;
                    if (route.name === 'HomeGroup') {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === 'ExamParent') {
                        iconName = focused ? 'reader' : 'reader-outline'
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline'
                    } else {
                        iconName = focused ? 'book' : 'book-outline'
                    }
                    return <Ionicons name={iconName} color={color} size={size} />
                }
            })}>
                <Tab.Screen name='HomeGroup' component={StackHomeTab} options={{ title: 'Trang chủ' }} />
                <Tab.Screen name='ExamParent' component={StackExamTab} options={{ title: 'Bài thi' }} />
                <Tab.Screen name='Rating' component={OverallRatingScreen} options={{ title: 'Xếp hạng' }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: '' }} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}