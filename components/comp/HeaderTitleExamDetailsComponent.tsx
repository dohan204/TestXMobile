import { StyleSheet, Text, View } from "react-native"

type Props = {
    title: string
    description?: string
}
const HeaderTitleExamDetails = ({title}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader} numberOfLines={2}>Các bài thi về môn {title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        height: 60,
        paddingHorizontal: 20,
        marginVertical: 10,
        // marginHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader: {
        fontSize: 20,
        fontWeight: '500'
    }
})
export default HeaderTitleExamDetails;