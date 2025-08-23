import { useState } from "react";
import { useLogin } from "@/hooks/useAuth";
import { Box, Button, TextField, Alert, Stack } from "@mui/material";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        mx: "auto",
      }}
    >
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />

      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />

      <Button type="submit" variant="contained" color="primary" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Loading..." : "Login"}
      </Button>

      <Stack spacing={1}>
        {loginMutation.isError && <Alert severity="error">Login gagal, periksa email & password.</Alert>}
        {loginMutation.isSuccess && <Alert severity="success">Login berhasil!</Alert>}
      </Stack>
    </Box>
  );
}
