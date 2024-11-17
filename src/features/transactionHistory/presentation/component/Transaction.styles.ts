import { StyleSheet } from "react-native";
import colors from "../../../themes/colors";

const styles = StyleSheet.create({
    searchView: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: colors.background
    },
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
    viewStatus: {
        height: '100%',
        width: 10,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 5,
    },
    containerStatus: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    boxSuccess: {
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.green
    },
    boxPending: {
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: colors.oramge
    },
    textStatusSuccess: {
        color: colors.background,
        fontWeight: 'bold'
    },
    textStatusPending: {
        color: colors.black,
        fontWeight: "bold"
    },
    cardList: {
        backgroundColor: colors.background,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    flexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        flex: 1
    },
    textInput: {
        flex: 1,
    },
    container: {
        padding: 10,
        flex: 1
    },
    labelFilter: {
        fontSize: 14,
        color: colors.oramge,
        fontWeight: 'bold'
    },
    senderBank: { flexDirection: 'row', alignItems: 'center' },
    textTitle: { fontWeight: 'bold', alignContent: 'center', fontSize: 18, color: colors.black },
    textAmount: { fontSize: 16, fontWeight: '400', color: colors.black },
    viewDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderBottomWidth: 0.5,
        padding: 20,
        borderColor: colors.gray,
        justifyContent: 'space-between'
    },
    viewCollaps: {
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 0.6,
        borderColor: colors.gray
    },
    subViewCollaps: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }
})
export default styles;