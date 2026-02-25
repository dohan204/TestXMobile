import React from 'react'
// import { View } from 'react-native-reanimated/lib/typescript/Animated'
import { Fonts } from '@/constants/theme'
import { useContextUser } from '@/hooks/useContextUser'
import { StyleSheet, Text, View } from 'react-native'
import ProfileButtonSettingComponent from './ProfileButtonSettingComponent'
export default function ProfileSettingsComponent() {

    const { logout } = useContextUser();
    return (
        <View style={styles.container}>
            <Text style={styles.headerSettings}>Cài đặt thông tin khác</Text>
            <View>
                <ProfileButtonSettingComponent title='Đổi mật khẩu' iconName='key-outline' onPress={() => console.log('đổi mật khẩu')} />
                <ProfileButtonSettingComponent title='Đăng xuất' iconName='log-out-outline' onPress={logout} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 8,
        borderColor: '#ddd',
    },
    headerSettings: {
        fontSize: 18,
        fontFamily: Fonts.sans,
        fontWeight: '400',
        marginBottom: 10,
    },
})