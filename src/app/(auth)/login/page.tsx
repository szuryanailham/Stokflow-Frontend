"use client";

import { useState } from "react";
import { Box, Button, Container, Typography, Alert, Stack } from "@mui/material";
import EmailInput from "@/components/Auth/emailInput";
import PasswordInput from "@/components/Auth/passwordInput";
import { useLogin } from "@/hooks/useAuth";
import Logo from "@/assets/logo";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/");
        },
      }
    );
  };

  return (
    <div className="relative bg-[#5D5FEF] h-screen overflow-hidden grid place-content-center">
      {/* Background gradients */}
      <div className="absolute bg-[linear-gradient(-130.99deg,rgba(255,255,255,0.4)_-16.86%,rgba(255,255,255,0)_44.99%)] w-[2512px] h-[1533px] bottom-0 left-0 rounded-full -translate-x-450 translate-y-325 2xl:-translate-x-400 2xl:translate-y-300 z-0"></div>
      <div className="absolute bg-[linear-gradient(100deg,rgba(255,255,255,0.4)_-16.86%,rgba(255,255,255,0)_44.99%)] w-[2512px] h-[1533px] bottom-0 left-0 rounded-full translate-x-60 -translate-y-90 2xl:translate-x-100 2xl:-translate-y-125 z-0"></div>

      {/* Card */}
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "white",
          borderRadius: 4,
          py: 4,
          px: 3,
          boxShadow: 3,
        }}
        className="z-10"
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <Logo className="w-16 h-16" />
          <Typography component="h1" variant="h4" sx={{ textAlign: "center", fontWeight: 700 }}>
            Stockflow
          </Typography>
        </div>
        {/* Feedback */}
        <Stack spacing={1} sx={{ mt: 2, mb: 2 }}>
          {loginMutation.isError && <Alert severity="error">Login gagal, periksa email & password.</Alert>}
          {loginMutation.isSuccess && <Alert severity="success">Login berhasil!</Alert>}
        </Stack>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <EmailInput value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />
          <PasswordInput label="Password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />

          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#6358DC", mt: 2, py: 1.2 }} disabled={loginMutation.isPending}>
            {loginMutation.isPending ? "Loading..." : "Login"}
          </Button>

          <Typography component="p" variant="body2" sx={{ textAlign: "center", mt: 2 }}>
            Belum punya akun?
            <Button
              href="/registration"
              sx={{
                textTransform: "none",
                color: "#6358DC",
                fontWeight: 600,
              }}
            >
              Daftar Toko Baru
            </Button>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
