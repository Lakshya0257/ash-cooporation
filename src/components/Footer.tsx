"use client";

import { motion } from "framer-motion";
import GradualBlur from "@/components/ui/gradual-blur";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background">
      
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32 py-12">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aashi Chaudhary</p>
        </div>
      </div>
    </footer>
  );
}