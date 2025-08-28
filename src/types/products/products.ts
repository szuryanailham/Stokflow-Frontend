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

export type CreateProductInput = {
  sku: string;
  productName: string;
  description: string;
  purchasePrice: number;
  sellingPrice: number;
  currentStockQty: number;
  minStockThreshold?: number;
};

export interface ProductsResponse {
  data: {
    products: Product[];
    total: number;
    pagination: {
      limit: number;
      offset: number;
    };
  };
}

export type ResponseCreateProduct = {
  message: string;
  data: {
    product: Product;
  };
};
