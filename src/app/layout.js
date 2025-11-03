import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { Providers } from "./Providers";
import { ToastContainer } from "react-toastify";
import ViewCounter from "@/Components/ViewCounter/ViewCounter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zemalt | Digital Marketing, SEO & Web Design Services.",
  description:
    "Zemalt offers expert SEO, content writing, web design, UI/UX, and digital marketing services to build brands, boost rankings, and drive business growth",
    robots: "noindex, nofollow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
           <ToastContainer
          position="top-right"
          autoClose={1500}
          pauseOnHover={false}
          newestOnTop
        />
        <ViewCounter />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
