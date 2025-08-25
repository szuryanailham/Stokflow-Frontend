// src/app/lib/convertRupiah.ts
export function convertRupiah(value?: number | string): string {
  // Jika value kosong atau undefined, kembalikan "Rp0"
  if (value === null || value === undefined) return "Rp0";

  // Pastikan value jadi number
  const numberValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numberValue)) return "Rp0";

  return numberValue.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}

export default convertRupiah;
