import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Plant Based Vegan Recipes for Vibrant Life | TheVeganVibrance",
  description:
    "TheVeganVibrance offers easy plant based vegan recipes, nutrition tips to boost health and energy. Perfect for anyone looking to eat clean and live vibrant.",
  icons: {
    icon: [
      { url: "/TheVeganVibrance.png" },
      { url: "/TheVeganVibrance.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/TheVeganVibrance.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  openGraph: {
    title: "Plant Based Vegan Recipes for Vibrant Life | TheVeganVibrance",
    description:
      "TheVeganVibrance offers easy plant based vegan recipes, nutrition tips to boost health and energy. Perfect for anyone looking to eat clean and live vibrant.",
    images: [
      {
        url: "https://theveganvibrance.com/TheVeganVibrance.png",
        width: 800,
        height: 600,
        alt: "TheVeganVibrance Logo",
      },
    ],
    siteName: "TheVeganVibrance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plant Based Vegan Recipes for Vibrant Life | TheVeganVibrance",
    description:
      "TheVeganVibrance offers easy plant based vegan recipes, nutrition tips to boost health and energy. Perfect for anyone looking to eat clean and live vibrant.",
    images: [
      {
        url: "https://theveganvibrance.com/TheVeganVibrance.png",
        width: 800,
        height: 600,
        alt: "TheVeganVibrance Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TLSBWWQV4J"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-TLSBWWQV4J');
            `,
          }}
        ></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283636579212292"
          crossorigin="anonymous"
        ></Script>
        <meta
          name="google-site-verification"
          content="jbeyorTIeLW5suL-PH_Vce7zTDJReU-h1TVmCZITRm0"
        ></meta>
        <meta
          name="google-adsense-account"
          content="ca-pub-2283636579212292"
        ></meta>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
