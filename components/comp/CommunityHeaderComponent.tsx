import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import { InputCustom } from "../custom/InputCustom";
export default function CommunityHeaderComponent() {
  return (
    <View style={styles.container}>
        {/* search */}
        <View style={{backgroundColor: 'lightgreen', flex: 2.5}}>
            <TextInput style={styles.input} placeholder="Tìm kiếm bài đăng..." />
            <Ionicons name='search' size={32} style={styles.searchIcon} />
        </View>
        {/* notifications */}
        <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Ionicons name='notifications' size={32} />
            <Text>Thông báo</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {        
        flexDirection: 'row',
        height: 60
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    searchIcon: {
        position: 'absolute',
        top: 15,
        right: 15
    }
})