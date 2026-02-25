import ProfileHistoryExam from '@/components/comp/ProfileHistoryExam'
import ProfileLoadingInfoComponent from '@/components/comp/ProfileLoadingInfoComponent'
import ProfileNameInfoComponent from '@/components/comp/ProfileNameInfoComponent'
import ProfileOverviewComponent from '@/components/comp/ProfileOverviewComponent'
import ProfileSettingsComponent from '@/components/comp/ProfileSettingsComponent'
import { Fonts } from '@/constants/theme'
import { useContextUser } from '@/hooks/useContextUser'
import useFetchs from '@/hooks/useFetchData'
import Ionicons from '@expo/vector-icons/Ionicons'
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

type TestDAta = {
  nameExamValue: string,
  dateExamValue: string,
  scoreExamValue: number,
  onPressDetail?: () => void
}
const dataTest: TestDAta[] = [
  {
    nameExamValue: 'Bài thi lập trình 1',
    dateExamValue: '2024-01-01',
    scoreExamValue: 8.5,
    onPressDetail: () => console.log('xem chi tiết bài thi lập trình 1')
  },
  {
    nameExamValue: 'Bài thi đại cương 1',
    dateExamValue: '2024-02-01',
    scoreExamValue: 7.0,
    onPressDetail: () => console.log('xem chi tiết bài thi đại cương 1')
  },
  {
    nameExamValue: 'Bài thi lập trình 2',
    dateExamValue: '2024-03-01',
    scoreExamValue: 9.0,
    onPressDetail: () => console.log('xem chi tiết bài thi lập trình 2')
  },
]
export default function ProfileScreen() {
  const { user } = useContextUser();
  const userId = user?.nameid ?? 'empty';
  const { data, loading, error, refetch } = useFetchs<ExamUserHistory>(`https://api.testx.space/api/Exam/GetExamOfUser?accountId=${userId}`)
  const filterScore = useMemo(() => {
    if (!data) return;
    return data.sort((item, index) => item.score - index.score);
  }, [data])
  if (loading) {
    return (
      <ProfileLoadingInfoComponent />
    )
  }
  return (
    <FlatList
      data={[]}
      renderItem={({ }) => <></>}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <View>
            <View style={styles.imageSwapper}>
            </View>
            <View style={styles.avatarWrapper}>
              <Ionicons name='person' size={80} style={{ backgroundColor: 'white' }} />
            </View>
          </View>
          <ProfileNameInfoComponent />
          <View style={styles.containerInfo}>
            <Text style={styles.headerInfo}>Hoạt động của tài khoản</Text>
            <ProfileOverviewComponent />
            <View>
              <Text style={styles.headerInfo}>Lịch sử làm bài gần nhất</Text>
              <View style={{ marginVertical: 10 }}>
                <ProfileHistoryExam />
              </View>
            </View>
          </View>
          <ProfileSettingsComponent />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll'
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
    backgroundColor: 'lightgray',
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
  },
  headerSettings: {
    fontSize: 18,
    fontFamily: Fonts.sans,
    fontWeight: '400',
    marginBottom: 10,
  }
})

