import { Fonts } from '@/constants/theme';
import { useContextUser } from '@/hooks/useContextUser';
import React from 'react';
import { Text, View } from 'react-native';

export default function ProfileNameInfoComponent() {
    const {user} = useContextUser();
    return (
        <View style={{ marginVertical: 40 }}>
            <Text style={{ textAlign: 'center', fontSize: 22, fontFamily: Fonts.sans, fontWeight: 500 }}>
                {user ? user.fullName : 'Khach'}
            </Text>
            <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>
                {user ? user.email : ''}
            </Text>
        </View>
    )
}
