"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GradualBlur from "@/components/ui/gradual-blur";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Senior Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of web applications. Working with React, Next.js, and Node.js to build scalable solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Studio",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Built customer-facing applications and internal tools. Collaborated with designers to create pixel-perfect implementations.",
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      period: "2019 - 2020",
      description:
        "Created engaging web experiences. Focused on performance, accessibility, and clean code.",
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-muted/20" ref={ref}>
      <div className="max-w-4xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Experience</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-8">
            Where I've worked
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-border"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary"
              />

              {/* Content */}
              <div className="pb-4">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">{exp.company}</span> · {exp.location}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{exp.period}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
            Education
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold mb-1">Bachelor of Science in Computer Science</h5>
              <p className="text-sm text-muted-foreground">University of Technology · 2015 - 2019</p>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}