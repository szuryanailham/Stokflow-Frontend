import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { TransactionResponse, Transaction } from "@/types/transaction/transactionType";

// Hook untuk mendapatkan array transaksi
export function useTransactions(page: number, limit: number) {
  return useQuery<Transaction[]>({
    queryKey: ["transactions", page, limit],
    queryFn: async () => {
      const { data } = await api.get<TransactionResponse>(`/api/transactions?page=${page}&limit=${limit}`);
      return data.data.transactions.transactions;
    },
  });
}

export function useTransactionStats() {
  return useQuery<{ totalTransactions: number; totalRevenue: string }>({
    queryKey: ["transactionStats"],
    queryFn: async () => {
      const { data } = await api.get<TransactionResponse>(`/api/transactions`);

      const totalTransactions = data.data.transactions.totalTransactions;
      const totalRevenue = data.data.transactions.totalRevenue;

      return { totalTransactions, totalRevenue };
    },
  });
}
