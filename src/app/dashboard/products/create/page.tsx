"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

export default function Page() {
  return (
    <Box sx={{ mb: 1, padding: 2 }} textAlign="center" gap={2}>
      <Typography variant="h5" gutterBottom>
        New Product
      </Typography>
      <Box display="flex" gap={2} sx={{ p: 2 }}>
        {/* Section kiri */}
        <Box flex={1} sx={{ bgcolor: "#f5f5f5", p: 2, borderRadius: 2 }}>
          Section Kiri
        </Box>

        {/* Section kanan */}
        <Box flex={1} sx={{ bgcolor: "#e0e0e0", p: 2, borderRadius: 2 }}>
          Section Kanan
        </Box>
      </Box>
    </Box>
  );
}
