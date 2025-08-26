"use client";
import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProducts, useTotalProducts } from "@/hooks/useProduct";
import { Product } from "@/types/products/products";

export default function ProductsTable() {
  const [page, setPage] = React.useState(0); // MUI pagination mulai dari 0
  const [limit, setLimit] = React.useState(10);

  const { data: productData, isLoading, isError } = useProducts(page + 1, limit);
  const { data: totalData } = useTotalProducts();

  // Fallback agar map aman
  const products: Product[] = productData ?? [];
  const total: number = totalData?.total ?? 0;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products data</p>;

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="products table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>SKU Product</TableCell>
              <TableCell>Name Product</TableCell>
              <TableCell align="right">Purchase Price</TableCell>
              <TableCell align="right">Selling Price</TableCell>
              <TableCell align="center">Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{page * limit + index + 1}</TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell align="right">
                  {Number(row.purchasePrice).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </TableCell>
                <TableCell align="right">
                  {Number(row.sellingPrice).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" size="small">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={total}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        rowsPerPage={limit}
        onRowsPerPageChange={(e) => {
          setLimit(parseInt(e.target.value, 10));
          setPage(0); // reset ke halaman pertama
        }}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </Paper>
  );
}
