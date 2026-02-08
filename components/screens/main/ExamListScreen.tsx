import ExamCardHeaderComponent from '@/components/comp/ExamCardHeaderComponent';
import { Fonts } from '@/constants/theme';
import useFetchs from '@/hooks/useFetchData';
import { RootExamTabWithChildParamList } from '@/types/type.d';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import { useNavigation } from 'expo-router';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
type Subject = {
  id: number,
  name: string,
  moduleId: number,
  code: string,
}
const ButtonModule = [
  { name: 'Lập trình', value: 'program', moduleId: 1 },
  { name: 'Đại cương', value: 'general', moduleId: 2 }
]

type ExamListPassValue = NativeStackNavigationProp<RootExamTabWithChildParamList, 'Exam'>
export default function ExamListScreen() {
  const [currentModule, setCurrentModule] = React.useState<number>(0)
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const navigation = useNavigation<ExamListPassValue>();
  // lấy ra url api
  const api = Constants.expoConfig?.extra?.API_URL;

  console.log('api: ', api)
  // destrucruring 
  const { data, loading, error, refetch } = useFetchs<Subject>(`https://api.testx.space/api/Subject/subjects`);


  // filter subject by module
  const filterSubjectByModule = React.useMemo(() => {
    if (!data) return []
    if (!currentModule) return data
    return data.filter(item => item.moduleId === currentModule)
  }, [data, currentModule])

  // refresh 
  const handleRefresh = useCallback( async() => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch])
  
  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={'red'} size={'large'} />
      </View>
  )
  return (
    <FlatList
      data={filterSubjectByModule}
      keyExtractor={(item, index) => item.id + ''}
      horizontal={false}
      numColumns={2}
      refreshing={refreshing}
      onRefresh={handleRefresh}
      columnWrapperStyle={{ gap: 28 }}
      ListHeaderComponent={() => (
        <>
          
          <ExamCardHeaderComponent />
          <View style={styles.subjectCard}>
            <Text style={styles.headerTitle}>Chủ đề hiện có:</Text>
            <Text>Lựa chọn chủ đề phù hợp với bản thân bạn để luyện tập nhé.</Text>

            <View style={styles.subjectDetails}>
              {ButtonModule.map((value, index) => (
                <TouchableOpacity key={value.value} style={styles.subjectDetailsItem} onPress={() => setCurrentModule(value.moduleId)}>
                  <Text style={styles.textButton}>{value.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </>
      )}
      contentContainerStyle={styles.contentCenter}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.subjectCardContent} onPress={() => navigation.navigate('ExamSubjectDetails', {subjectId: item.id, name: item.name, code: item.code})}>
          <Text style={{ fontWeight: 600, fontSize: 16, textAlign: 'center' }} numberOfLines={3}>{item.name}</Text>
        </TouchableOpacity>
      )}
      ListFooterComponent={() => <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading && !refreshing ? <ActivityIndicator size={'large'} color='red' /> : null}
      </View>}
    />

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerCard: {
    flex: 1,
    backgroundColor: '#fff8dc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: Fonts.sans,
    fontWeight: 600
  },
  subjectCard: {
    margin: 10,
    paddingHorizontal: 15,
    backgroundColor: '#00ffff',
    paddingVertical: 10,
    borderRadius: 10
  },
  subjectDetails: {
    flexDirection: 'row',
    gap: 8
  },
  subjectDetailsItem: {
    flex: 1,
    width: 80,
    height: 60,
    backgroundColor: '#9932cc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginVertical: 10
  },
  textButton: {
    fontSize: 16,
    fontWeight: 500
  },
  contentCenter: {
    paddingHorizontal: 15,
    rowGap: 20,
    // flexWrap: ''
  },
  subjectCardContent: {
    width: 165,
    height: 160,
    borderRadius: 10,
    backgroundColor: '#7fffd4',
    justifyContent: 'center',
    alignItems: 'center'
  }
})