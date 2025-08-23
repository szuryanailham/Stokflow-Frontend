"use client";

import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchInput() {
  return (
    <TextField
      placeholder="Search here..."
      variant="outlined"
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "#5D5FEF" }} /> {/* purple search icon */}
            </InputAdornment>
          ),
        },
      }}
      sx={{
        width: 300,
        bgcolor: "grey.50", // light background
        borderRadius: 3,
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          "& fieldset": { border: "none" }, // remove border
        },
      }}
    />
  );
}
