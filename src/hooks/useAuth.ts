"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import api from "@/app/lib/axios";
import type { AxiosError } from "axios";
import { UserAuthProps } from "@/types/user/UserPropsAuth";

// ---------------- LOGIN ----------------
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await api.post("/api/users/login", { email, password });
      return res.data;
    },
    onSuccess: async (data) => {
      const token = data.data.token;
      localStorage.setItem("token", token);

      // langsung fetch ulang user
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    },
    onError: (error: AxiosError) => {
      console.error("❌ Error login:", error.response?.data || error.message);
    },
  });
}

// ---------------- LOGOUT ----------------
export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      localStorage.removeItem("token");
    },
    onSuccess: () => {
      queryClient.removeQueries(); // hapus semua cache
      router.push("/login");
    },
  });
}

// ---------------- GET CURRENT USER ----------------
export function useMe() {
  return useQuery<UserAuthProps | null, AxiosError>({
    queryKey: ["me"],
    queryFn: async () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (!token) return null;

      try {
        const res = await api.get<UserAuthProps>("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        return res.data;
      } catch (err) {
        const error = err as AxiosError;

        if (error.response?.status === 401) {
          localStorage.removeItem("token");

          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }

        throw error; // biar react-query tau ada error
      }
    },
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
    staleTime: 5 * 60 * 1000, // cache 5 menit
    retry: false,
  });
}
