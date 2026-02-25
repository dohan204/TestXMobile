import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
type Props = {
    nameExam: string,
    dateExam: string,
    scoreExam: string 
}
export default function HeaderTableHelper(props: Props) {
  return (
    <View style={styles.container}>
        <Text style={[styles.textHeader, {flex: 2}]}>{props.nameExam}</Text>
        <Text style={[styles.textHeader, {flex: 2}]}>{props.dateExam}</Text>
        <Text style={[styles.textHeader, {flex: 1}]}>{props.scoreExam}</Text>
        <Text style={[styles.textHeader, {flex: 1}]}>Chi tiết</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:  {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        fontStyle: 'italic',
        textAlign: 'left'
    },
})