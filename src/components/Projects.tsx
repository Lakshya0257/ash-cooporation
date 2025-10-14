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

  const categories = ["All", "Health", "Communication", "Utility"];

  const projects: Project[] = [
    {
      id: 1,
      title: "SkillSync",
      category: "Utility",
      description:
        "Full-stack platform for simulated technical and behavioral interviews with resume analysis, tailored Q&A, and real-time feedback using microservices architecture",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      technologies: ["React.js", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Last Minute",
      category: "Health",
      description:
        "Online emergency ambulance booking platform connecting patients with nearest well-equipped hospitals. Featured on Flutter Awesome for innovation in emergency healthcare",
      image:
        "https://www.allrideapps.com/wp-content/uploads/2020/11/Screenshot-from-2020-11-24-16-17-36.png",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 3,
      title: "GeoGabble",
      category: "Communication",
      description:
        "Location-based messaging app facilitating spontaneous connections within 5km radius with geospatial indexing in Redis for low latency, reducing computing time by 10%",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80",
      technologies: ["Nest.js", "Rust", "Microservices", "Redis", "ECR"],
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
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Work
          </h2>
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
                {/* <Link href={`/work/${project.id}`}> */}
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
                    <div className="text-xs text-muted-foreground mb-2">
                      {project.category}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* <div className="flex items-center gap-2 text-sm text-primary">
                        <span>Read more</span>
                        <ExternalLink className="h-3 w-3" />
                      </div> */}
                  </div>
                </div>
                {/* </Link> */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
