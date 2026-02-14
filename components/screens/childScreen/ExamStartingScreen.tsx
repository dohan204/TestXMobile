import AnswerQuestionComponent from '@/components/comp/AnswerQuestionComponent';
import { RootExamTabWithChildParamList } from '@/types/type.d';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { View } from 'react-native';

export type Question = {
    id: number,
    content: string,
    answer: string,
    optionA: string,
    optionB: string,
    optionC: string,
    optionD: string,
}
type ExamDetails = {
    id: number,
    name: string,
    subjectName: string,
    numberOfExam: number,
    numberOfQuestions: number,
    testingTime: number
    question: Question[]
}
type Props = NativeStackScreenProps<RootExamTabWithChildParamList, 'ExamStarting'>;
export default function ExamStartingScreen({ route }: Props) {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState<ExamDetails | null>(null);

    const handleFetch = useCallback( async () => {
        const examId = route.params.examId;
        if(!examId) return;
        setLoading(true);
        try {
            const response = await fetch(`https://api.testx.space/api/Exam/examDetails/${examId}`);
            const resData: ExamDetails = await response.json();
            setData(resData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [])
    React.useEffect(() => {
        handleFetch();
    }, [handleFetch])
    console.log(data);
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <AnswerQuestionComponent data={data?.question ?? []} examId={data?.id} />
        </View>
    )
}
