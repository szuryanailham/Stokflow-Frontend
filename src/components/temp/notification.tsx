"use client";

import { Badge, IconButton, Box } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { orange } from "@mui/material/colors";

export default function NotificationButton() {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: orange[50],
        borderRadius: 3,
        p: 1,
        width: 48,
        height: 48,
      }}
    >
      <IconButton>
        <Badge
          color="error"
          variant="dot" // use dot instead of number
          overlap="circular"
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <NotificationsOutlinedIcon
            sx={{ color: orange[500], fontSize: 24 }}
          />
        </Badge>
      </IconButton>
    </Box>
  );
}
