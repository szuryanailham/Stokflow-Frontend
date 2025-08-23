"use client";

import { Avatar, Box, Typography } from "@mui/material";

export default function HeaderProfile() {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {/* Profile picture */}
      <Avatar
        src="https://placehold.co/400x400.webp" // replace with your image path
        alt="Musfiq"
        sx={{ width: 54, height: 54, borderRadius: 3 }} // rounded-square
      />

      {/* Name + Role */}
      <Box>
        <Typography variant="subtitle1" fontWeight={700} color="text.primary">
          Musfiq
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Admin
        </Typography>
      </Box>
    </Box>
  );
}
