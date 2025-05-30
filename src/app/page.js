import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheVeganVibrance",
    url: "https://theveganvibrance.com",
    logo: "https://theveganvibrance.com/TheVeganVibrance.png",
    sameAs: [
      "https://www.facebook.com/theveganvibrance",
      "https://www.instagram.com/veganthevibrance",
      "https://x.com/vegan_vibrance",
    ],
    description:
      "TheVeganVibrance offers easy plant based vegan recipes, nutrition tips to boost health and energy. Perfect for anyone looking to eat clean and live vibrant.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="blob-container">
        <Hero />
        <TrendingBlogs />
        <LatestBlogs />
        <NewsLetter />
      </div>
    </>
  );
}
