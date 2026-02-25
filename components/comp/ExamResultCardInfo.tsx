import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
type Props = {
    children: ReactNode,
    color?: string,
    marginTop?: number
}
export default function ExamResultCardInfo({children, color, marginTop}: Props) {
  return (
    <View style={[styles.container, {backgroundColor: color, marginTop: marginTop}]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        height: 110,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})