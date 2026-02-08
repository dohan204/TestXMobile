import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"

type Props = {
  title: string,
  onPress: () => void,
  loading?: boolean,
  disabled?: boolean,
  style?: ViewStyle
}

export const ButtonCustome = ({ title, onPress, loading = false, disabled = false, style }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        styles.button, disabled && styles.disabled,
        style
      ]}
    >
      {loading ?
        (<View style={{ flexDirection: 'row' }}>
          <ActivityIndicator color={'#fff'} />
          <Text style={{ opacity: 0.7, marginLeft: 10 }}>{title}</Text>
        </View>) : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});