import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
    TotalQuestion: number,
    CorrectAnswer: number,
    WrongAnswer: number,
    Score: number
}
export default function DetailsExamResultComponent(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Chi tiết kết quả</Text>
            <View>
                <Text style={styles.textDes}>Tổng số câu hỏi: {props.TotalQuestion}</Text>
                <Text style={styles.textDes}>Số câu đúng: {props.CorrectAnswer}</Text>
                <Text style={styles.textDes}>Số câu sai: {props.WrongAnswer}</Text>
                <Text style={styles.textDes}>Điểm số: {props.Score}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 'auto',
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 15
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600'
    },
    textDes: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'italic',
    }
})