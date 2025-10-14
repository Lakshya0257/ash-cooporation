"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, Target, Users } from "lucide-react";
import GradualBlur from "@/components/ui/gradual-blur";

export default function ProjectProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      icon: Lightbulb,
      title: "Discovery & Research",
      description:
        "Understanding the problem space, user needs, and business goals through research and analysis.",
      steps: [
        "Stakeholder interviews",
        "User research & personas",
        "Competitive analysis",
        "Requirements gathering",
      ],
    },
    {
      icon: Target,
      title: "Strategy & Planning",
      description:
        "Defining project scope, technical architecture, and creating a roadmap for execution.",
      steps: [
        "Technical architecture design",
        "Project roadmap creation",
        "Resource allocation",
        "Timeline planning",
      ],
    },
    {
      icon: Palette,
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes to visualize the solution.",
      steps: [
        "Wireframing & user flows",
        "Visual design & branding",
        "Interactive prototypes",
        "Usability testing",
      ],
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Building the solution with clean, maintainable code following best practices.",
      steps: [
        "Frontend development",
        "Backend & API integration",
        "Database design",
        "Code reviews & testing",
      ],
    },
    {
      icon: Users,
      title: "Testing & Refinement",
      description:
        "Ensuring quality through rigorous testing and gathering user feedback.",
      steps: [
        "Unit & integration testing",
        "User acceptance testing",
        "Performance optimization",
        "Bug fixes & refinements",
      ],
    },
    {
      icon: Rocket,
      title: "Launch & Iteration",
      description:
        "Deploying to production and continuously improving based on real-world usage.",
      steps: [
        "Production deployment",
        "Monitoring & analytics",
        "User feedback collection",
        "Continuous improvements",
      ],
    },
  ];

  return (
    <section id="process" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Process
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">How I work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My approach to problem-solving combines strategic thinking, creative
            design, and technical expertise to deliver exceptional results.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <phase.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Phase {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Steps */}
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <motion.li
                      key={stepIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + stepIndex * 0.05,
                      }}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      <span>{step}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
