import { Fonts } from '@/constants/theme'
import { RootHomeTabWithChildParamList, RootMainAllTabParamList } from '@/types/type.d'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type Props = {
    iconName: keyof typeof Ionicons.glyphMap,
    size: number,
    title: string
    navigation?: keyof RootMainAllTabParamList
    navigationChild?: keyof RootHomeTabWithChildParamList
}
export default function HomeCategoriesItemComponent({ iconName, size, title, navigation, navigationChild }: Props) {
    const navigations = useNavigation<NativeStackNavigationProp<RootMainAllTabParamList>>();
    const handleNavigation = () => {
        if (navigation) {
            // Ép kiểu nguyên hàm navigate về any
            (navigations.navigate as any)(navigation, {
                screen: navigationChild,
                params: {}
            });
        }
    }
    return (
        <Pressable style={styles.container} onPress={handleNavigation}>
            <Ionicons name={iconName} size={size} />
            <Text style={styles.titleText}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 150,
        borderRadius: 15,
        backgroundColor: 'lightgreen',
        marginHorizontal: 10,
        marginVertical: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 16,
        fontFamily: Fonts.sans,
        fontWeight: 'bold'
    }
})