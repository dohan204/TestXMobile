import { useReadData, useStoreData } from "@/stores/useStoreData";
import { RootExamTabWithChildParamList } from "@/types/type.d";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";
import Constants from "expo-constants";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Question } from "../screens/childScreen/ExamStartingScreen";
import AnswerQuestionTextComponent from "./AnswerQuestionTextComponent";
type Props = {
    data: Question[],
    examId?: number
}
type AnswerSelect = Record<number, string>;

const AnswerQuestionComponent = ({ data, examId }: Props) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [saveAnswer, setSaveAnswer] = React.useState<AnswerSelect>();
    const navigation = useNavigation<NativeStackNavigationProp<RootExamTabWithChildParamList>>(); // Adjust the type as needed
    const api = Constants.expoConfig?.extra?.API_URL;
    // handle select answer
    const onSelectAnswer = (questionId: number,answer: string) => {
        // Handle answer selection logic here
        setSaveAnswer(prev => ({ ...prev, [questionId]: answer }));
        setCurrentIndex(prev => {
            if (prev < data.length - 1) {
                return prev + 1;
            }
            else {
                Alert.alert('Xác nhận', 'Bạn đã trả lời hết câu hỏi. Bạn có muốn nộp bài không?', [
                    {
                        text: 'Hủy',
                        style: 'cancel'
                    },
                    {
                        text: 'Nộp bài',
                        onPress: () => handlSubmit()
                    }
                ]);
                return prev;
            }
        });
    }

    // handle save answer to storage
    React.useEffect(() => {
        console.log('Selected Answers: ', saveAnswer);
        const storeAnswers = async () => {
            if (saveAnswer) {
                await useStoreData('user-answers', JSON.stringify(saveAnswer));
            }
        }
        storeAnswers();
    }, [saveAnswer, currentIndex])


    // get data for submit
    const handlSubmit = async () => {
        const answers = await useReadData('user-answers');
        if (!answers) {
            Alert.alert('Lỗi', 'Không có câu trả lời để nộp bài.');
            return;
        }
        const token = await useReadData('access-token');
        if (!token) {
            Alert.alert('Lỗi', 'Bạn cần đăng nhập để nộp bài.');
            return;
        }
        try {
            const response = await axios.post(`https://api.testx.space/api/Exam/submitExam/${examId}`, 
                answers
            , {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            });
            Alert.alert('Thành công', 'Bài thi đã được nộp thành công!');

            await useStoreData('user-answers', ''); // Clear stored answers after submission

            // lưu lại điểm số vào storage
            await useStoreData('last-score', JSON.stringify(response.data));
            navigation.navigate('ExamResult', {response: response.data});
        } catch (error) {
            console.error('Error submitting exam: ', error);
            Alert.alert('Lỗi', 'Đã có lỗi xảy ra khi nộp bài. Vui lòng thử lại sau.');
        }

    }

const currentQuestion = data[currentIndex];
return (
    <View style={styles.questionContainer}>
        <View>
            <Text style={styles.questionText}>{currentQuestion?.content}</Text>
            <View style={styles.answerContainer}>
                <AnswerQuestionTextComponent title={currentQuestion?.optionA} onPress={() => onSelectAnswer(currentQuestion.id,currentQuestion.optionA)} />
                <AnswerQuestionTextComponent title={currentQuestion?.optionB} onPress={() => onSelectAnswer(currentQuestion.id,currentQuestion.optionB)} />
                <AnswerQuestionTextComponent title={currentQuestion?.optionC} onPress={() => onSelectAnswer(currentQuestion.id,currentQuestion.optionC)} />
                <AnswerQuestionTextComponent title={currentQuestion?.optionD} onPress={() => onSelectAnswer(currentQuestion.id,currentQuestion.optionD)} />
            </View>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        padding: 20,
    },
    questionText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    answerContainer: {
        marginTop: 10,
    }
})
export default AnswerQuestionComponent;