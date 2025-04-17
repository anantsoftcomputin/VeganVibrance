"use client";
import React, { useState, useEffect } from "react";
import {
  Utensils,
  Leaf,
  HeartPulse,
  Users,
  Sprout,
  CalendarCheck,
  Sun,
  ChefHat,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    number: "25K+",
    label: "Plant-Powered Members",
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    number: "1M+",
    label: "Meals Shared",
    icon: <Utensils className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    number: "100+",
    label: "Nutrition Guides",
    icon: <HeartPulse className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    number: "50+",
    label: "Seasonal Recipes",
    icon: <Sprout className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
];

const resources = [
  {
    icon: ChefHat,
    title: "Vegan Recipe Collections",
    description:
      "Curated plant-based recipes for every occasion and dietary need.",
  },
  {
    icon: HeartPulse,
    title: "Nutrition Masterclasses",
    description: "Science-backed guides to thriving on a plant-based diet.",
  },
  {
    icon: CalendarCheck,
    title: "Meal Planning Systems",
    description: "Structured programs to simplify your plant-powered kitchen.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Whole Food Nourishment",
    description:
      "We celebrate food in its most vibrant, nutrient-dense form for optimal health.",
  },
  {
    icon: Sun,
    title: "Sustainable Eating",
    description:
      "Our approach connects personal wellness with planetary wellbeing.",
  },
  {
    icon: Users,
    title: "Inclusive Community",
    description:
      "Join thousands discovering the joy and benefits of plant-based living.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-12 min-h-screen bg-gray-50">
      <section className="relative py-20 bg-green-100">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cultivate Vibrant Health
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              At Vegan Vibrance, we're growing a movement of plant-powered
              living - helping people discover the joy, health, and
              sustainability of whole food nutrition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label + index}
                className={`text-center p-6 bg-green-50 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-4 w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Our Philosophy
              </h3>
              <p className="text-gray-800 text-lg mb-8">
                In a world of processed foods, we help you reconnect with
                nature's nourishment. Through research and recipes, we empower
                you to:
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Vibrant plant-based meals"
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Plant-Based Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Practical tools and knowledge to help you thrive on a vegan diet
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-5">
                  <resource.icon className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-5">{resource.description}</p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-gray-600 hover:text-green-600 font-medium transition-colors"
                >
                  Explore resources
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Ready to Transform Your Plate?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of plant-based enthusiasts and discover the
            vibrant health benefits today.
          </p>
          <Link
            href=""
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-300"
          >
            Start Your Plant Journey
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
