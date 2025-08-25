"use client";

import { Box } from "@mui/material";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import Protected from "@/components/Auth/Protected";
import { useMe } from "@/hooks/useAuth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useMe();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Protected>
      <Box
        sx={{
          display: "grid",
          gridTemplateAreas: `"aside header" "aside main"`,
          gridTemplateRows: "auto 1fr",
          gridTemplateColumns: "240px 1fr",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar */}
        <Box gridArea="aside">
          <Sidebar />
        </Box>

        {/* Header */}
        <Box gridArea="header">{user ? <Header user={user} /> : "Anonymous"}</Box>

        {/* Main content */}
        <Box component="main" gridArea="main" p={2}>
          {children}
        </Box>
      </Box>
    </Protected>
  );
}
