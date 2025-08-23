"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/app/lib/axios";

// ---------------- LOGIN ----------------
export function useLogin() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const res = await api.post("/api/users/login", { email, password });
      return res.data;
    },
    onSuccess: async (data) => {
      const token = data.data.token;
      localStorage.setItem("token", token);

      setTimeout(async () => {
        await queryClient.invalidateQueries({ queryKey: ["me"] });
      }, 3000);
    },
    onError: (error) => {
      console.error("❌ Error login:", error);
    },
  });

  return mutation;
}

// ---------------- LOGOUT ----------------
export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async () => {
      localStorage.removeItem("token");
    },
    onSuccess: () => {
      queryClient.clear();
      router.push("/login");
    },
  });

  return mutation;
}

// ---------------- GET CURRENT USER ----------------
export function useMe() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      console.log("Token", token);
      if (!token) return null;

      const res = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    enabled: isClient && !!localStorage.getItem("token"),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}
