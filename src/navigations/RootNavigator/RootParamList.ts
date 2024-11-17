import { NavigationContainerProps, useNavigation } from "@react-navigation/native";
import { IFetchTransactionResponse } from "../../features/transactionHistory/domain/entities/IfetchTransactionResponse";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Transaction: undefined;
    DetailTransaction: IFetchTransactionResponse; // Example screen with a parameter
};

type navigationProp = NativeStackNavigationProp<RootStackParamList>

export const useNavigations = () => useNavigation<navigationProp>()