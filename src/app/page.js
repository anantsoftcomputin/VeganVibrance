import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techsnostalgia",
    url: "https://theveganvibrance.com",
    logo: "https://theveganvibrance.com/veganvibrance.png",
    sameAs: [
      "https://www.facebook.com/theveganvibrances",
      "https://www.instagram.com/theveganvibrances",
      "https://x.com/theveganvibrances",
    ],
    description:
      "Your ultimate resource for vegan recipes, nutrition tips, and eco-conscious living. The Vegan Vibrance helps you live a healthier, more vibrant life.",
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
