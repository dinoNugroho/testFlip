import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";
import { TransactionListRepository } from "../../infrastructure/repository/TransactionRepository";

export async function FetchTransactionListUseCase():
    Promise<IFetchTransactionResponse[]> {
    const repository = new TransactionListRepository();
    return await repository.fetchTransactionList()
}