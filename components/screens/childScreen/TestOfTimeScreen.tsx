import TimeOfTestModalComponent from '@/components/comp/TimeOfTestModalComponent';
import AppCardExam from '@/components/ui/AppCard';
import { RootHomeTabWithChildParamList } from '@/types/type.d';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { SectionList, Text, View } from 'react-native';
export const examSections = [
  {
    title: 'Toán học',
    data: [
      { numberOfQuestion: 1, testingTime: 45, subjectName: 'Đề 1 - Hàm số' },
      { numberOfQuestion: 2, testingTime: 60, subjectName: 'Đề 2 - Tích phân' },
      { numberOfQuestion: 3, testingTime: 50, subjectName: 'Đề 3 - Hình học không gian' },
    ],
  },
  {
    title: 'Tiếng Anh',
    data: [
      { numberOfQuestion: 4, testingTime: 30, subjectName: 'Grammar Practice' },
      { numberOfQuestion: 5, testingTime: 40, subjectName: 'Reading Test' },
      { numberOfQuestion: 6, testingTime: 35, subjectName: 'Listening Test'  },
    ],
  },
  {
    title: 'Lập trình',
    data: [
      { numberOfQuestion: 7, testingTime: 60, subjectName: 'C# Cơ bản' },
      { numberOfQuestion: 8, testingTime: 75, subjectName: 'ASP.NET Core' },
      { numberOfQuestion: 9, testingTime: 50, subjectName: 'React Native' },
    ],
  },
];

export default function TestOfTimeScreen() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RootHomeTabWithChildParamList>>();
  const toggleModal = () => {
    setIsModalVisible(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      setIsModalVisible(true);
      const timer = setTimeout(() => {
        setIsModalVisible(false);
      }, 1500);
      return () => {
        clearTimeout(timer);
      }
    }, [navigation])
  )
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('transitionStart', () => {
  //     setIsModalVisible(true);

  //     const timer = setTimeout(() => {
  //       setIsModalVisible(false);
  //     }, 1500);
  //     return () => {
  //       clearTimeout(timer);
  //     }
  //   })
  //   return unsubscribe;
  // }, [navigation])
  return (
    <>
      <SectionList
        sections={examSections}
        keyExtractor={(item) => item.numberOfQuestion.toString() }
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={{ opacity: isModalVisible ? 0 : 1, padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <AppCardExam title={item.subjectName} details={item} onPress={() => {}} buttonTitle='Làm bài' />
          </View>
        )}
        renderSectionHeader={({ section: { title } }) =>
          <Text style={{ opacity: isModalVisible ? 0 : 1, fontWeight: 'bold', fontSize: 18, padding: 10 }}>
            {title}
          </Text>
        }
      />
      <TimeOfTestModalComponent visible={isModalVisible} onClose={toggleModal} />
    </>
  )
}
