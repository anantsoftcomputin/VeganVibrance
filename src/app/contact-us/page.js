export const metadata = {
  title: "Contact TheVeganVibrance | Get in Touch Today",
  description:
    "Have questions or feedback? Contact TheVeganVibrance team today! We’re here to help you on your plant-based journey.",
  openGraph: {
    title: "Contact TheVeganVibrance | Get in Touch Today",
    description:
      "Have questions or feedback? Contact TheVeganVibrance team today! We’re here to help you on your plant-based journey.",
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
    title: "Contact TheVeganVibrance | Get in Touch Today",
    description:
      "Have questions or feedback? Contact TheVeganVibrance team today! We’re here to help you on your plant-based journey.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function contactUs() {
  return <ContactUs />;
}
