import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
const ionconsName = Ionicons.glyphMap;
type Props = {
    title: string,
    iconName: keyof typeof ionconsName,
    onPress?: () => void
}
export default function ProfileButtonSettingComponent(props: Props) {
  return (
    <Pressable onPress={props.onPress} style={({pressed}) => [styles.button, pressed ? styles.buttonClick : null]}>
        <Ionicons name={props.iconName} size={24}/>
        <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'lightgray',
        marginVertical: 5,
        borderRadius: 20
    },
        buttonClick: {
        color: 'blue',
        textDecorationLine: 'underline',
        opacity: 0.8,
        backgroundColor: 'lightblue',
    }, 
    text: {
        fontSize: 16,
        fontWeight: 500,
        marginLeft: 10
    }
})
