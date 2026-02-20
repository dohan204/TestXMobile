import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Data = {
    id: number, 
    name: string,
    value: string | number
}
type PropsValue = {
    data: Data[]
}
export default function OverviewCardComponent({ data }: PropsValue) {
    return (
        <View style={styles.overViewContent}>
            <Text style={styles.overviewTitle}>Tiến độ tổng quan</Text>
            <View style={styles.overviewContainer}>
                    {data.map((item, index) => (
                        <OverviewCardItemComponent key={index} title={item.name} value={item.value} />
                    ))}
            </View>
        </View>
    )
}

type Props = {
    title: string,
    value: string | number
}
export function OverviewCardItemComponent({ title, value }: Props) {
    return (
        <View style={styles.overviewItem}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    overViewContent: {
        marginHorizontal: 10,
        backgroundColor: '#90D5FF',
        marginTop: 10,
        padding: 10,
    },
    overviewContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        padding: 10,
        columnGap: 10
    },
    overviewItem: {
        flex: 1,
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

    },
    overviewTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    }
})