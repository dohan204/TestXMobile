import { NavigatorScreenParams } from "@react-navigation/native";

// auth route
export type RootStackRouteAuthParamList = {
    Login: undefined,
    Logout: undefined,
    Forgot: undefined,
    Register: undefined;
}

// App
// Home tab
export type RootMainAllTabParamList = {
    HomeGroup: NavigatorScreenParams<RootHomeTabWithChildParamList>,
    ExamParent: NavigatorScreenParams<RootExamTabWithChildParamList>,
    Rating: undefined
    Profile: undefined
}

// root merge auth and home
export type RootMergeAuthHomeParamList = {
    Auth: NavigatorScreenParams<RootStackRouteAuthParamList>;
    Home: NavigatorScreenParams<RootMainAllTabParamList>;
}

export type AnswerResponse = {
    totalQuestions: number,
    correctAnswers: number,
    score: number,
    wrongAnswers: number
}
// tab exam with child
export type RootExamTabWithChildParamList = {
    Exam: undefined, // index
    ExamSubjectDetails: { subjectId: number, name?: string, code: string },
    ExamStarting: { examId?: number, examName?: string, testingTime?: number, numberOfQuestion?: number };
    ExamResult: { response: AnswerResponse };
}

export type RootHomeTabWithChildParamList = {
    Home: { examId?: number, examName?: string }, // index
    Notifications: undefined,
    StudyHistory: undefined,
    Community: undefined,
    TestOfTime: undefined
}

export type RootCommunityParamList = {
    CommunityHome: undefined,
    PostDetailsScreen: undefined,
    UserProfileScreen: undefined,
    CreatePostScreen: undefined
}