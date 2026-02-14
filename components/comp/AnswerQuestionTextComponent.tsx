import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
type Props = {
    title: string,
    onPress: () => void
}
export default function AnswerQuestionTextComponent({title, onPress}: Props) {
  return (
        <Pressable  style={({pressed}) => [styles.container,
            pressed ? styles.inputClick : null
        ]} onPress={onPress}>
            <Text style={styles.textInput} >{title}</Text>
        </Pressable>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#e6f2ff',
        marginVertical: 5,
        marginHorizontal: 10
    },
    textInput: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        lineHeight: 22,
        letterSpacing: 0.5,
        fontVariant: ['small-caps'],
        padding: 15
    },
    inputClick: {
        backgroundColor: '#cce6ff',
        // transform: [{ scale: 0.98 }]
    }
})