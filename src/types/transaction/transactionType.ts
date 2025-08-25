export interface Transaction {
  id: number;
  transactionCode: string;
  transactionType: string;
  totalAmount: string;
  transactionDate: string;
  buyerSellerName: string;
  notes: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface Pagination {
  limit: number;
  offset: number;
}

export interface TransactionResponse {
  data: {
    transactions: Transaction[];
    pagination: Pagination;
  };
}
