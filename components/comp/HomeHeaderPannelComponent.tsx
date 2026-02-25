import React from 'react'

export default function HomeHeaderPannelComponent() {
    const na
    return (
        <>
            {user ? (
                <Pressable style={({ pressed }) => [styleInline.notificationButton, { opacity: pressed ? 0.7 : 1 }]}
                    onPress={handleNavigator}
                >
                    <Ionicons name='notifications-outline' size={24} />
                </Pressable>
            ) : (
                <Pressable style={[styleInline.buttonLogin]}>
                    <Text>Đăng nhập</Text>
                </Pressable>
            )}
        </>
    )
}
