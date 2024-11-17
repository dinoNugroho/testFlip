import Modal from "react-native-modal";
import { useError } from "../../../AppErrorContext";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../themes/colors";
import Icon from "react-native-vector-icons/Ionicons";

const GlobalErrorComponent: React.FC = () => {
    const { error, setError } = useError();

    if (!error) return null;

    return (
        <Modal
            isVisible={!!error}
            animationIn='bounceIn'
            animationOut='bounceOut'
            animationInTiming={1000}
            animationOutTiming={500}
            onBackdropPress={() => { setError(null) }}
        >
            <View style={[styles.roundContainer, { backgroundColor: '#d8534f' }]}>
                {/* <Icon name={'times'} style={{ color: '#FFF', fontSize: 30 }} /> */}
            </View>
            <View style={styles.modal}>
                <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Text style={{ ...styles.title, paddingTop: 30 }}>Peringatan</Text>
                    <Text style={styles.message}>
                        {error}
                    </Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity style={{ backgroundColor: '#d8534f', alignItems:'center', justifyContent:'center', paddingVertical:'10'}} onPress={() => { setError(null) }}>
                        <Text style={{ fontWeight: '600', color: colors.background }}>Tutup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        width: '85%',
        maxWidth: 450,
        backgroundColor: '#FFF',
        borderRadius: 5,
        overflow: 'hidden',
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 20,
        alignSelf: 'center'
    },
    roundContainer: {
        width: 75,
        height: 75,
        borderRadius: 75,
        backgroundColor: '#398e3d',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#FFF',
        bottom: -38,
        zIndex: 1
    },
    title: {
        fontSize: 24,
        color: '#737373',
        textAlign: 'center',
        fontWeight: '700'
    },
    message: {
        paddingTop: 10,
        fontSize: 17,
        color: '#737373',
        marginTop: 15,
        textAlign: 'center',
        fontWeight: '700'
    },
    messageWrap: {
        position: 'absolute', top: 0,
        width: '100%',
        height: 72,
        maxWidth: 450,
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        paddingTop: 20,
        paddingBottom: 15,
        paddingHorizontal: 12,
        alignSelf: 'center',
        flexDirection: 'row'
    }
})

export default GlobalErrorComponent