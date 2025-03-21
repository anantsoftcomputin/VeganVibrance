"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUpCircle } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/aboutUs" },
    { name: "Contact Us", href: "/contactUs" },
  ],
  resources: [
    { name: "Blogs", href: "/blogs" },
    { name: "Categories", href: "/categories" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacyPolicy" },
    { name: "Terms & Conditions", href: "/terms&condition" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
  },
  { name: "Twitter", icon: Twitter },
  {
    name: "Instagram",
    icon: Instagram,
  },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold text-white"
            >
              <img
                src="/veganvibrance.png"
                alt="Veganvibrance"
                className="h-8 w-auto"
              />
              <span className="text-xl md:inline-block ml-2">
                Veganvibrance
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering mindful technology use for a balanced digital
              lifestyle.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ name, icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([section, links], index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map(({ name, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            {currentYear ? (
              <div>
                © {currentYear} Veganvibrance. All rights reserved | Design &
                Developed By{" "}
                <a
                  href="https://anantsoftcomputing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gray-400 transition-colors duration-300"
                >
                  Anant Soft Computing
                </a>
              </div>
            ) : (
              "Loading..."
            )}
          </p>
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700"
        >
          <ArrowUpCircle className="h-6 w-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
