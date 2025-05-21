export const metadata = {
  title: "TheVeganVibrance Blog | Latest Vegan Recipes & Wellness Tips",
  description:
    "Stay updated with our vegan blog featuring delicious recipes, health tips, and sustainable living ideas. Your go-to resource for plant-based living!",
  openGraph: {
    title: "TheVeganVibrance Blog | Latest Vegan Recipes & Wellness Tips",
    description:
      "Stay updated with our vegan blog featuring delicious recipes, health tips, and sustainable living ideas. Your go-to resource for plant-based living!",
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
    title: "TheVeganVibrance Blog | Latest Vegan Recipes & Wellness Tips",
    description:
      "Stay updated with our vegan blog featuring delicious recipes, health tips, and sustainable living ideas. Your go-to resource for plant-based living!",
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

import Blog from "@/components/Blogs/Blog";

export default function Blogs() {
  return <Blog />;
}
