import { Fonts } from '@/constants/theme'
import { useContextUser } from '@/hooks/useContextUser'
import useFetchs from '@/hooks/useFetchData'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Skeleton } from '@rneui/themed'
import React, { useMemo } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

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
    return (
      <View style={{flex: 1}}>
        <Skeleton width={'100%'} height={100} style={{borderBottomLeftRadius: 24, borderBottomRightRadius: 24}} animation='pulse' />
        <Skeleton circle width={80} height={80} style={styles.skeletonAvatar} />
        <Skeleton width={120} height={30} style={{marginTop: 40, alignSelf: 'center'}} animation='pulse' />
        <Skeleton width={200} height={20} style={{marginTop: 10, alignSelf: 'center'}} animation='pulse' />
      </View>
    )
  }
  return (
    <FlatList
      style={styles.container}
      data={filterScore}
      ListHeaderComponent={() => (
        <>
          <View>
            <View style={styles.imageSwapper}>
            </View>
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
            </View>
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
    height: 100,
    backgroundColor: '#00ffff',
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
  }, 
  skeletonLoading: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginBottom: 10
  },
  skeletonAvatar: {
    position: 'absolute',
    top: 60,
    left: '50%',
    transform: [{ translateX: -40 }],
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  }
})

