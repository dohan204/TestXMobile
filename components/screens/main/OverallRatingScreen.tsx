import FilterRatingDropdownComponent, { ValueFilterHandler } from '@/components/comp/FilterRatingDropdownComponent';
import RatingsScoreComponent from '@/components/comp/RatingsScoreComponent';
import RatingsSubjectComponent from '@/components/comp/RatingsSubjectComponent';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
export default function OverallRatingScreen() {
  const ref = useRef<ValueFilterHandler>(null);

  const [currentType, setCurrentType] = useState<string>('');

  const handleDropdownChange = () => {
    const val = ref.current?.getValue();
    if(val) setCurrentType(val);
  }
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
        <Text style={{paddingHorizontal: 15, paddingTop: 10, marginTop: 10, fontSize: 16, fontWeight: '600'}}>Xem bảng xếp hạng</Text>
        <FilterRatingDropdownComponent ref={ref} onChange={handleDropdownChange} />
        {currentType === 'hightSubject' ? 
          (<RatingsSubjectComponent />) : 
          (<RatingsScoreComponent />)
        }
    </View>
  )
}
