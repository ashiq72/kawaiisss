import { Inter } from "next/font/google";
import "./globals.css";
import MainNavber from "./components/Shared/Navber/MainNavber";
import { StoreProvider } from "@/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import TextScrolling from "./components/Shared/InfiniteScrolling/TextScrolling";
import AuthProvider from "@/utilis/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kawaiisss | Ethically made handcrafted products",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            <TextScrolling />
            <MainNavber />
            <Toaster position="top-center " />
            <ToastContainer />
            {children}
            <Footer />
          </body>
        </html>
      </StoreProvider>
    </AuthProvider>
  );
}
