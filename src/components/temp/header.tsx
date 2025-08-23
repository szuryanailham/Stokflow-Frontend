import { Box, Typography } from "@mui/material";
import SearchInput from "./searchInput";
import NotificationButton from "./notification";
import HeaderProfile from "./headerProfile";

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        sx={{
          fontWeight: 600,
        }}
      >
        Dashboard
      </Typography>
      <SearchInput />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <NotificationButton />
        <HeaderProfile />
      </Box>
    </Box>
  );
}
