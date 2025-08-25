export type CardInfoProps = {
  iconSrc: string;
  alt: string;
  value: number | string | undefined; // <-- tambahkan undefined
  title: string;
  subtitle?: string;
  bgColor?: string;
};
