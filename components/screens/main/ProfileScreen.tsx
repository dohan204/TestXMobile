import AppInfo from '@/components/ui/AppInfo'
import { Fonts } from '@/constants/theme'
import { useContextUser } from '@/hooks/useContextUser'
import useFetchs from '@/hooks/useFetchData'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useMemo } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'

type ExamUserHistory = {
  examId: number,
  examName: string,
  subjectName: string,
  questionQuantity: number,
  duration: number,
  isCorrect: number,
  isWrong: number,
  score: number,
  examDate: string
}
export default function ProfileScreen() {
  const {user} = useContextUser();
  const userId = user?.nameid ?? 'empty';
  const {data, loading, error, refetch} = useFetchs<ExamUserHistory>(`https://api.testx.space/api/Exam/GetExamOfUser?accountId=${userId}`)
  const filterScore = useMemo(() => {
    if(!data) return;
    return data.sort((item, index) => item.score - index.score);
  }, [data])
  if(loading) {
    return <ActivityIndicator color={'red'} size={'large'} />
  }
  return (
    <FlatList
      style={styles.container}
      data={filterScore}
      ListHeaderComponent={() => (
        <>
          <View>
            <Image
              source={require('../../../assets/images/backgroundInfo.jpg')}
              style={styles.imageSwapper}
              resizeMode='cover'
            />
            <View style={styles.avatarWrapper}>
              <Ionicons name='person' size={80} style={{ backgroundColor: 'white' }} />
            </View>
          </View>
          <View style={{ marginVertical: 40 }}>
            <Text style={{ textAlign: 'center', fontSize: 22, fontFamily: Fonts.sans, fontWeight: 500 }}>Đỗ Hân</Text>
            <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>dohan@gmail.com</Text>
          </View>
          <View style={styles.containerInfo}>
            <Text style={styles.headerInfo}>Hoạt động của tài khoản</Text>
            <View style={{ gap: 10, marginVertical: 10 }}>
              <AppInfo title='Số bài thi đã thực hiện' value={40} />
              <AppInfo title='Điểm thi cao nhất' value={10} />
            </View>
          </View>
          <View>
            <Text>
              Lịch sử thi
            </Text>
          </View>
        </>
      )}
      renderItem={({item}) => (
        <View>
          <Text></Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarWrapper: {
    position: 'absolute',
    bottom: -40,
    left: '50%',
    transform: [{ translateX: -40 }],
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  imageSwapper: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  containerInfo: {
    paddingHorizontal: 10
  },
  headerInfo: {
    fontSize: 18,
    fontFamily: Fonts.sans,
    fontWeight: '400'
  }
})

