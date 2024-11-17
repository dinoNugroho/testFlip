import { create } from "zustand";

export interface TransactionState {
    search: string
    sort: string
    setSearch: (value: string) => void
    setSort: (value: string) => void
}

export const useTransactionStore = create<TransactionState>((set) => ({
    search: '',
    sort: '',
    setSearch: (value) => set({ search: value }),
    setSort: (value) => set({ sort: value })
}))