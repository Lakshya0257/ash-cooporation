"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeContent from "@/components/ui/fade-content";
import GradualBlur from "@/components/ui/gradual-blur";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Flutter & Dart", level: 95 },
    { name: "Riverpod & Provider", level: 90 },
    { name: "Firebase", level: 88 },
    { name: "UI/UX Design", level: 92 },
    { name: "Java & DSA", level: 90 },
    { name: "Git & Version Control", level: 95 },
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
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              About
            </h2>
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
                I’m a developer and designer from India, passionate about
                building seamless, user-centered digital experiences. I love
                combining creativity with clean, efficient code to bring ideas
                to life through elegant and intuitive applications.
              </p>
              <p>
                My focus lies in Flutter development, where I specialize in
                crafting responsive, scalable, and visually appealing mobile
                apps using Dart, Riverpod, and Provider for state management.
                With a strong eye for UI/UX design, I strive to make every
                product not just functional — but delightful to use.
              </p>
              <p>
                Over the years, I’ve worked on real-world projects that blend
                design and development, from emergency service apps to AI-driven
                interview platforms. What drives me is turning ideas into
                meaningful, impactful solutions that people truly connect with.
                When I’m not coding, I enjoy exploring new design ideas,
                learning emerging technologies, or losing myself in a good book.
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
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
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
