export const metadata = {
  title: "Vegan Recipes | Easy Plant-Based Meals for Every Occasion",
  description:
    "Browse our collection of vegan recipes, from quick meals to gourmet dishes. Perfect for every occasion and skill level!",
  openGraph: {
    title: "Vegan Recipes | Easy Plant-Based Meals for Every Occasion",
    description:
      "Browse our collection of vegan recipes, from quick meals to gourmet dishes. Perfect for every occasion and skill level!",
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
    title: "Vegan Recipes | Easy Plant-Based Meals for Every Occasion",
    description:
      "Browse our collection of vegan recipes, from quick meals to gourmet dishes. Perfect for every occasion and skill level!",
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

import Categories from "@/components/Categories/Categories";

export default function Category() {
  return <Categories />;
}
