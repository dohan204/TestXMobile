import HistoryExamTestComponent from '@/components/comp/HistoryExamTestComponent';
import OverviewCardComponent from '@/components/comp/OverviewCardComponent';
import { useContextUser } from '@/hooks/useContextUser';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
const data = [
    { id: 1, name: 'hello', value: 10 },
    { id: 2, name: 'anh em', value: 20 },
    { id: 3, name: 'tôi', value: 30 },
]
export default function StudyHistoryScreen() {
    const { user } = useContextUser();

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id + ''}
            renderItem={({ item }) => (
                <View>
                    <ContentTable subject={item.name} score={item.value as number} date={'20/10/2023'} />
                </View>
            )}
            ListHeaderComponent={() => (
                <View style={styles.container}>
                    <View style={styles.headerPannerComponent}>
                        <Text style={{fontSize: 18, fontWeight: 'bold' }}>Hi, {user?.fullName}</Text>
                        <Text>Phía dưới là thành tích của bạn !!</Text>
                    </View>
                    {/* overview */}
                    <OverviewCardComponent data={data} />
                    <HistoryExamTestComponent />
                </View>
            )}

        />

    )
}

type ContentTableProps = {
    subject: string,
    score: number,
    date: string
}
const ContentTable = (props: ContentTableProps) => {
    return <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10, backgroundColor: 'white', marginHorizontal: 8, marginBottom: 10 }}>
        <Text style={styles.textContentTable}>{props.subject}</Text>
        <Text style={styles.textContentTable}>{props.score}</Text>
        <Text style={styles.textContentTable}>{props.date}</Text>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerPannerComponent: {
        height: 80,
        // backgroundColor: 'red',
        borderRadius: 10,
        marginHorizontal: 8,
        padding: 10,
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 8,
        marginBottom: 10
    },
    textHeaderTable: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        flex: 1
    },
    textContentTable: {
        textAlign: 'center',
        flex: 1
    }
})