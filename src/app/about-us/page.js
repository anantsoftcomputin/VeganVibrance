export const metadata = {
  title: "About The Vegan Vibrance | Our Mission & Story",
  description:
    "Learn about The Vegan Vibrance and our mission to inspire vibrant, plant-based living. Discover our story and join our community!",
  openGraph: {
    title: "About The Vegan Vibrance | Our Mission & Story",
    description:
      "Learn about The Vegan Vibrance and our mission to inspire vibrant, plant-based living. Discover our story and join our community!",
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
    title: "About The Vegan Vibrance | Our Mission & Story",
    description:
      "Learn about The Vegan Vibrance and our mission to inspire vibrant, plant-based living. Discover our story and join our community!",
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

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}
