import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import FooterComponent from './FooterTableComponent'
type SubjectRatingDataModel = {
    id: number,
    name: string,
    count: number,
    rating: number
}
type Props = {
    item: SubjectRatingDataModel,
    index: number
}
const dataTest: SubjectRatingDataModel[] = [
    {id: 1, name: 'toán', count: 2, rating: 1},
    {id: 2, name: 'tiếng anh', count: 1, rating: 2}
]
export default function RatingsSubjectComponent() {
    const TableHeader = () => {
        return <View style={styles.header}>
            <Text style={[styles.headerText, { flex: 1 }]}>Số thứ tự</Text>
            <Text style={[styles.headerText, { flex: 2 }]}>Tên Môn</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>Số lần thi</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>Thứ hạng</Text>
        </View>
    }
    const renderItem = ({ item, index }: Props) => (
        <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oldRow]}>
            <Text style={[styles.cell, { flex: 1 }]}>{item.id}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{item.count}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{item.rating}</Text>
        </View>
    )
    return (
        <FlatList
            data={dataTest}
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
    containerFooter: {
        paddingVertical: 15
    },
    headerFooter: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10
    }
})