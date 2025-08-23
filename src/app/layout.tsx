import "./globals.css";
import Providers from "./providers";
export const metadata = {
  title: "My App",
  description: "Authentication example with Next.js 15, TanStack Query, and Axios",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
