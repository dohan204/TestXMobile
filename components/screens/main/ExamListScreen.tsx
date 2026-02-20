import ExamCardHeaderComponent from '@/components/comp/ExamCardHeaderComponent';
import { Fonts } from '@/constants/theme';
import useFetchs from '@/hooks/useFetchData';
import { RootExamTabWithChildParamList } from '@/types/type.d';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import { useNavigation } from 'expo-router';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
  const [search, setSearch] = React.useState<string>('');
  const navigation = useNavigation<ExamListPassValue>();
  // lấy ra url api
  const api = Constants.expoConfig?.extra?.API_URL;

  console.log('api: ', api)
  // destrucruring 
  const { data, loading, error, refetch } = useFetchs<Subject>(`https://api.testx.space/api/Subject/subjects`);

  console.log('data: ', data)
  // filter subject by module
  const filterSubjectByModule = React.useMemo(() => {
    if (!data) return [];

    return data.filter(item => {
      //  match kiểu module 
      const matchModule = currentModule === 0 || item.moduleId === currentModule;

      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchModule && matchSearch
    })
  }, [data, currentModule, search]);

  // refresh 
  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch])

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white' }}>
        <ExamCardHeaderComponent />
        <View style={styles.subjectCard}>
          <Text style={styles.headerTitle}>Chủ đề hiện có:</Text>
          <Text>Lựa chọn chủ đề phù hợp với bản thân bạn để luyện tập nhé.</Text>
          <View style={styles.subjectDetails}>
            {ButtonModule.map((value) => (
              <TouchableOpacity key={value.value} style={styles.subjectDetailsItem} onPress={() => setCurrentModule(value.moduleId)}>
                <Text style={styles.textButton}>{value.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Search */}
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <TextInput placeholder='Tìm kiếm' style={[styles.textSearch]} value={search} onChangeText={(value) => setSearch(value)} />
          <Ionicons name='search-outline' size={24} style={styles.iconSearch} />
        </View>
        <View>
          {loading && <ActivityIndicator style={{ marginVertical: 30}} size={'large'} color='red' />}
        </View>
      </View>
      <FlatList
        data={filterSubjectByModule}
        keyExtractor={(item, index) => item.id + ''}
        horizontal={false}
        numColumns={2}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        columnWrapperStyle={{ gap: 28 }}
        contentContainerStyle={styles.contentCenter}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.subjectCardContent} onPress={() => navigation.navigate('ExamSubjectDetails', { subjectId: item.id, name: item.name, code: item.code })}>
            <Text style={{ fontWeight: 600, fontSize: 16, textAlign: 'center' }} numberOfLines={3}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyboardShouldPersistTaps='handled'
        ListEmptyComponent={() => (
          !loading ? (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
              <Ionicons name="search-outline" size={50} color="#ccc" />
              <Text style={{ marginTop: 10, color: 'gray' }}>Không tìm thấy môn học nào phù hợp @@</Text>
            </View>
          ) : null
        )}
      />

    </View>
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
    flex: 1,
    height: 160,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textSearch: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  textSearchFocused: {
    borderBottomColor: '#0000ff',
  },
  iconSearch: {
    position: 'absolute',
    left: 5,
    top: 8,
  }
})