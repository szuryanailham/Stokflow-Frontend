"use client";

import ProductsTable from "@/components/products/list-product";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const redirect = () => {
    router.push("/dashboard/products/create");
  };

  return (
    <Box>
      <Box sx={{ mb: 1, px: 4 }} display="flex" alignItems="center" justifyContent="space-between" gap={2}>
        <Typography variant="h6" gutterBottom>
          List Products
        </Typography>
        <Button onClick={redirect} variant="outlined" startIcon={<AddIcon />} sx={{ bgcolor: "#5D5FEF", color: "white" }}>
          Create
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}
