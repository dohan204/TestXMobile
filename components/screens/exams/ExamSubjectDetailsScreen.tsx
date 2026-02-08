import HeaderTitleExamDetails from '@/components/comp/HeaderTitleExamDetailsComponent';
import AppCard from '@/components/ui/AppCard';
import useFetchs from '@/hooks/useFetchData';
import { RootExamTabWithChildParamList } from '@/types/type.d';
import { RouteProp, useRoute } from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, View } from 'react-native';

type Exam = {
  id: number,
  examName: string,
  testingTime: number,
  numberOfQuestion: number,
  subjectName: string
}
type ExamDetailsScreenRouteProp = RouteProp<RootExamTabWithChildParamList, 'ExamSubjectDetails'>;
export default function ExamSubjectDetailsScreen() {
  const route = useRoute<ExamDetailsScreenRouteProp>();

  const { subjectId, name, code } = route?.params;

  const apiUrl = Constants?.expoConfig?.extra?.API_URL_DEPLOY;
  const { data, loading, error } = useFetchs<Exam>(`https://api.testx.space/api/Exam/examBySubjectName?name=${code}`)
  console.log(data)
  if(loading) 
      return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator color={'red'} size={'large'} /></View>
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      // columnWrapperStyle={{gap: 10}}
      ListHeaderComponent={() => {
        return <HeaderTitleExamDetails title={name ?? ''} />
      }}
      contentContainerStyle={{paddingHorizontal: 20, rowGap: 20}}
      renderItem={({ item }) => (
        <AppCard title={item.examName} onPress={() => Alert.alert('hello anh')} details={item} buttonTitle='Làm bài' />
      )}
      // ListFooterComponent={<AppCard title='hello' onPress={() => Alert.alert('hello anh em')} />}
    />
  )
}

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    height: 160,
    backgroundColor: '#fa8072',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})