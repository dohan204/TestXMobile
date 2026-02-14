import HeaderTitleExamDetails from '@/components/comp/HeaderTitleExamDetailsComponent';
import AppCard from '@/components/ui/AppCard';
import { useContextUser } from '@/hooks/useContextUser';
import useFetchs from '@/hooks/useFetchData';
import { RootExamTabWithChildParamList, RootMergeAuthHomeParamList } from '@/types/type.d';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
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
  const [isLoading, setIsLoading] = React.useState(false);
  const route = useRoute<ExamDetailsScreenRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootMergeAuthHomeParamList>>();
  const navigationExam = useNavigation<NativeStackNavigationProp<RootExamTabWithChildParamList>>();
  const { name, code } = route?.params;


  const { user } = useContextUser();
  const handleUserNotLogin = () => {
    Alert.alert('Thông báo', 'Bạn cần đăng nhập để thực hiện Chức năng này', [
      { text: 'Hủy', style: 'cancel' },
      { text: 'Đăng nhập', onPress: () => navigation.navigate('Auth', { screen: 'Login' }) }
    ]);
  }

  const handleUserLogin = (examId: number, examName: string, testingTime: number, numberOfQuestion: number) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      navigationExam.navigate('ExamStarting', {
          examId: examId,
          examName: examName,
          testingTime: testingTime,
          numberOfQuestion: numberOfQuestion
      });
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }
  const { data, loading, error } = useFetchs<Exam>(`https://api.testx.space/api/Exam/examBySubjectName?name=${code}`)
  if (loading)
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator color={'red'} size={'large'} /></View>
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      // columnWrapperStyle={{gap: 10}}
      ListHeaderComponent={() => {
        return <HeaderTitleExamDetails title={name ?? ''} />
      }}
      contentContainerStyle={{ paddingHorizontal: 20, rowGap: 20 }}
      renderItem={({ item }) => (
        <AppCard title={item.examName} onPress={() => !user ? handleUserNotLogin() : handleUserLogin(item.id, item.examName, item.testingTime, item.numberOfQuestion)} details={item} buttonTitle='Làm bài' />
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