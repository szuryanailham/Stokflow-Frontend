import { Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function cardNotification() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 2,
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
        gap: 2,
        cursor: "pointer",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <NotificationsIcon sx={{ color: "#FF6B6B", fontSize: 40 }} />
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#151D48" }}>
          Low Stock Alert
        </Typography>
        <Typography variant="body2" sx={{ color: "#151D48" }}>
          3 products are running low in stock
        </Typography>
      </Box>
    </Box>
  );
}
