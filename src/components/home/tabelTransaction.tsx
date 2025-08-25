"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTransactions } from "@/hooks/useTransactions";
import { Transaction } from "@/types/transaction/transactionType";

export default function TabelTransaction() {
  const [page] = React.useState(1);
  const limit = 10;

  const { data, isLoading } = useTransactions(page, limit);

  if (isLoading) return <p>Loading...</p>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="transaction table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>No</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Transaction Code</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Transaction Type</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Buyer/Seller</TableCell>
            <TableCell sx={{ fontWeight: 600 }} align="right">
              Total Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row: Transaction, index: number) => (
            <TableRow key={row.id}>
              <TableCell>{(page - 1) * limit + index + 1}</TableCell>
              <TableCell>{row.transactionCode}</TableCell>
              <TableCell>{row.transactionType}</TableCell>
              <TableCell>{row.buyerSellerName}</TableCell>
              <TableCell align="right">
                {Number(row.totalAmount).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
