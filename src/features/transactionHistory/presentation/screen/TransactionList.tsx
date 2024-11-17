import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "../component/Transaction.styles";
import SearchComponent from "../component/SearchComponent";
import SortingComponent from "../component/SortingComponent";
import ListTransactionComponent from "../component/ListTransactionComponent";
import { useTransactionStore } from "../../aplication/store/useTransactionStore";
import { useQuery } from "@tanstack/react-query";
import { FetchTransactionListUseCase } from "../../aplication/useCase/FetchTransactionListUseCase";
import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";
import LoadingSpinnerComponent from "../../../component/LoadingComponent";
import colors from "../../../themes/colors";

const TransactionList = () => {
    const [sort, setSort] = useState<string>('latest')

    const { search, setSearch } = useTransactionStore()
    const { data, isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: FetchTransactionListUseCase
    })

    const filteredData = data?.filter((transaction: IFetchTransactionResponse) =>
        transaction.beneficiary_bank.toLowerCase().includes(search.toLowerCase()) ||
        transaction.beneficiary_name.toLowerCase().includes(search.toLowerCase()) ||
        transaction.amount.toString().includes(search) ||
        transaction.sender_bank.toLowerCase().includes(search.toLowerCase())
    ) || [];

    const sortData = filteredData.sort((a, b) => {
        switch (sort) {
            case 'asc':
                return a.beneficiary_name.localeCompare(b.beneficiary_name);
            case 'desc':
                return b.beneficiary_name.localeCompare(a.beneficiary_name);
            case 'latest':
                return new Date(b.created_at).getTime() - new Date(a.completed_at).getTime();
            case 'oldest':
                return new Date(a.created_at).getTime() - new Date(b.completed_at).getTime();
            default:
                return 0
        }
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.mainBackground }}>
            {
                isLoading ? <LoadingSpinnerComponent /> : <View style={styles.container}>
                    <View style={styles.searchView}>
                        <SearchComponent value={search} onsearch={setSearch} />
                        <SortingComponent onSort={(value) => setSort(value)} />
                    </View>
                    <ListTransactionComponent dataList={sortData} />
                </View>

            }
        </SafeAreaView>
    )
}

export default TransactionList