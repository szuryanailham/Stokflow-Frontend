"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography, Box } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import CardInfo from "@/components/home/cardInfo";
import AddIcon from "@mui/icons-material/Add";
import DiagramTransaction from "@/components/home/diagaramTransaction";
import TabelTransaction from "@/components/home/tabelTransaction";
import CardNotification from "@/components/home/cardNotification";
import { useTotalProducts } from "@/hooks/useProduct";
import { useTransactionStats } from "@/hooks/useTransactions";
import ConvertRupiah from "../lib/convertRupiah";
export default function DashboardPage() {
  const { data: totalProducts } = useTotalProducts();
  const { data: transactionStats } = useTransactionStats();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {/* Container Dashboard one  */}
        <Grid p={1} size={{ xs: 6, md: 8 }}>
          <Grid>
            <Box sx={{ mb: 1 }} display="flex" alignItems="center" justifyContent="space-between" gap={2}>
              <Typography variant="h6" gutterBottom>
                Sales summary
              </Typography>
              <Button variant="outlined" startIcon={<IosShareIcon />} sx={{ borderColor: "black", color: "black" }}>
                Export
              </Button>
            </Box>

            {/*  ========= Analisis Box Summerly  =========*/}
            <Grid container spacing={1}>
              {/* card info 1 */}
              <Grid size="grow">
                <CardInfo iconSrc="/icons/total-prodcut-icons.svg" alt="Total Transactions Icon" value={totalProducts} title="Total Product" subtitle="+5% from yesterday" bgColor="#FFE2E5" />
              </Grid>
              {/* card info 2 */}
              <Grid size="grow">
                <CardInfo iconSrc="/icons/total-transaction-icons.svg" alt="Total Transactions Icon" value={transactionStats?.totalTransactions} title="Transactions" subtitle="+5% from yesterday" bgColor="#FFF4DE" />
              </Grid>
              {/* card info 3 */}
              <Grid size={5}>
                <CardInfo iconSrc="/icons/total-revenue-icons.svg" alt="Total Revenue Icon" value={ConvertRupiah(transactionStats?.totalRevenue)} title="Total Revenue" subtitle="+12% from yesterday" bgColor="#DCFCE7" />
              </Grid>
            </Grid>
            {/*  ========= Tabel New Transaction  =========*/}
            <Box sx={{ mt: 2, mb: 2 }} display="flex" alignItems="center" justifyContent="space-between" gap={2}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "normal" }}>
                Latest Transaction
              </Typography>

              <Button variant="outlined" startIcon={<AddIcon />} sx={{ bgcolor: "#5D5FEF", color: "white" }}>
                Create
              </Button>
            </Box>
            {/* ========== Tabel Updated Transaction ========== */}
            <TabelTransaction />
          </Grid>
        </Grid>
        {/* Container Dashboard two */}
        <Grid size={{ xs: 6, md: 4 }}>
          <Box sx={{ overflowX: "auto" }}>
            <Box sx={{ minWidth: 700 }}>
              {" "}
              {/* Atur minimal width supaya scroll muncul */}
              <DiagramTransaction
                saleData={[2400, 1398, 9800, 3908, 4800, 3800, 4300]} // Senin → Minggu
                purchaseData={[4000, 3000, 2000, 2780, 1890, 2390, 3490]} // Senin → Minggu
                xLabels={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
              />
            </Box>
          </Box>
          <Box>
            {/* Notification Stuck low */}
            <Box>
              <Box>
                {" "}
                {/* mt: 3 artinya margin-top sekitar 24px */}
                <CardNotification />
                <CardNotification />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
