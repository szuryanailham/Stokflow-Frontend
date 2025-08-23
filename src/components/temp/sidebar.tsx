"use client";
import {
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Logo from "../assets/logo";
import {
  Dashboard,
  Logout,
  Settings,
  ShoppingBag,
  ShoppingCart,
  ShowChart,
} from "@mui/icons-material";

export default function Sidebar() {
  const navigations = [
    {
      label: "Dashboard",
      link: "/",
      active: true,
      icon: <Dashboard />,
    },
    {
      label: "Products",
      link: "/products",
      active: false,
      icon: <ShoppingBag />,
    },
    {
      label: "Transaction",
      link: "/transaction",
      active: false,
      icon: <ShoppingCart />,
    },
    {
      label: "Sales Report",
      link: "/salesreport",
      active: false,
      icon: <ShowChart />,
    },
    {
      label: "Settings",
      link: "/settings",
      active: false,
      icon: <Settings />,
    },
    {
      label: "Logout",
      link: "/logout",
      active: false,
      icon: <Logout />,
    },
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
      <Box display="flex" alignItems="center" width="100%" gap={1} mb={2}>
        <Logo className="size-10" />
        <Typography
          component="h1"
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Stockflow
        </Typography>
      </Box>
      <List sx={{ width: "100%" }}>
        {navigations.map((nav) => (
          <ListItemButton
            key={nav.label}
            selected={nav.active}
            sx={{
              borderRadius: 2,
              mb: 1,
              px: 2,
              py: 1.5,
              "&.Mui-selected": {
                bgcolor: "#635BFF", // purple background for active
                color: "white",
                "& .MuiSvgIcon-root": { color: "white" },
                "&:hover": { bgcolor: "#5146d8" },
              },
              "& .MuiSvgIcon-root": {
                color: "grey.600",
              },
              "&:hover": {
                bgcolor: "grey.100",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>{nav.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography fontWeight={nav.active ? 600 : 400}>
                  {nav.label}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
