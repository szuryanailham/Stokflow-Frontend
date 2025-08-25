import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

interface DiagramTransactionProps {
  saleData: number[]; // sale amounts/prices
  purchaseData: number[]; // purchase amounts/prices
  xLabels?: string[]; // optional labels for x-axis
  height?: number; // optional chart height
}

export default function DiagramTransaction({ saleData, purchaseData, xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], height = 300 }: DiagramTransactionProps) {
  return (
    <LineChart
      height={height}
      series={[
        { data: saleData, label: "Sale" },
        { data: purchaseData, label: "Purchase" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      yAxis={[{ width: 50 }]}
      margin={{ right: 24 }}
    />
  );
}
