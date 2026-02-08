import { ButtonCustome } from '@/components/custom/ButtonCustom';
import { InputCustom } from '@/components/custom/InputCustom';
import styles from '@/components/styles/commonStyle';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as z from 'zod';


const schema = z.object({
    username: z.string().min(4, 'Tên đăng nhập không được nhỏ hơn 4 ký tự').trim(),
    fullname: z.string(),
    password: z.string().min(6, 'Mật khẩu không được nhỏ hơn 6 ký tự'),
    email: z.email('email không đúng')
})

type Register = z.infer<typeof schema>;

export default function RegisterScreen() {
    const [loading, setLoading] = useState<boolean>(false);
    const { control, handleSubmit } = useForm<Register>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            fullname: '',
            password: '',
            email: ''
        }
    })
    const onSubmit: SubmitHandler<Register> = (data: Register) => {
        setLoading(true);
        setTimeout(() => {
            Alert.alert('data', JSON.stringify(data))
            setLoading(false)
        }, 3000)
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View style={styles.formData}>
                                <Text style={styles.headerText}>Đăng ký tài khoản</Text>
                                <InputCustom
                                    name='username'
                                    control={control}
                                    label='Tên đăng nhập'
                                />
                                <InputCustom
                                    name='fullname'
                                    control={control}
                                    label='Họ tên'
                                />
                                <InputCustom
                                    name='password'
                                    control={control}
                                    label='Mật khẩu'
                                />
                                <InputCustom
                                    name='email'
                                    control={control}
                                    label='Địa chỉ email'
                                />
                                <ButtonCustome title='Đăng ký'  onPress={handleSubmit(onSubmit)} loading={loading} />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}
