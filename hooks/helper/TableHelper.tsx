import React from 'react'
import { View } from 'react-native'
import BodyTableHelper from './bodyTableHelper'
import HeaderTableHelper from './headerTableHelper'

type PropsValue = {
    nameExamValue: string,
    dateExamValue: string,
    scoreExamValue: number,
    onPressDetail?: () => void
}
type PropsMerge = {
    nameExam: string,
    dateExam: string,
    scoreExam: string,
    detailsExam: string,
    value: PropsValue[]
}
export default function TableHelper(props: PropsMerge) {
    return (
        <View>
            <HeaderTableHelper nameExam={props.nameExam} dateExam={props.dateExam} scoreExam={props.scoreExam} />
            {props.value.map((item, index) => (
                <BodyTableHelper key={index} nameExamValue={item.nameExamValue} dateExamValue={item.dateExamValue} scoreExamValue={item.scoreExamValue} onPressDetail={item.onPressDetail} />
            ))
            }
        </View>
    )
}
