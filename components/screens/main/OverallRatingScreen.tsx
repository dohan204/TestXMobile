import { ValueFilterHandler } from '@/components/comp/FilterRatingDropdownComponent';
import RatingsScoreComponent from '@/components/comp/RatingsScoreComponent';
import RatingsSubjectComponent from '@/components/comp/RatingsSubjectComponent';
import React, { useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
export default function OverallRatingScreen() {
  const ref = useRef<ValueFilterHandler>(null);

  const [currentType, setCurrentType] = useState<string>('');

  const handleDropdownChange = () => {
    const val = ref.current?.getValue();
    if (val) setCurrentType(val);
  }
  return (
    <FlatList
      data={[]}
      renderItem={({ item }) => <></>}
      ListHeaderComponent={() => (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          {/* <FilterRatingDropdownComponent ref={ref} onChange={handleDropdownChange} /> */}
          <View style={{ flexDirection: 'column' }}>
            <View style={{marginVertical: 15,
              padding: 10,
            }}>
              <Text style={{ paddingHorizontal: 10, paddingTop: 10, marginVertical: 10, fontSize: 16, fontWeight: '600', }}>Bảng xếp hạng theo môn thi</Text>
              <RatingsSubjectComponent />
            </View>
            <View style={{marginVertical: 15,
              padding: 10,
            }}>
              <Text style={{ paddingHorizontal: 10, paddingTop: 10, marginVertical: 10, fontSize: 16, fontWeight: '600', }}>Bảng xếp hạng theo điểm thi</Text>

              <RatingsScoreComponent />
            </View>
          </View>
        </View>
      )}
    />
  )
}
