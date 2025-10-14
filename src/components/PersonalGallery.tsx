"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradualBlur from "@/components/ui/gradual-blur";
import TiltedCard from "@/components/ui/tilted-card";

export default function PersonalGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/gallery/g1.png",
      title: "Scottland",
      description: "My dream destination trip",
    },
    {
      src: "/gallery/g2.png",
      title: "Me",
      description: "And only me",
    },
    {
      src: "/gallery/g3.png",
      title: "Me",
      description: "Just me again",
    },
    {
      src: "/gallery/g4.png",
      title: "Me",
      description: "Me once more",
    },
    {
      src: "/gallery/g5.png",
      title: "Jaipur",
      description: "Amer Fort",
    },
    {
      src: "/gallery/g6.png",
      title: "Rajasthan",
      description: "City Palace",
    },
    {
      src: "/gallery/g7.png",
      title: "Project Kickoff",
      description: "Starting a new exciting project",
    },
    {
      src: "/gallery/g8.png",
      title: "Me",
      description: "Me yet again",
    },
    {
      src: "/gallery/g9.png",
      title: "Chennai",
      description: "Me at Marina Beach",
    },
  ];

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    } else {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Gallery
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Moments & Memories
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of personal photographs capturing memorable
            moments and experiences.
          </p>
        </motion.div>

        {/* Gallery Grid with TiltedCard */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => setSelectedImage(index)}
              className="aspect-square cursor-pointer"
            >
              <TiltedCard
                imageSrc={image.src}
                altText={image.title}
                captionText={image.title}
                containerHeight="100%"
                imageHeight="100%"
                imageWidth="100%"
                scaleOnHover={1.08}
                rotateAmplitude={12}
                showMobileWarning={false}
                showTooltip={true}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-semibold text-xl mb-2">
                  {galleryImages[selectedImage].title}
                </h4>
                <p className="text-white/80">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
