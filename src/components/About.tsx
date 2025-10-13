"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeContent from "@/components/ui/fade-content";
import GradualBlur from "@/components/ui/gradual-blur";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "UI/UX Design", level: 88 },
    { name: "PostgreSQL", level: 80 },
    { name: "Tailwind CSS", level: 95 },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <FadeContent blur duration={1000} delay={100}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">About</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">
              A bit about me
            </h3>
          </motion.div>
        </FadeContent>

        {/* Content */}
        <div className="grid gap-12">
          {/* Story */}
          <FadeContent blur duration={1200} delay={200}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a developer based in San Francisco with a passion for creating clean, 
                functional web experiences. I've been working in web development for over 5 years, 
                building everything from simple landing pages to complex web applications.
              </p>
              <p>
                I enjoy the process of turning ideas into reality through code. Whether it's 
                designing interfaces, writing clean code, or solving complex problems, I approach 
                each project with attention to detail and a focus on quality.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or sharing what I've learned with others.
              </p>
            </motion.div>
          </FadeContent>

          {/* Skills */}
          <FadeContent blur duration={1200} delay={400}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                Skills
              </h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
}