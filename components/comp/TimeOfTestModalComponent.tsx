import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
  visible: boolean;
  onClose: () => void;
}
export default function TimeOfTestModalComponent({ visible, onClose }: Props) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      animationInTiming={600}
      animationOutTiming={800}
      backdropColor="#1E1E1E"
      backdropOpacity={0}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          Thực hành kiểm tra trong một khoảng thời gian nhất định để cải thiện kỹ năng làm bài và quản lý thời gian hiệu quả.
        </Text>
        <Text>
          Chúc bạn may mắn và thành công nhé!
        </Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 40,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
