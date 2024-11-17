import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionList from "../../features/transactionHistory/presentation/screen/TransactionList";
import DetailTransactionList from "../../features/transactionHistory/presentation/screen/DetailTransactionList";
import { RootStackParamList } from "./RootParamList";

const Stack = createNativeStackNavigator<RootStackParamList>()
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Transaction">
            <Stack.Screen
                name="Transaction"
                component={TransactionList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DetailTransaction"
                component={DetailTransactionList} />
        </Stack.Navigator>
    )
}

export default AppNavigator;