// Tipe untuk 1 produk
export type Product = {
  id: number;
  sku: string;
  productName: string;
  description: string | null;
  isActive: boolean;
  purchasePrice: string;
  sellingPrice: string;
  currentStockQty: number;
  minStockThreshold: number;
  createdAt: string;
  updatedAt: string;
};

// Tipe untuk wrapper products
export type ProductsResponse = {
  products: Product[];
  total: number;
};
