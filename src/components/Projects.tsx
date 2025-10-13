"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import GradualBlur from "@/components/ui/gradual-blur";
import TiltedCard from "@/components/ui/tilted-card";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web App", "Design", "Open Source"];

  const projects: Project[] = [
    {
      id: 1,
      title: "Analytics Dashboard",
      category: "Web App",
      description: "Real-time analytics platform with data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Next.js", "D3.js", "PostgreSQL"],
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web App",
      description: "Modern shopping experience with smooth checkout",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["React", "Node.js", "Stripe"],
    },
    {
      id: 3,
      title: "Task Manager",
      category: "Web App",
      description: "Simple and effective task management tool",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      technologies: ["Vue.js", "Firebase"],
    },
    {
      id: 4,
      title: "Portfolio Template",
      category: "Design",
      description: "Clean portfolio design for creatives",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      technologies: ["Next.js", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "React Component Library",
      category: "Open Source",
      description: "Reusable UI components for React projects",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      technologies: ["React", "TypeScript", "Storybook"],
    },
    {
      id: 6,
      title: "Weather App",
      category: "Web App",
      description: "Clean weather forecast application",
      image: "https://images.unsplash.com/photo-1561553543-4e14f3c2d675?w=800&q=80",
      technologies: ["React", "OpenWeather API"],
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8">
            Things I've built
          </h3>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link href={`/work/${project.id}`}>
                  <div className="overflow-hidden rounded-lg border border-border bg-card cursor-pointer hover:shadow-lg transition-shadow">
                    {/* Project Image with TiltedCard */}
                    <div className="h-64">
                      <TiltedCard
                        imageSrc={project.image}
                        altText={project.title}
                        captionText={project.title}
                        containerHeight="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        scaleOnHover={1.05}
                        rotateAmplitude={8}
                        showMobileWarning={false}
                        showTooltip={true}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-2">{project.category}</div>
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <span>Read more</span>
                        <ExternalLink className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}