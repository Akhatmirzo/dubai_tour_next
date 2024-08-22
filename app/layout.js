import { Volkhov, Poppins, Yesteryear } from "next/font/google";
import "./globals.css";
import LayoutRoot from "@/RootPage/LayoutRoot";

// const inter = Inter({ subsets: ["latin"] });
const volkhov = Volkhov({ subsets: ["latin"], weight: ['400', '700'], variable: "--font-volkhov" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const yesteryear = Yesteryear({ subsets: ["latin"], weight: ['400'], variable: "--font-yesteryear" });

export const metadata = {
  title: "Dubai Tour",
  description: "Dubai Tour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${volkhov.variable} ${yesteryear.variable}`}>
        <LayoutRoot>{children}</LayoutRoot>
      </body>
    </html>
  );
}
