import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    formData: {
        width: 'auto',
        height: 'auto',
        padding: 40,
        marginHorizontal: 20,
        gap: 8,
        // boxShadow: '5px 5px 4px 2px rgba(0,0,0,0.1)',
    }, 
    headerText: {
        textAlign: 'center',
        fontSize: 24
    }
})
export default styles;