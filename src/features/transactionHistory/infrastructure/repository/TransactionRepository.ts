import { IFetchTransactionResponse } from "../../domain/entities/IFetchTransactionResponse";
import { httpClient } from "../api/Httpclient";
import { ITransactionListRepository } from "./ITransactioinRepository";

export const transformTransactionData = (
    data: Record<string, IFetchTransactionResponse>
): IFetchTransactionResponse[] => {
    return Object.values(data) as IFetchTransactionResponse[];
};

export class TransactionListRepository implements ITransactionListRepository {
    private axiosInstance;

    constructor() {
        const { axiosInstance } = httpClient()
        this.axiosInstance = axiosInstance
    }
    fetchTransactionList(): Promise<IFetchTransactionResponse[]> {
        return this.axiosInstance.get<Record<string, IFetchTransactionResponse>>(`frontend-test`)
            .then((response: any) => {
                console.log("response", response)
                return transformTransactionData(response.data)
            })
            .catch((error: any) => {
                if (error.response) {
                    const { message } = error.response.data;
                    throw new Error(message || "Terjadi Kesalahan")
                } else {
                    throw new Error("Terjadi kesalahan")
                }
            })
    }
}

