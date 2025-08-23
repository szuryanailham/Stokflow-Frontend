"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/app/lib/axios";

export function useLogin() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await api.post("/api/users/login", { email, password });
      return res.data;
    },
    onSuccess: (data) => {
      const token = data.data.token;
      localStorage.setItem("token", token);
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
    onError: (error) => {
      console.error("❌ Error login:", error);
    },
    onSettled: (data, error, variables, context) => {
      console.log("🔄 Mutation selesai");
      console.log({ data, error, variables, context });
    },
  });

  return {
    ...mutation,
  };
}

// LOGOUT
export function useLogout() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      localStorage.removeItem("token");
    },
    onSuccess: () => {
      queryClient.clear();
    },
  });

  return {
    ...mutation,
  };
}

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) return null;

      const res = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    },
    // enabled: !!localStorage.getItem("token"), // hanya jalan kalau token ada
  });
}
