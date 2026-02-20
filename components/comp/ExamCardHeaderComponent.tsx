import { Fonts } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';
const ExamCardHeaderComponent = () => {
    return (
        <View style={styles.headerCard}>
            <Text style={styles.headerTitle}>
                Thử thách bản thân với các đề thi của chúng mình!!
            </Text>
            <Text>
                Bạn có thể trải nghiệm theo từng chủ đề hoặc môn thi bạn muốn ở đây.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCard: {
        flex: 1,
        // backgroundColor: '#fff8dc',
        paddingHorizontal: 5,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: Fonts.sans,
        fontWeight: 600
    },
})

export default ExamCardHeaderComponent;