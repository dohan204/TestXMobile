import { useContextUser } from '@/hooks/useContextUser'
import useFetchs from '@/hooks/useFetchData'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useMemo, useState } from 'react'
import { Alert, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
type Props = {
    examId: number,
    examName: string,
    subjectName: string,
    questionQuantity: number,
    duration: number,
    isCorrect: number,
    isWrong: number,
    score: number,
    examDate: string
}
const STEP = 5;
export default function ProfileHistoryExam() {
    const { user } = useContextUser();
    const [visibleCount, setVisibleCount] = useState(STEP);
    if (!user) return;


    const { data, loading } = useFetchs<Props>(`https://api.testx.space/api/Exam/GetExamOfUser?accountId=${user.nameid}`);

    const visibleData = useMemo(() => {
        return data?.slice(0, visibleCount) ?? [];
    }, [data, visibleCount])
    if (!user?.nameid) return;
    return (
        <>
            <FlatList
                data={visibleData}
                keyExtractor={(item, index) => `${item.examId}-${item.examDate}-${index}`}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Text>Tên bài thi: {item.examName}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text>Ngày thi: {new Date(item.examDate).toLocaleDateString('vi-VN')};</Text>
                            <Text>Điểm số: {item.score}</Text>
                        </View>
                        <Pressable style={styles.button} onPress={() => Alert.alert("hello anh em nhé")}>
                            <Ionicons name='arrow-forward-outline' size={24} />
                            <Text style={{ marginLeft: 10 }}>Xem chi tiết</Text>
                        </Pressable>
                    </View>
                )}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}
                ListFooterComponent={
                    visibleCount < (data?.length ?? 0) ? (
                        <TouchableOpacity onPress={() => setVisibleCount(v => v + STEP)}>
                            <Text style={{ textAlign: 'center', padding: 12 }}>
                                Xem thêm
                            </Text>
                        </TouchableOpacity>
                    ) : null
                }
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 139,
        backgroundColor: 'lightgreen',
        padding: 20,
        marginHorizontal: 5,
        marginVertical: 10,
        flexDirection: 'column',
        gap: 20
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
