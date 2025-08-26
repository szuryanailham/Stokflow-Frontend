import { TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { ChangeEvent } from "react";

type EmailInputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function EmailInput({ value, onChange, required }: EmailInputProps) {
  return (
    <TextField
      label="Email"
      type="email"
      value={value}
      placeholder="owner@stokflow.com"
      onChange={onChange}
      required={required}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      sx={{ mb: 2 }}
      fullWidth
    />
  );
}
