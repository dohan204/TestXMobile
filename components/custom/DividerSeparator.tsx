import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDivider: React.FC = () => {
    return (
        <View
            style={{
                height: 1,
                backgroundColor: '#e0e0e0',
                marginVertical: 10,
                marginHorizontal: 15
            }}
        />
    )
}
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Cục 1: Render các Screen khai báo trong Navigator */}
      <DrawerItemList {...props} />

      {/* Đường kẻ ngăn cách giữa cục 1 và cục 2 */}
      <CustomDivider />

      {/* Cục 2: Ví dụ thêm các nút hoặc text ở dưới đường kẻ */}
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ color: 'gray', fontSize: 12 }}>Phiên bản 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;