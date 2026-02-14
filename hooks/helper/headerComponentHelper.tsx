import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from 'react-native';

type Props = {
    headerTitle: string
}
export default function Header({headerTitle}: Props) {
    const navigation = useNavigation();
    return (
        <View style={{
            height: 80,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16
        }}>
            <Ionicons
                name="arrow-back"
                size={32}
                onPress={() => navigation.goBack()}
            />
            <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '600' }}>
                {headerTitle}
            </Text>
        </View>
    )
}