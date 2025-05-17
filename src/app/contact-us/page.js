export const metadata = {
  title: "Contact The Vegan Vibrance | Get in Touch Today",
  description:
    "Have questions or feedback? Contact The Vegan Vibrance team today! We’re here to help you on your plant-based journey.",
  openGraph: {
    title: "Contact The Vegan Vibrance | Get in Touch Today",
    description:
      "Have questions or feedback? Contact The Vegan Vibrance team today! We’re here to help you on your plant-based journey.",
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
    title: "Contact The Vegan Vibrance | Get in Touch Today",
    description:
      "Have questions or feedback? Contact The Vegan Vibrance team today! We’re here to help you on your plant-based journey.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function contactUs() {
  return <ContactUs />;
}
