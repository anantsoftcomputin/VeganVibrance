"use client";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Sprout,
  Vegan,
  Wheat,
  HeartPulse,
  BookOpen,
} from "lucide-react";

const coreBenefits = [
  {
    id: "core-benefit-1",
    icon: <HeartPulse className="h-5 w-5 text-green-600" aria-hidden="true" />,
    label: "Health Benefits",
  },
  {
    id: "core-benefit-2",
    icon: <Sprout className="h-5 w-5 text-green-600" aria-hidden="true" />,
    label: "Plant-Based Living",
  },
  {
    id: "core-benefit-3",
    icon: <Vegan className="h-5 w-5 text-green-600" aria-hidden="true" />,
    label: "Ethical Choices",
  },
];

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-main-heading"
      className="relative overflow-hidden bg-green-50 py-20 lg:py-28"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <Leaf
          className="absolute text-green-200 floating-animation"
          style={{
            width: "45px",
            height: "45px",
            top: "10%",
            left: "15%",
            animationDuration: "8s",
            animationDelay: "0s",
            transform: "rotate(15deg)",
          }}
          aria-hidden="true"
        />
        <Sprout
          className="absolute text-green-200 floating-animation-alt"
          style={{
            width: "35px",
            height: "35px",
            top: "30%",
            right: "10%",
            animationDuration: "10s",
            animationDelay: "1s",
          }}
          aria-hidden="true"
        />
        <BookOpen
          className="absolute text-green-200 floating-animation"
          style={{
            width: "55px",
            height: "55px",
            top: "55%",
            left: "5%",
            animationDuration: "7s",
            animationDelay: "2.5s",
            transform: "rotate(-25deg)",
          }}
          aria-hidden="true"
        />
        <Wheat
          className="absolute text-green-200 floating-animation-alt"
          style={{
            width: "30px",
            height: "30px",
            bottom: "15%",
            right: "20%",
            animationDuration: "9s",
            animationDelay: "4s",
          }}
          aria-hidden="true"
        />
        <Vegan
          className="absolute text-green-200 floating-animation"
          style={{
            width: "50px",
            height: "50px",
            bottom: "25%",
            left: "30%",
            animationDuration: "11s",
            animationDelay: "5.5s",
            transform: "rotate(5deg)",
          }}
          aria-hidden="true"
        />
        <Leaf
          className="absolute text-green-200 floating-animation-alt"
          style={{
            width: "25px",
            height: "25px",
            top: "75%",
            right: "8%",
            animationDuration: "6s",
            animationDelay: "1.5s",
            transform: "rotate(60deg) scaleX(-1)",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="relative container mx-auto px-6 pt-12 pb-12 text-center z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-800 mb-6 shadow-sm">
            <Leaf className="h-4 w-4 text-green-600 mr-2" aria-hidden="true" />
            <span className="text-sm font-medium">Plant-Based Living</span>
          </div>
          <h1
            id="hero-main-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Nourish Your Body & Planet
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Vegan Vibrance provides delicious recipes, nutrition guidance, and
            practical tips to help you thrive on a plant-based diet while making
            ethical and sustainable choices.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/blogs"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center shadow hover:shadow-md"
            >
              Explore Recipes
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/about-us"
              className="px-8 py-3 border border-green-600 text-green-700 rounded-lg font-medium hover:bg-green-100 transition-colors duration-300"
            >
              Our Mission
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 text-gray-600">
            {coreBenefits.map((benefit) => (
              <div key={benefit.id} className="flex items-center gap-2">
                {benefit.icon}
                <span className="text-sm font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
