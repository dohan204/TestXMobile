import ExamCardHeaderComponent from '@/components/comp/ExamCardHeaderComponent';
import React from 'react';
// import { ButtonModule } from '@/components/screens/main/ExamListScreen';
import { Fonts } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const ButtonModule = [
    { name: 'Lập trình', value: 'program', moduleId: 1 },
    { name: 'Đại cương', value: 'general', moduleId: 2 }
]
export default function HeaderExamListRenderComponent() {

    const [search, setSearch] = React.useState<string>('');
    const [currentModule, setCurrentModule] = React.useState<number>(0)
    return (
        <>
            <ExamCardHeaderComponent />
            <View style={styles.subjectCard}>
                <Text style={styles.headerTitle}>Chủ đề hiện có:</Text>
                <Text>Lựa chọn chủ đề phù hợp với bản thân bạn để luyện tập nhé.</Text>
                <View style={styles.subjectDetails}>
                    {ButtonModule.map((value) => (
                        <TouchableOpacity key={value.value} style={styles.subjectDetailsItem} onPress={() => setCurrentModule(value.moduleId)}>
                            <Text style={styles.textButton}>{value.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            {/* Search */}
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <TextInput placeholder='Tìm kiếm' style={styles.textSearch} value={search} onChangeText={(value) => setSearch(value)} />
                <Ionicons name='search-outline' size={24} style={styles.iconSearch} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    subjectCard: {
        margin: 10,
        paddingHorizontal: 15,
        backgroundColor: '#00ffff',
        paddingVertical: 10,
        borderRadius: 10
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: Fonts.sans,
        fontWeight: 600
    },
    subjectDetails: {
        flexDirection: 'row',
        gap: 8
    }, subjectDetailsItem: {
        flex: 1,
        width: 80,
        height: 60,
        backgroundColor: '#9932cc',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginVertical: 10
    },
    textButton: {
        fontSize: 16,
        fontWeight: 500
    },
      textSearch: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  iconSearch: {
    position: 'absolute',
    left: 5,
    top: 8,
  }
})