export const metadata = {
  title: "The Vegan Vibrance | Healthy, Delicious & Sustainable Vegan Recipes",
  description:
    "Your ultimate resource for vegan recipes, nutrition tips, and eco-conscious living. The Vegan Vibrance helps you live a healthier, more vibrant life.",
};

import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <div className="blob-container">
      <Hero />
      <TrendingBlogs />
      <LatestBlogs />
      <NewsLetter />
    </div>
  );
}
