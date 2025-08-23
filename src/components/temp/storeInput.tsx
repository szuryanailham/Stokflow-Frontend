"use client";
import { Storefront } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";

export default function StoreInput() {
  return (
    <TextField
      label="Store Name"
      type="text"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Storefront />
            </InputAdornment>
          ),
        },
      }}
      sx={{ mb: 2 }}
      fullWidth
    />
  );
}
