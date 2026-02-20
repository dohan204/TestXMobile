import { StyleSheet, Text, View } from "react-native"

type Props = {
    title: string
    description?: string
}
const HeaderTitleExamDetails = ({title}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader} numberOfLines={2}>Chủ đề: Các đề môn {title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 20,
        // marginVertical: ,
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