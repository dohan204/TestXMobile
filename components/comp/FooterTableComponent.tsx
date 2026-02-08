import { StyleSheet, Text, View } from "react-native"
const FooterComponent = () => {
    return (
        <View style={styles.containerFooter}>
            <Text style={styles.headerFooter}>Thông tin xếp hạng</Text>
            <Text style={{color: 'red'}}>Những thông tin về xếp hạng sẽ được cập nhật liên tục, hay cố gắng tích cực để năng cao thứ hạng của mình nhé ^^</Text>
            <Text>Nếu bạn có vướng mắc gì về xếp hạng này, liên hệ chúng mình nhe!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter: {
        paddingVertical: 15
    },
    headerFooter: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10
    }
})

export default FooterComponent