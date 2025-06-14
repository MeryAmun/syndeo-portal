"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Provider store={store}>
     <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar />
      <div className="">
          {children}
      </div>
          <Footer />
      </body>
      
    </html>
   </Provider>
  );
}
