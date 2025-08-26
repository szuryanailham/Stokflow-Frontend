"use client";
import { Typography, Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Logo from "@/assets/logo";
import { Dashboard, Logout, Settings, ShoppingBag, ShoppingCart, ShowChart } from "@mui/icons-material";
import { useLogout } from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const logoutMutation = useLogout();
  const pathname = usePathname();
  const router = useRouter();

  const navigations = [
    { label: "Dashboard", link: "/dashboard", icon: <Dashboard /> },
    { label: "Products", link: "/dashboard/products", icon: <ShoppingBag /> },
    { label: "Transaction", link: "/transaction", icon: <ShoppingCart /> },
    { label: "Sales Report", link: "/salesreport", icon: <ShowChart /> },
    { label: "Settings", link: "/settings", icon: <Settings /> },
    { label: "Logout", link: "/logout", icon: <Logout /> },
  ];

  return (
    <Box
      component="aside"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        height: "100vh",
        background: "white",
      }}
    >
      {/* Logo & title */}
      <Box display="flex" alignItems="center" width="100%" gap={1} mb={2}>
        <Logo className="size-10" />
        <Typography component="h1" variant="h5" sx={{ textAlign: "center", fontWeight: 600 }}>
          Stockflow
        </Typography>
      </Box>

      {/* Navigation */}
      <List sx={{ width: "100%" }}>
        {navigations.map((nav) => {
          const isActive = pathname === nav.link;

          return (
            <ListItemButton
              key={nav.label}
              selected={isActive}
              onClick={
                () => (nav.label === "Logout" ? logoutMutation.mutate() : router.push(nav.link)) // gunakan Next.js router
              }
              sx={{
                borderRadius: 2,
                mb: 1,
                px: 2,
                py: 1.5,
                "&.Mui-selected": {
                  bgcolor: "#635BFF",
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                  "&:hover": { bgcolor: "#5146d8" },
                },
                "& .MuiSvgIcon-root": { color: "grey.600" },
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>{nav.icon}</ListItemIcon>
              <ListItemText primary={<Typography fontWeight={isActive ? 600 : 400}>{nav.label}</Typography>} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
