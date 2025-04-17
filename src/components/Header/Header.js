"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Categories", href: "/categories" },
  { name: "AboutUs", href: "/aboutUs" },
  { name: "ContactUs", href: "/contactUs" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-green-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/veganvibrance.png"
                alt="Veganvibrance"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-green-700 transition-colors">
                Veganvibrance
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-green-700 font-semibold border-b-2 border-green-700"
                      : "text-gray-700 hover:text-green-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-700 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <div className="flex flex-col space-y-4">
              {navigation.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name + index}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "text-green-700 font-semibold bg-green-100"
                        : "text-gray-700 hover:text-green-700 hover:bg-green-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;