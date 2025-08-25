"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMe } from "@/hooks/useAuth";

export default function Protected({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const { data: user, isLoading } = useMe();
  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady && !isLoading && !user) {
      router.replace("/login");
    }
  }, [isReady, isLoading, user, router]);

  if (!isReady || isLoading) return <p>Loading...</p>;
  if (!user) return null;

  return <>{children}</>;
}
