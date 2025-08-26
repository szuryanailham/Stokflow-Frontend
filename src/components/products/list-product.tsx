"use client";
import * as React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProducts } from "@/hooks/useProduct";
import { Product } from "@/types/products/products"; // pastikan kamu punya type ini

export default function ProductsTable() {
  const [page, setPage] = React.useState(0); // MUI mulai dari 0
  const [limit, setLimit] = React.useState(10);

  const { data, isLoading, isError } = useProducts(page + 1, limit);

  // type fallback kalau data belum ada

  const products: Product[] = data?.products ?? [];
  const total: number = data?.total ?? 0;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load products</p>;

  console.log(products);

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
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
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
      />
    </Paper>
  );
}
