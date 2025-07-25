export const metadata = {
  title: "Write for Us - Guest Post Guidelines | TheVeganVibrance.com",
  description:
    "Want to contribute to TheVeganVibrance? Learn how to submit a guest post and join our mission to inspire plant-based living through engaging and informative content.",
  openGraph: {
    title: "Write for Us - Guest Post Guidelines | TheVeganVibrance.com",
    description:
      "Submit your vegan lifestyle or plant-based recipe article to TheVeganVibrance. Follow our guest post guidelines to become a featured contributor.",
    url: "https://theveganvibrance.com/write-for-us",
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
    title: "Write for Us - Guest Post Guidelines | TheVeganVibrance.com",
    description:
      "Share your vegan tips, recipes, or lifestyle stories on TheVeganVibrance. Review our guest post guidelines to contribute your voice to our growing community.",
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

import WriteForUs from "@/components/WriteForUs/WriteForUs";

export default function writeForUsPage() {
  return <WriteForUs />;
}
