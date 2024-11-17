import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";

export interface ITransactionListRepository {
    fetchTransactionList(): Promise<IFetchTransactionResponse[]>;
}