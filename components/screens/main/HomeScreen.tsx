import HomeCategoriesComponent from '@/components/comp/HomeCategoriesComponent'
import { Fonts } from '@/constants/theme'
import { useContextUser } from '@/hooks/useContextUser'
import { RootHomeTabWithChildParamList } from '@/types/type.d'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type HomeNav = NativeStackNavigationProp<RootHomeTabWithChildParamList>;
type Props = NativeStackScreenProps<RootHomeTabWithChildParamList, 'Home'>;
export default function HomeScreen({ route }: Props) {
  const navigation = useNavigation<HomeNav>();
  const { user } = useContextUser();
  const { examId, examName } = route.params || {};
  const handleNavigator = () => {
   navigation.push('Notifications');
  }
  return (
    <SafeAreaView edges={['left', 'right',]} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ paddingBottom: 32 }}>
        <View
          style={styleInline.homTop}
        >
          <View>
            <Text style={[styleInline.headerTopHome]}>Xin chào {user?.fullName}</Text>
            <Text style={{fontStyle: 'italic'}}>Hôm nay bạn muốn luyện tập gì?</Text>
          </View>
          <Pressable style={({pressed}) => [styleInline.notificationButton, {opacity: pressed ? 0.7 : 1}]}
            onPress={handleNavigator}
          >
            <Ionicons name='notifications-outline' size={24} />
          </Pressable>
        </View>
        {examId && examName && (
          <View style={{padding: 10, margin: 10, backgroundColor: '#f0f8ff', borderRadius: 10}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Đang thi: {examName}</Text>
          </View>
        )}
        <View style={styleInline.topBanner}>
          <View style={styleInline.topBanneritem} >
            <Text
              numberOfLines={10}
              style={{ fontSize: 16, fontWeight: '500', marginBottom: 10 }}
            >
              Tham gia các bài thi Đáng giá cùng chún tôi,
              bộc phát tiềm năng của bạn
            </Text>
            <Text
              numberOfLines={10}
              style={{ fontSize: 16, fontWeight: '500' }}
            >
              Khẳng định năng lực qua từng câu hỏi, tiến gần hơn đến mục tiêu của bạn.
            </Text>
          </View>
          <View style={styleInline.topBanneritem}>
            <Image
              source={require('../../../assets/images/imgexam.jpg')}
              style={{ width: 200, height: 200, paddingRight: 30 }}
            />
          </View>
        </View>
        <LinearGradient
          colors={['#ffb6c1', '#82ffa1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styleInline.homeContent}
          dither
        >
          <Text style={[styleInline.headerTopHome, { textAlign: 'left' }]}>
            Trải nghiệm làm các bài thi nhanh chóng!!
          </Text>
          <View>
            <Pressable style={styleInline.buttonFeature} onPress={() => Alert.alert('hello anh em')}>
              <Text style={{ fontSize: 20 }}>Trắc nghiệm nhanh</Text>
            </Pressable>
          </View>
        </LinearGradient>
        <HomeCategoriesComponent />
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'purple'
  }
})
const styleInline = StyleSheet.create({
  homTop: {
    flex: 2,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15
  },
  topBanner: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#ffe4c4',
    paddingVertical: 10,
    marginHorizontal: 6
  },
  topBanneritem: {
    flex: 1,
    padding: 10
  },
  headerTopHome: {
    fontSize: 24,
    fontFamily: Fonts.mono,
    fontWeight: '700',
  },
  notificationButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 40
  },
  homeContent: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    padding: 25,
    borderRadius: 15,
    margin: 5
  },
  buttonFeature: {
    width: 200,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#32cd32',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15
  },
  OutstandingContent: {
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    gap: 20
  },
  ItemContentOutStanding: {
    backgroundColor: '#afeeee',
    flex: 1,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    height: 'auto'
  }
})