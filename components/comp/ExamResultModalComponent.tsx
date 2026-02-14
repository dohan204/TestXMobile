import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
type Props = {
    CorrectAnswer: number,
    WrongAnswer: number,
    TotalQuestions: number,
    Score: number,
    openModal: boolean,
}
export default function ExamResultModalComponent(props: Props) {
    const [visibleModal, setVisibleModal] = React.useState(props.openModal);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => {
                    setVisibleModal(!visibleModal);
                }}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Chi tiết kết quả:</Text>
                        <Text style={styles.modalText}>Số câu đúng: {props.CorrectAnswer}</Text>
                        <Text style={styles.modalText}>Số câu sai: {props.WrongAnswer}</Text>
                        <Text style={styles.modalText}>Tổng số câu hỏi: {props.TotalQuestions}</Text>
                        <Text style={styles.modalText}>Điểm số: {props.Score}</Text>
                        <Button
                            title="Hide Modal"
                            onPress={() => setVisibleModal(!visibleModal)}
                        />
                    </View>
                </View>
            </Modal>
            <Button
                title="Show Modal"
                onPress={() => setVisibleModal(true)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        textAlign: 'center',
        marginBottom: 15
    }
})