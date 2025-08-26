"use client";

import { Box, Typography } from "@mui/material";
import SearchInput from "./searchInput";
import NotificationButton from "./notification";
import HeaderProfile from "./headerProfile";

import { HeaderProps } from "@/types/header/HeaderProps";
import { usePathname } from "next/navigation";

export default function Header({ user }: HeaderProps) {
  const { data } = user;
  const pathname = usePathname();

  // mapping route ke title
  const pageTitleMap: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/products": "Product",
    "/dashboard/products/create": "Create Product",
    "/dashboard/users": "Users",
  };

  const title = pageTitleMap[pathname] || "Dashboard";

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Title */}
      <Typography component="h2" variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>

      {/* Search di tengah */}
      <Box flex={1} mx={4}>
        <SearchInput />
      </Box>

      {/* Actions (notif + profile) */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <NotificationButton />
        <HeaderProfile name={data.name} role={data.role} avatarUrl={data.avatarUrl} />
      </Box>
    </Box>
  );
}
