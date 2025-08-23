"use client";

import { useLogout } from "@/hooks/useAuth";

export default function DashboardPage() {
  // const { data: user } = useMe();
  const logoutMutation = useLogout();
  return (
    <div className="p-6">
      {/* <h1 className="text-2xl">Welcome, {user?.data.name}</h1> */}
      <button onClick={() => logoutMutation.mutate()} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
        Logout
      </button>
    </div>
  );
}
