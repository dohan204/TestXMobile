import { InputCustom } from '@/components/custom/InputCustom';
import styles from '@/components/styles/commonStyle';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from 'react-native';
import * as z from 'zod';
// suwr dungj zod de vallidate 
const schema = z.object({
  email: z.email('Email không hợp lệ.')
})

type ForgotPassword = z.infer<typeof schema>;

export default function ForgotPasswordScreen() {
  const { control, handleSubmit } = useForm<ForgotPassword>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit: SubmitHandler<ForgotPassword> = (data: ForgotPassword) => {
    console.log(data);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.container}>
          <View>
            <InputCustom
              name='email'
              control={control}
              label='Email'
              placeholder='Enter email..'
            />
            <Button onPress={handleSubmit(onSubmit)} title='Gửi' />
          </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
