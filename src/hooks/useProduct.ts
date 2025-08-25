import { useQuery } from "@tanstack/react-query";
import api from "@/app/lib/axios";

export function useTotalProducts() {
  return useQuery({
    queryKey: ["totalProducts"],
    queryFn: async () => {
      const { data } = await api.get("/api/products"); // endpoint sesuai API kamu
      console.log(data);
      return data.data.products.total; // ambil total product
    },
  });
}
