import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "The Vegan Vibrance | Healthy, Delicious & Sustainable Vegan Recipes",
  description:
    "Your ultimate resource for vegan recipes, nutrition tips, and eco-conscious living. The Vegan Vibrance helps you live a healthier, more vibrant life.",
  icons: {
    icon: [
      { url: "/veganvibrance.png" },
      { url: "/veganvibrance.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/veganvibrance.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "The Vegan Vibrance | Healthy, Delicious & Sustainable Vegan Recipes",
    description:
      "Your ultimate resource for vegan recipes, nutrition tips, and eco-conscious living. The Vegan Vibrance helps you live a healthier, more vibrant life.",
    images: [
      {
        url: "https://theveganvibrance.com/veganvibrance.png",
        width: 800,
        height: 600,
        alt: "Veganvibrance Logo",
      },
    ],
    siteName: "Veganvibrance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vegan Vibrance | Healthy, Delicious & Sustainable Vegan Recipes",
    description:
      "Your ultimate resource for vegan recipes, nutrition tips, and eco-conscious living. The Vegan Vibrance helps you live a healthier, more vibrant life.",
    images: [
      {
        url: "https://theveganvibrance.com/veganvibrance.png",
        width: 800,
        height: 600,
        alt: "Veganvibrance Logo",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-T02TC97Y4Y"
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
              gtag('config', 'G-T02TC97Y4Y');
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
          content="-vEQwCv3N-7CYJlks9qASX9zmgZ-7sbhBPfH4JKkxT4"
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
