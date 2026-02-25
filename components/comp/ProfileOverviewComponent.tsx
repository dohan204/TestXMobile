import { useContextUser } from '@/hooks/useContextUser';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import ProfileCardActionComponent from './ProfileCardActionComponent';
export default function ProfileOverviewComponent() {
    const { user } = useContextUser();
    return (
        <View style={{ gap: 10, marginVertical: 10, flexDirection: 'column' }}>
            {user ? (
                <>
                    <View style={{flexDirection: 'row'}}>
                        <ProfileCardActionComponent color='#F1F1F1' text="Số bài thi đã làm" value="12" />
                        <ProfileCardActionComponent color='#F1F1F1' text="Số câu hỏi đã làm" value="120" />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <ProfileCardActionComponent color='#EEF6FF' text="Điểm trung bình" value="8.5">
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Ionicons name='arrow-up-circle-outline' size={24} />
                                <Text style={{marginTop: 3}}> + 0.5 So với lần trước</Text>
                            </View>
                        </ProfileCardActionComponent>
                        <ProfileCardActionComponent color='#FFF7E6' text="Điểm cao nhất" value="9.5" />
                    </View>
                </>
            ) : (
                <View style={{ height: 500 }}>

                </View>
            )
            }
        </View>
    )
}
