"use client";
import { Box } from "@mui/material";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import Protected from "@/components/Auth/Protected";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Protected>
      <Box
        display="grid"
        gridTemplateAreas={`
        "aside header"
        "aside main"
      `}
        gridTemplateRows="auto 1fr"
        gridTemplateColumns="240px 1fr"
        minHeight="100vh"
      >
        {/* Sidebar */}
        <Box gridArea="aside">
          <Sidebar />
        </Box>

        {/* Header */}
        <Box gridArea="header">
          <Header />
        </Box>

        {/* Main content */}
        <Box gridArea="main" p={2}>
          {children}
        </Box>
      </Box>
    </Protected>
  );
}
