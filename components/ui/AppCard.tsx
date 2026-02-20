import { Fonts } from '@/constants/theme'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
type ExamDetails = {
    numberOfQuestion: number,
    testingTime?: number,
    subjectName: string
}
type Props = {
    title: string,
    onPress: () => void,
    details?: ExamDetails,
    buttonTitle?: string
}
export default function AppCardExam({title, onPress, details, buttonTitle }:Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.textHeader}>{title}</Text>
        <Text style={styles.textDetails}>Số câu hỏi: {details?.numberOfQuestion} {details?.testingTime === undefined ? '' : `, Thời gian: ${details?.testingTime} phút`}</Text>
        <Pressable style={({pressed}) => 
            [
                styles.buttonPosition, styles.buttonStyle, 
                {opacity: pressed ? 0.7 : 1}
            ]} 
            onPress={onPress}>
            <Text>{buttonTitle ?? 'Button'}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        borderRadius: 10,
        backgroundColor: '#ce6a6a',
        position: 'relative'
    },
    buttonPosition: {
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 'auto',
        height: 40,
        justifyContent: 'center',
        padding: 10,
        outlineWidth: 5,
        outlineColor: '#00ff7f',
        outlineStyle: 'solid'
    },
    textHeader: {
        padding: 20,
        margin: 10,
        fontSize: 16,
        fontFamily: Fonts.sans,
        fontWeight: 'bold',
        color: '#fff'
    },
    textDetails: {
        fontStyle: 'italic',
        position: 'absolute',
        top: 50,
        left: 30,
        color: '#fff'
    }
})
