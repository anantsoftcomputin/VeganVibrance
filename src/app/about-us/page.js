export const metadata = {
  title: "About TheVeganVibrance | Our Mission & Story",
  description:
    "Learn about TheVeganVibrance and our mission to inspire vibrant, plant-based living. Discover our story and join our community!",
  openGraph: {
    title: "About TheVeganVibrance | Our Mission & Story",
    description:
      "Learn about TheVeganVibrance and our mission to inspire vibrant, plant-based living. Discover our story and join our community!",
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
    title: "About TheVeganVibrance | Our Mission & Story",
    description:
      "Learn about TheVeganVibrance and our mission to inspire vibrant, plant-based living. Discover our story and join our community!",
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

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}
