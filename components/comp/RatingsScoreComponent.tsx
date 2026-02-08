import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import FooterComponent from './FooterTableComponent';
type ScoreRatingData = {
    id: number,
    name: string,
    score: number,
    rating: number
}
type Props = {
    item: ScoreRatingData,
    index: number
}
const data: ScoreRatingData[] = [
    {id: 1, name: 'han', score: 10, rating: 1},
    {id: 2, name: 'hando', score: 8, rating: 2},
    {id: 3, name: 'hannguyen', score: 7, rating: 3},
    {id: 4, name: 'hanha', score: 7, rating: 3},
    {id: 5, name: 'hantuyet', score: 7, rating: 3},
    {id: 6, name: 'hanngan', score: 5, rating: 4},
    {id: 7, name: 'hanngu', score: 2, rating: 5},
]
export default function RatingsScoreComponent() {
    const theme = useTheme();
    const TableHeader = () => {
       return <View style={styles.header}>
            <Text style={[styles.headerText, {flex: 1}]}>Số thứ tự</Text>
            <Text style={[styles.headerText, {flex: 2}]}>Ngừi dùng</Text>
            <Text style={[styles.headerText, {flex: 1}]}>Điểm</Text>
            <Text style={[styles.headerText, {flex: 1}]}>Thứ hạng</Text>
        </View>
    }
    const renderItem = ({ item, index }: Props) => (
        <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oldRow]}>
            <Text style={[styles.cell, { flex: 1 }]}>{item.id}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{item.score}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{item.rating}</Text>
        </View>
    )
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id + ''}
            ListHeaderComponent={TableHeader}
            ListFooterComponent={FooterComponent}
            stickyHeaderIndices={[0]}
            renderItem={renderItem}
        />     
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 15
    },
    evenRow: {
        backgroundColor: '#fff',
    },
    oldRow: {
        backgroundColor: '#ffe4c4'
    },
    headerText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 15, 
        backgroundColor: '#3498db',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cell: {
        textAlign: 'center',
        color: '#333',
    },
})