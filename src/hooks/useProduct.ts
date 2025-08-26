import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { Product, ProductsResponse } from "@/types/products/products";

export function useTotalProducts() {
  return useQuery({
    queryKey: ["totalProducts"],
    queryFn: async () => {
      const { data } = await api.get("/api/products");
      return data.data.total;
    },
  });
}

export function useProducts(page: number, limit: number) {
  return useQuery<Product[]>({
    queryKey: ["products", page, limit],
    queryFn: async () => {
      const { data } = await api.get<ProductsResponse>(`/api/products?page=${page}&limit=${limit}`);
      return data.data.products;
    },
  });
}
