"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import TextPressure from "@/components/ui/text-pressure";
import GradualBlur from "@/components/ui/gradual-blur";
import FadeContent from "@/components/ui/fade-content";
import FallingText from "@/components/ui/falling-text";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFallingText, setShowFallingText] = useState(false);

  const roles = [
    "developer",
    "designer",
    "creator",
    "problem solver"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, currentRoleIndex, isDeleting]);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "/contact", label: "Email" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32 py-32 w-full">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Name with TextPressure */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[180px] !w-full md:!h-[71px]"
          >
            <TextPressure 
              text="AASHI CHOUDHARY"
              textColor="currentColor"
              minFontSize={48}
              width={true}
              weight={true}
              italic={false}
              alpha={false}
              stroke={false}
              scale={false}
              flex={true}
            />
          </motion.div>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="h-12 flex items-center justify-center"
          >
            <h2 className="text-xl md:text-xl text-muted-foreground">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-7 ml-1 bg-foreground align-middle"
              />
            </h2>
          </motion.div>

         
            {/* <FadeContent blur duration={1200} delay={200} threshold={0.2}> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                <p>
                  Building thoughtful digital experiences with clean code and attention to detail.
                  Currently focused on creating products that people love to use.
                </p>
              </motion.div>
            {/* </FadeContent> */}
          

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/work"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-all font-medium hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex gap-6 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}