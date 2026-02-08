import { ButtonCustome } from '@/components/custom/ButtonCustom';
import { InputCustom } from '@/components/custom/InputCustom';
import { useStoreData } from '@/stores/useStoreData';
import { RootMergeAuthHomeParamList } from '@/types/type.d';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios, { AxiosError } from 'axios';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as z from 'zod';
const schema = z.object({
    userName: z.string().nonempty('Tên không được trống'),
    password: z.string().min(6, 'Mật khẩu không được nhỏ hơn 6 ký tự')
})

type LoginScreen = z.infer<typeof schema>;
const LoginScreen = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<NativeStackNavigationProp<RootMergeAuthHomeParamList>>();

    const { control, handleSubmit, formState: { errors } } = useForm<LoginScreen>({
        resolver: zodResolver(schema),
        defaultValues: {
            userName: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<LoginScreen> = async (data: LoginScreen) => {
        console.log('data submit: ', data);
        setLoading(true)
        try {
            console.log('hello')
            const response = await axios.post('http://192.168.1.137:5000/api/Account/login-mobile', data);
            if(response) {
                const token = response.data ?? 'Empty';
                await useStoreData(token);
                console.log('data response: ', response.data);
            }
            console.log('data response: ', response.data);
            navigation.navigate('Home', {
                screen: 'MainTab'
            });
        } catch (err) {
            if(err instanceof AxiosError) {
                if(err.response?.status === 500) {
                    Alert.alert("Lỗi", `${err.response.statusText}`)
                } else if (err.response?.status === 404) {
                    Alert.alert("Lỗi", `${err.response.statusText}`)
                } else if (err.response?.status === 400) {
                    Alert.alert("Loi", "Dau vao khong hojp lej");
                } else {
                    Alert.alert("Looi", `status: ${err.response?.status} loi: ${err.response?.statusText}`)
                }
            }
        } finally {
            setLoading(false)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={styles.form}>
                    <Text style={styles.textHeader} >Đăng Nhập</Text>
                    <InputCustom
                        name='userName'
                        control={control}
                        label='Username'
                    />
                    <InputCustom
                        name='password'
                        control={control}
                        label='Password'
                        secureTextEntry
                    />
                    <Pressable onPress={() => navigation.navigate('Auth', {
                        screen: 'Forgot'
                    })}> 
                        <Text style={styles.forgotText}>Quên mật khẩu</Text>
                    </Pressable>
                    <ButtonCustome title='Đăng nhập' onPress={handleSubmit(onSubmit)} loading={loading} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    form: {
        width: '100%',
        height: 'auto',
        padding: 40,
        backgroundColor: 'white',
        borderRadius: 5
    },
    input: {
        height: 40,
        width: '100%',
        padding: 10
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 32,
        padding: 5,
        margin: 5
    },
    button: {
        borderWidth: 1,
        backgroundColor: '#7fffd4'
    },
    forgotText: {
        textAlign: 'right',
        marginRight: 5
    }
})