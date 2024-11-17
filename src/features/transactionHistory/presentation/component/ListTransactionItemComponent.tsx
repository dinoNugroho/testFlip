import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";
import { useNavigations } from "../../../../navigations/RootNavigator/RootParamList";
import styles from "./Transaction.styles";
import Icon from 'react-native-vector-icons/Ionicons'
import StatusBoxComponent from "./StatusBoxComponent";
import { currency, formatDate } from "../../../utils/exportFunction";
import colors from "../../../themes/colors";

export interface IListItem {
    item: IFetchTransactionResponse
}
const ListTransactionItemComponent: React.FC<IListItem> = ({ item }) => {
    const navigation = useNavigations()

    const getColorStatus = (status: string) => {
        switch (status) {
            case "SUCCESS":
                return colors.green;
            case "PENDING":
                return colors.oramge;
            default:
                return "transparent"
        }
    }

    const validateStyle = (status: string) => {
        if (status === "SUCCESS") {
            return { label: "Berhasil", backgroundColor: "green", color: "white" }
        } else {
            return { label: "Pengecekan", borderColor: "orange" }
        }
    }

    return (
        <TouchableOpacity style={styles.cardList} onPress={() => {
            navigation.navigate('DetailTransaction', {
                id: item.id,
                amount: item.amount,
                unique_code: item.unique_code,
                status: item.status,
                sender_bank: item.sender_bank,
                account_number: item.account_number,
                beneficiary_name: item.beneficiary_name,
                beneficiary_bank: item.beneficiary_bank,
                remark: item.remark,
                created_at: item.created_at,
                completed_at: item.completed_at,
                fee: item.fee,
            })
        }}>
            <View style={[styles.viewStatus, { backgroundColor: getColorStatus(item.status) }]} />
            <View style={styles.flexDirection}>
                <View>
                    <View style={styles.senderBank}>
                        <Text style={styles.textTitle}>
                            {item.sender_bank.toUpperCase()}
                        </Text>
                        <Icon name="arrow-forward-outline" style={{ color: "black", fontSize: 23 }} />
                        <Text style={styles.textTitle}>{item.beneficiary_bank.toUpperCase()}</Text>
                    </View>
                    <Text style={[styles.textTitle, { fontWeight: '400' }]}>{`-${item.beneficiary_name}`}</Text>
                    <Text style={styles.textAmount}>{currency(item.amount)}
                         <Icon name="ellipse" style={{ color: "black", fontSize: 7 }} />
                        <Text style={styles.textAmount}>{formatDate(item.completed_at)}</Text>
                    </Text>
                </View>
                <View style={styles.containerStatus}>
                    <StatusBoxComponent itemData={item} status={item.status} />
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ListTransactionItemComponent;