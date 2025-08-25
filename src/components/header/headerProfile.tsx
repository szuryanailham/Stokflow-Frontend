"use client";

import { Avatar, Box, Typography } from "@mui/material";
import { HeaderProfileProps } from "@/types/header/HeaderProfileProps";

export default function HeaderProfile({ name, role, avatarUrl }: HeaderProfileProps) {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Avatar src={avatarUrl || "https://placehold.co/400x400.webp"} alt={name} sx={{ width: 54, height: 54, borderRadius: 3 }} />

      <Box>
        <Typography variant="subtitle1" fontWeight={700} color="text.primary">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {role}
        </Typography>
      </Box>
    </Box>
  );
}
