import { store } from "@/store/store";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
