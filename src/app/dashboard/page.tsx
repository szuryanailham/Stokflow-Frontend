"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography, Box } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import CardInfo from "@/components/home/cardInfo";
import AddIcon from "@mui/icons-material/Add";
import TabelTransaction from "@/components/home/tabelTransaction";
export default function DashboardPage() {
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
                <CardInfo iconSrc="/icons/total-prodcut-icons.svg" alt="Total Transactions Icon" value={50} title="Total Product" subtitle="+5% from yesterday" bgColor="#FFE2E5" />
              </Grid>
              {/* card info 2 */}
              <Grid size="grow">
                <CardInfo iconSrc="/icons/total-transaction-icons.svg" alt="Total Transactions Icon" value={50} title="Transactions" subtitle="+5% from yesterday" bgColor="#FFF4DE" />
              </Grid>
              {/* card info 3 */}
              <Grid size={5}>
                <CardInfo iconSrc="/icons/total-revenue-icons.svg" alt="Total Revenue Icon" value="Rp.1000.000" title="Total Revenue" subtitle="+12% from yesterday" bgColor="#DCFCE7" />
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
        <Grid size={{ xs: 6, md: 4 }}></Grid>
      </Grid>
    </Box>
  );
}
