import ProductsTable from "@/components/products/list-product";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
function page() {
  return (
    <Box>
      <Box sx={{ mb: 1, px: 4 }} display="flex" alignItems="center" justifyContent="space-between" gap={2}>
        <Typography variant="h6" gutterBottom>
          List Products
        </Typography>
        <Button variant="outlined" startIcon={<AddIcon />} sx={{ bgcolor: "#5D5FEF", color: "white" }}>
          Create
        </Button>
      </Box>
      <ProductsTable />
    </Box>
  );
}

export default page;
