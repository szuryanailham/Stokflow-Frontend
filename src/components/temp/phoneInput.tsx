"use client";
import { TextField, InputAdornment } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function PhoneInput() {
  return (
    <TextField
      label="Phone"
      type="tel"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{ mb: 2 }}
      fullWidth
    />
  );
}
