import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { CardInfoProps } from "@/types/home/cardInfoProps";

function CardInfo({ iconSrc, alt, value, title, subtitle, bgColor = "#FFE2E5" }: CardInfoProps) {
  return (
    <Box
      component={Paper}
      sx={{
        p: 2,
        bgcolor: bgColor,
        borderRadius: 2,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Image alt={alt} src={iconSrc} width={50} height={50} />

      <Typography variant="h5" sx={{ color: "#151D48", fontWeight: 600, fontSize: "22px" }}>
        {value}
      </Typography>

      <Typography variant="h6" sx={{ color: "#151D48", fontWeight: 500 }}>
        {title}
      </Typography>

      {subtitle && (
        <Typography color="#5D5FEF" variant="caption" gutterBottom sx={{ display: "block" }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default CardInfo;
