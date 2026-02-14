import React from 'react'
import { Text, View } from 'react-native'
import HomeCategoriesItemComponent from './HomeCategoriesItemComponent'

export default function HomeCategoriesComponent() {
  return (
    <View>
        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '600'}}>Categories</Text>
        <View style={{flexDirection: 'row'}}>
            <HomeCategoriesItemComponent 
              iconName='ribbon-outline' 
              size={48} 
              title='Bảng xếp hạng tuần' 
              navigation='Rating' />
            <HomeCategoriesItemComponent 
              iconName='alarm-outline' 
              size={48} 
              title='Thử thách thời gian'
              />
        </View>
         <View style={{flexDirection: 'row'}}>
            <HomeCategoriesItemComponent 
              iconName='school-outline' 
              size={48} 
              title='Tiến độ học tập'
              navigation='HomeGroup' 
              navigationChild='StudyHistory'/>
            <HomeCategoriesItemComponent 
              iconName='accessibility-outline' 
              size={48} 
              title='Cộng đồng' />
        </View>
    </View>
  )
}
