import React from "react";
import { FlatList, View } from "react-native";
import ListTransactionItemComponent from "./ListTransactionItemComponent";
import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";
import ListEmptyData from "../../../component/ListEmptyComponent";

export interface IListTransaction {
    dataList: any
}
const ListTransactionComponent: React.FC<IListTransaction> = ({ dataList }) => {

    const renderItem = ({ item }: { item: IFetchTransactionResponse }) => {
        return (
            <ListTransactionItemComponent item={item} />
        )
    }

    return (
        <View style={{flex:1}}>
            <FlatList
                data={dataList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<ListEmptyData message="Belum ada Transaksi" />}
            />
        </View>
    )
}

export default ListTransactionComponent