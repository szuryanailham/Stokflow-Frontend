import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { TransactionResponse } from "@/types/transaction/transactionType";

export function useTransactions(page: number, limit: number) {
  return useQuery<TransactionResponse>({
    queryKey: ["transactions", page, limit],
    queryFn: async () => {
      const { data } = await api.get<TransactionResponse>(`/api/transactions?page=${page}&limit=${limit}`);
      return data;
    },
  });
}
