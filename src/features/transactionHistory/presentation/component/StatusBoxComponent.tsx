import { Text, View } from "react-native"
import styles from "./Transaction.styles";
import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";

export interface IStatus {
    status: string
    itemData: IFetchTransactionResponse
}
const StatusBoxComponent: React.FC<IStatus> = ({ status, itemData }) => {
    const combineStyles = status === "SUCCESS" ? styles.boxSuccess : styles.boxPending
    const combineText = status === "SUCCESS" ? styles.textStatusSuccess : styles.textStatusPending
    const getTextStatus = (status: string) => {
        switch (status) {
            case "SUCCESS":
                return "Berhasil"
            case "PENDING":
                return "Pengecekan"
        }
    }
    return (
        <View style={combineStyles}>
            <Text style={combineText}>{getTextStatus(itemData.status)}</Text>
        </View>
    )
}

export default StatusBoxComponent;