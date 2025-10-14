"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      subPages: ["/about", "/philosophy", "/mission", "/gallery"]
    },
    { 
      name: "Work", 
      href: "/work",
      subPages: ["/work", "/process", "/behind-the-scenes", "/system-design"]
    },
    { 
      name: "Experience", 
      href: "/experience",
      subPages: ["/experience", "/testimonials"]
    },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (link: typeof navLinks[0]) => {
    if (link.subPages) {
      return link.subPages.some(page => pathname === page || pathname.startsWith(page + '/'));
    }
    return pathname === link.href;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            AC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors relative group ${
                  isActive(link)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-b border-border"
        >
          <div className="px-8 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(link)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}