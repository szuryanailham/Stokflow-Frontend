import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import type { ProductsResponse } from "@/types/products/products"; // path sesuai folder project

export function useTotalProducts() {
  return useQuery({
    queryKey: ["totalProducts"],
    queryFn: async () => {
      const { data } = await api.get("/api/products"); // endpoint sesuai API kamu
      return data.data.total;
    },
  });
}

export function useProducts(page: number, limit: number) {
  return useQuery<ProductsResponse>({
    queryKey: ["products", page, limit],
    queryFn: async (): Promise<ProductsResponse> => {
      const { data } = await api.get(`/api/products?page=${page}&limit=${limit}`);
      return data.data as ProductsResponse;
    },
    keepPreviousData: true,
  });
}
