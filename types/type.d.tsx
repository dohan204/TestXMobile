import { NavigatorScreenParams } from "@react-navigation/native";

// auth route
export type RootStackRouteAuthParamList = {
    Login: undefined,
    Logout: undefined,
    Forgot: undefined,
    Register: undefined;
}

// App
export type RootStackParamList = {
    Auth: {
        screen: keyof RootStackRouteAuthParamList
    };
    HomeDrawer: undefined;
}
// Home drawer
export type RootHomeParamList = {
    MainTab: undefined,
    InfoMe: undefined,
    RatingMe: undefined,
    Update: undefined,
}

// Home tab
export type RootHomeTabParamList = {
    HomeGroup: undefined,
    ExamParent: undefined,
    Rating: undefined
}

// root merge auth and home
export type RootMergeAuthHomeParamList = {
    Auth: NavigatorScreenParams<RootStackRouteAuthParamList>;
    Home: NavigatorScreenParams<RootHomeParamList>;
}


// tab exam with child
export type RootExamTabWithChildParamList = {
    Exam: undefined,
    ExamSubjectDetails: {subjectId: number, name?: string, code: string}
}