import { Inter } from "next/font/google";
import "./globals.css";
import LayoutRoot from "@/RootPage/LayoutRoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dubai Tour",
  description: "Dubai Tour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutRoot>{children}</LayoutRoot>
      </body>
    </html>
  );
}
