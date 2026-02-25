import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    nameExamValue: string,
    dateExamValue: string,
    scoreExamValue: number,
    onPressDetail?: () => void
}
export default function BodyTableHelper(props: Props) {
  return (
    <View style={styles.container}>
        <Text style={[{flex: 2}]} numberOfLines={1}>{props.nameExamValue}</Text>
        <Text style={[styles.textValue, {flex: 2}]}  numberOfLines={1}>{props.dateExamValue}</Text>
        <Text style={[styles.textValue, {flex: 1}]}  numberOfLines={1}>{props.scoreExamValue}</Text>
        <Text style={[styles.textValue, {flex: 1}]} onPress={props.onPressDetail}>Detail</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingVertical: 15
    },
   textValue: {
    textAlign: 'left'
   }
})