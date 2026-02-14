import React from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

// định nghĩa props ử dụng typescript generic 
export type FormInputProps<IFormValues extends FieldValues> = {
    name: Path<IFormValues>;
    control: Control<IFormValues>;
    label: string;
} & TextInputProps; // kế thừa props chuẩn

export function InputCustom<IFormValues extends FieldValues>(
    props: FormInputProps<IFormValues>
){
    const {field, fieldState: {error}} = useController({
        control: props.control,
        name: props.name
    })

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}: </Text>
            <TextInput
                style={[styles.input, error && styles.errorInput]}
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                {...props}
            />
            {error && <Text style={styles.errorInput}>{error.message}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
  container: { padding: 10,  },
  label: { marginBottom: 10, fontWeight: '400', fontSize: 16, },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 280,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
});