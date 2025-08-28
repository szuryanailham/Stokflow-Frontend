"use client";
import { Box, Button, Typography, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import { CreateProductInput } from "@/types/products/products";
import { useCreateProduct } from "@/hooks/products/useProduct";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState<"success" | "error">("success");

  const { register, handleSubmit, reset } = useForm<CreateProductInput>({
    defaultValues: {
      productName: "",
      description: "",
      purchasePrice: 0,
      sellingPrice: 0,
      currentStockQty: 0,
      minStockThreshold: 0,
    },
  });

  const { mutate: createProduct, isPending } = useCreateProduct();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const onSubmit = (data: CreateProductInput) => {
    createProduct(data, {
      onSuccess: () => {
        setSnackbarMsg("✅ Product successfully created!");
        setSnackbarSeverity("success");
        setOpen(true);
        reset();
      },
      onError: () => {
        setSnackbarMsg("❌ Failed to create product. Please try again.");
        setSnackbarSeverity("error");
        setOpen(true);
      },
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mb: 1, padding: 2 }} textAlign="center" gap={2}>
        <Typography variant="h5" gutterBottom>
          New Product
        </Typography>

        <Box display="flex" gap={1} sx={{ p: 2 }}>
          {/* Section kiri */}
          <Box flex={1} sx={{ p: 2, borderRadius: 2 }}>
            <TextField fullWidth label="Name Product" variant="outlined" {...register("productName")} />
            <TextField sx={{ mt: 4 }} fullWidth type="number" label="Selling Price" variant="outlined" {...register("sellingPrice", { valueAsNumber: true })} />
            <TextField sx={{ mt: 4 }} fullWidth label="Description" multiline rows={4} {...register("description")} />
          </Box>

          {/* Section kanan */}
          <Box flex={1} sx={{ p: 2, borderRadius: 2 }}>
            <TextField fullWidth type="number" label="Purchase Price" variant="outlined" {...register("purchasePrice", { valueAsNumber: true })} />
            <TextField sx={{ mt: 4 }} fullWidth type="number" label="Current Stock" variant="outlined" {...register("currentStockQty", { valueAsNumber: true })} />
            <TextField sx={{ mt: 4 }} fullWidth type="number" label="Min Stock Threshold" variant="outlined" {...register("minStockThreshold", { valueAsNumber: true })} />
          </Box>
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={isPending}
          sx={{
            bgcolor: "#5D5FEF",
            color: "white",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            "&:hover": { bgcolor: "#4C4DDD" },
          }}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </Box>

      {/* Snackbar */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
        <Alert onClose={handleClose} severity={snackbarSeverity} variant="filled" sx={{ width: "100%" }}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </>
  );
}
