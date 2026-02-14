import DetailsExamResultComponent from '@/components/comp/DetailsExamResultComponent';
import { RootExamTabWithChildParamList } from '@/types/type.d';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
type Props = NativeStackScreenProps<
  RootExamTabWithChildParamList,
  'ExamResult'
>;

export default function ExamResultScreen({ route }: Props) {
  const navigatin = useNavigation<NativeStackNavigationProp<RootExamTabWithChildParamList>>();
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [feetback, setFeetback] = React.useState<string>('');
  const { response } = route.params;

  React.useEffect(() => {
    const unmouseScreen = navigatin.addListener('blur', () => {
      setOpenModal(false);
    })

    return unmouseScreen;
  }, [navigatin])

  const total = response.totalQuestions;
  const valueScore = response.score * 10;
  return (
    <View style={styles.container}>
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
      <View>
        <Pressable onPress={() => setOpenModal(!openModal)} style={{ marginTop: 20, padding: 10, backgroundColor: 'red', borderRadius: 5 }}>
          <Text>Xem Chi Tiết</Text>
        </Pressable>
        {openModal && <DetailsExamResultComponent
          TotalQuestion={total}
          CorrectAnswer={response.correctAnswers}
          WrongAnswer={response.wrongAnswers}
          Score={response.score}
        />}
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
});
