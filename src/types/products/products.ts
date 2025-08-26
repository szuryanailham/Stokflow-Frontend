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

// export interface ProductResponse {
//   products: Product[];
//   total: number;
//   pagination: {
//     page: number;
//     limit: number;
//   };
// }

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
