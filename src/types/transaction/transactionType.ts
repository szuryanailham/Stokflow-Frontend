// TypeScript interfaces
export interface Transaction {
  id: number;
  transactionCode: string;
  transactionType: "PURCHASE" | "SALE";
  totalAmount: string;
  transactionDate: string;
  buyerSellerName: string;
  notes?: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface TransactionsData {
  totalTransactions: number;
  totalRevenue: string;
  transactions: Transaction[];
}

export interface TransactionResponse {
  data: {
    transactions: TransactionsData;
    pagination: {
      limit: number;
      offset: number;
    };
  };
}
