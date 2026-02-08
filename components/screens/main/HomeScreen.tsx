import CardHeaderComponent from '@/components/comp/CardHeaderComponent'
import FeatureComponent from '@/components/comp/FeatureComponent'
import { Fonts } from '@/constants/theme'
import { useContextUser } from '@/hooks/useContextUser'
import { RootStackParamList } from '@/types/type.d'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from 'expo-router'
import React from 'react'
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user } = useContextUser();
  return (
    <SafeAreaView edges={['left', 'right', ]} style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ paddingBottom: 32 }}>
        <View
          style={styleInline.homTop}
        >
          <Text style={[styleInline.headerTopHome, { textTransform: 'uppercase' }]}>Xin chào {user?.fullName},</Text>
          <Text style={[styleInline.headerTopHome, {fontFamily: Fonts.sans}]}>
            Chào mừng Đến với Test X!!
          </Text>
        </View>
        <View style={{flex: 2, alignItems: 'flex-end', padding: 10, flexDirection: 'row', gap: 15}}>
          <CardHeaderComponent title='Số giờ Online' icon='alarm-outline' />
          <CardHeaderComponent title='Số giờ Online' icon='alarm-outline' />
        </View>
        <View style={styleInline.topBanner}>
          <View style={styleInline.topBanneritem} >
            <Text 
              numberOfLines={10}
              style={{fontSize: 20, letterSpacing: 5}}
            >
              Tham gia các bài thi Đáng giá cùng chún tôi,
              bộc phát tiềm năng của bạn
            </Text>
          </View>
          <View style={styleInline.topBanneritem}>
            <Image
              source={require('../../../assets/images/imgexam.jpg')}
              style={{width: 200, height: 200, paddingRight: 30}}
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
        <LinearGradient
          colors={['#ffb6c1', '#82ffa1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styleInline.homeContent}
          dither
        >
          <Text style={styleInline.headerTopHome}>Thông tin Nổi bật</Text>
          <View style={styleInline.OutstandingContent}>
            <FeatureComponent title='Người dùng' />
            <FeatureComponent title='Người dùng' />
            <FeatureComponent title='Người dùng' />
            <FeatureComponent title='Người dùng' />
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

const styleInline = StyleSheet.create({
  homTop: {
    flex: 2,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 25
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
    fontSize: 30,
    fontFamily: Fonts.mono,
    fontWeight: '500',
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