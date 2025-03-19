export const metadata = {
  title: "Techsnostalgia: Celebrating the Classics of Outdated Technology",
  description:
    "Join us at Techsnostalgia as we revisit the nostalgic world of vintage tech. Relive the golden era of outdated gadgets and explore the stories behind them.",
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
