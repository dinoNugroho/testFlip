import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { RootStackParamList } from "../../../../navigations/RootNavigator/RootParamList";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../../themes/colors";
import styles from "../component/Transaction.styles";
import { currency, formatDate } from "../../../utils/exportFunction";
import CollapsibleView from "../component/AccordingCollapsibleComponent";

type DetailsRoute = RouteProp<RootStackParamList, 'DetailTransaction'>;

const DetailTransactionList = () => {
    const route = useRoute<DetailsRoute>()
    const { id, sender_bank, beneficiary_bank, amount, beneficiary_name, completed_at, account_number, remark, unique_code } = route.params

    const [isCollapsed, setIsCollapsed] = useState(true)
    return (
        <View>
            <View style={styles.viewDetail}>
                <Text style={styles.textTitle}>{`ID TRANSAKSI: #${id}`} </Text>
                <Icon name="copy" style={{ fontSize: 23, color: colors.oramge }} />
            </View>
            <CollapsibleView title="DETAIL TRANSAKSI">
                <View style={styles.viewCollaps}>
                    <View style={[styles.senderBank, { marginBottom: 15 }]}>
                        <Text style={styles.textTitle}>
                            {sender_bank.toUpperCase()}
                        </Text>
                        <Icon name="arrow-forward-outline" style={{ color: "black", fontSize: 23 }} />
                        <Text style={styles.textTitle}>{beneficiary_bank.toUpperCase()}</Text>
                    </View>
                    <View style={styles.subViewCollaps}>
                        <View style={{ flex: 0.6 }}>
                            <Text style={[styles.textTitle, { fontWeight: '700' }]}>{`-${beneficiary_name}`}</Text>
                            <Text style={[styles.textTitle, { fontWeight: '400' }]}>{account_number}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', flex: 0.4 }}>
                            <Text style={[styles.textTitle, { fontWeight: '700' }]}>NOMINAL</Text>
                            <Text style={[styles.textTitle, { fontWeight: '400' }]}>{currency(amount)}</Text>
                        </View>
                    </View>

                    <View style={styles.subViewCollaps}>
                        <View style={{ flex: 0.6 }}>
                            <Text style={[styles.textTitle, { fontWeight: '700' }]}>BERITA TRANSFER</Text>
                            <Text style={[styles.textTitle, { fontWeight: '400' }]}>{remark}</Text>
                        </View>
                        <View style={{ alignItems: 'flex-start', flex:0.4 }}>
                            <Text style={[styles.textTitle, { fontWeight: '700' }]}>KODE UNIK</Text>
                            <Text style={[styles.textTitle, { fontWeight: '400' }]}>{unique_code}</Text>
                        </View>
                    </View>

                    <Text style={[styles.textTitle, { fontWeight: '700' }]}>WAKTU DIBUAT</Text>
                    <Text style={[styles.textTitle, { fontWeight: '400' }]}>{formatDate(completed_at)}</Text>
                </View>
            </CollapsibleView>
        </View>
    )
}

export default DetailTransactionList;