import ExamResultCardInfo from '@/components/comp/ExamResultCardInfo';
import { RootExamTabWithChildParamList, RootHomeTabWithChildParamList, RootMainAllTabParamList } from '@/types/type.d';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Sharing from 'expo-sharing';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import ViewShot from 'react-native-view-shot';
type Props = NativeStackScreenProps<
  RootExamTabWithChildParamList,
  'ExamResult'
>;

export default function ExamResultScreen({ route }: Props) {
  // tạo ref với vùng cần chụp 
  const viewShotRef = React.useRef<any>(null)

  const navigation = useNavigation<NativeStackNavigationProp<RootHomeTabWithChildParamList>>();


  const { response } = route.params;


  // thực hiện chia sẻ 
  const captureAndShare = async () => {
    if(!viewShotRef.current) return;
    const uri = await viewShotRef.current?.capture()
    if(uri)
      await Sharing.shareAsync(uri);
  }
  const handleNavigationHome = () => {
    // console.log('alo')
    const parent = navigation.getParent<NativeStackNavigationProp<RootMainAllTabParamList>>();

    parent?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{
          name: 'HomeGroup',
          state: {
            index: 0,
            routes: [{
              name: 'Home'
            }]
          }
        }]
      })
    )
  
  }


  const handleNavigationExamList = () => {
    const parent = navigation.getParent<NativeStackNavigationProp<RootMainAllTabParamList>>();

    parent.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{
          name: 'ExamParent',
          state: {
            index: 0,
            routes: [{name: 'Exam'}]
          }
        }]
      })
    )
  }
  const total = response.totalQuestions;
  const valueScore = response.score * 10;
  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef} style={{width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10, padding: 10}}>
        <Text style={styles.title}>Kết Quả Bài Thi</Text>

        <Text style={styles.info}>
          Tổng câu: {response.totalQuestions}
        </Text>

        <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>
          {valueScore < 50 ? "Trình gà vl 🐥" : valueScore < 80 ? "Cũng được đấy! 🐧" : "Bậc thầy trắc nghiệm! 🏆"}
        </Text>
        <CircularProgress
          value={valueScore}
          radius={100}
          duration={1500}
          valueSuffix={'%'}
          // Đổi màu con số và thanh chạy theo điểm
          progressValueColor={valueScore < 50 ? '#e74c3c' : '#2ecc71'}
          activeStrokeColor={valueScore < 50 ? '#e74c3c' : '#2ecc71'}
          // Nền vòng tròn nên để màu nhạt trung tính
          inActiveStrokeColor={'#f0f0f0'}
          inActiveStrokeOpacity={0.5}
        />
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <ExamResultCardInfo color='#ffe4c4'>
            <Text>Câu đúng: {response.correctAnswers}</Text>
          </ExamResultCardInfo>
          <ExamResultCardInfo color='#fff0f5'>
            <Text>Điếm số: {response.score}</Text>
          </ExamResultCardInfo>
          <ExamResultCardInfo color={response.wrongAnswers > 20 ? '#f08080' : '#9370db'}>
            <Text>Câu sai: {response.wrongAnswers}</Text>
          </ExamResultCardInfo>
        </View>
      </ViewShot>

      <View style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        left: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
      }}>
        <Pressable style={styles.buttonShare} onPress={captureAndShare}>
          <Ionicons name='share-outline' size={40} />
        </Pressable>
        <Pressable style={styles.buttonSuccess} onPress={handleNavigationHome}>
          <Text style={{ fontSize: 18, padding: 10 }}>
            Về trang chủ
          </Text>
        </Pressable>
        <Pressable style={styles.buttonSuccess} onPress={handleNavigationExamList}>
          <Text style={{ fontSize: 18, padding: 10 }}>
            Làm bài khác
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    rowGap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonSuccess: {
    flex: 2,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15
  },
  buttonShare: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 5,
    borderRadius: 15
  }
});
