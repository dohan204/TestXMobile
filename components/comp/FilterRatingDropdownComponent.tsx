import Ionicons from '@expo/vector-icons/Ionicons';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
const data = [
    { label: 'Môn thi', value: 'hightSubject' },
    { label: 'Điểm thi', value: 'hightScore' },
]
export type ValueFilterHandler = {
    getValue:() => string
}

interface Props {
    onChange?: () => void
}
export const FilterRatingDropdownComponent = forwardRef<ValueFilterHandler, Props>((props, ref) => {
    const [value, setValue] = useState('');
    console.log(value)
    useImperativeHandle(ref, () => ({
        getValue: () => {
            return value;
        }
    }))
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={180}
            labelField="label"
            valueField="value"
            placeholder="Xem bẳng xếp hạng"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
                setValue(item.value);
                if(props.onChange)
                    props.onChange();
            }}
            renderLeftIcon={() => (
                <Ionicons style={styles.icon} color="black" name="albums-outline" size={20} />
            )}
        />
    )
});
const styles = StyleSheet.create({
    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default FilterRatingDropdownComponent;