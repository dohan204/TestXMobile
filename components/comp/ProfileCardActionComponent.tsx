import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
    text: string,
    value: string,
    children?: ReactNode,
    color?: string
}
export default function ProfileCardActionComponent(props : Props) {
  return (
    <View style={[styles.card, {backgroundColor: props.color}]}>
        <Text style={styles.textValue}>{props.text}</Text>
        <Text style={styles.textValue}>{props.value}</Text>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 120,
        backgroundColor: 'lightgray',
        paddingHorizontal: 15,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textValue: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'italic',
    }
})