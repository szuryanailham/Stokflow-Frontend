import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";
import { Product, ProductsResponse, CreateProductInput, ResponseCreateProduct } from "@/types/products/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation<ResponseCreateProduct, Error, CreateProductInput>({
    mutationFn: async (newProduct) => {
      const { data } = await api.post<ResponseCreateProduct>("/api/products", newProduct);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await api.patch(`/api/products/${id}/soft-delete`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.error("Failed to delete product:", error);
    },
  });
}
