import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
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

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "Zemalt | Digital Marketing, SEO & Web Design Services.";
const description =
  "Zemalt offers expert SEO, content writing, web design, UI/UX, and digital marketing services to build brands, boost rankings, and drive business growth";

const url = "https://zemalt.com";
const image = "/favicon.png";

export const metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zemalt",
              url: "https://zemalt.com",
              logo: "https://zemalt.com/favicon.png",
              sameAs: [
                "https://www.linkedin.com/company/zemalt/",
                "https://www.instagram.com/zemaltpvtltd/",
                "https://www.facebook.com/zemaltpvtltd",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable}`}
      >
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            pauseOnHover={false}
            newestOnTop
          />
          <ViewCounter />
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
