import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./Transaction.styles";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../../themes/colors";
import Modal from "react-native-modal";

export interface ISorting {
    onSort: (cases: string) => void
}
const URUTKAN = [
    { label: 'Nama (A-Z)', value: 'asc' },
    { label: 'Nama (Z-A)', value: 'desc' },
    { label: 'Tanggal Terbaru', value: 'latest' },
    { label: 'Tanggal Lama', value: 'oldest' },
];

const SortingComponent: React.FC<ISorting> = ({ onSort }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>("")

    const handleSort = (value: string) => {
        setModalVisible(false)
        setSelectedValue(value)
        onSort(value)

    };

    return (
        <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { setModalVisible(true) }}>
                <Text style={styles.labelFilter}>URUTKAN</Text>
                <Icon name="chevron-down" style={{ color: colors.oramge, fontSize: 23 }} />
            </TouchableOpacity>
            <Modal
                isVisible={modalVisible}
                animationIn='bounceIn'
                animationOut='bounceOut'
                animationInTiming={1000}
                animationOutTiming={500}
                onBackdropPress={() => { setModalVisible(false) }}
            >
                <View style={styles.modal}>
                    <FlatList
                        data={URUTKAN}
                        keyExtractor={(item) => item.value}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={suit.option} onPress={() => handleSort(item.value)}>
                                <Icon name={selectedValue === item.value ? "radio-button-on" : "radio-button-off"} style={{ fontSize: 20, color: colors.oramge }} />
                                <Text style={suit.optionText}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    )

}

const suit = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        width: '80%',
    },
    option: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    optionText: {
        marginLeft: 8,
        fontSize: 16,
    },
});

export default SortingComponent;