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
        setLoading(true);
        try {
            // check dieu kiện nếu id được truyền thì gọi theo id, nếu không thì sẽ lấy ra random
            const response = examId ? 
                await fetch(`https://api.testx.space/api/Exam/examDetails/${examId}`) : 
                await fetch(`https://api.testx.space/api/Exam/randomExam`);

            if(!response.ok)
                throw new Error("Fetch exam failed");

            // convert data
            const resData: ExamDetails = await response.json();
            setData(resData); // setdata
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }, [route.params?.examId])
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
