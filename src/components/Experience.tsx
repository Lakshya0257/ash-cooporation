"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GradualBlur from "@/components/ui/gradual-blur";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Jr. Flutter Developer",
      company: "IMG Global Infotech",
      location: "India",
      period: "May 2024 - Present",
      description:
        "Working as a Flutter developer on real-world applications with a focus on responsive UI/UX and scalable architecture. Collaborating closely with backend and design teams to implement app features using Dart and state management solutions like Riverpod/GetX/Provider. Writing clean, maintainable code and participating in code reviews and agile sprint planning.",
    },
    {
      title: "Flutter Developer Intern",
      company: "RICOZ",
      location: "India",
      period: "November 2023 - April 2024",
      description:
        "Developed and implemented end-to-end front-end functionality using Dart and Flutter, improving user engagement. Collaborated with backend developers and UI/UX designers to ensure seamless integration and appealing interfaces. Applied advanced state management techniques to maintain scalable, maintainable architecture.",
    },
    {
      title: "Full Stack Android App Developer",
      company: "CipherByte Technologies",
      location: "India",
      period: "September 2023 - October 2023",
      description:
        "Developed and deployed a fully functional Android application, handling both frontend and backend development. Designed intuitive UI/UX layouts for seamless user interaction and responsiveness. Implemented robust state management techniques to handle dynamic content updates.",
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
              <h5 className="font-semibold mb-1">Bachelor of Technology in Computer Science and Engineering</h5>
              <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Bhopal · August 2021 - August 2025</p>
              <p className="text-sm text-muted-foreground mt-1">CGPA: 8.13/10</p>
            </div>
          </div>
        </motion.div>
      </div>

      
    </section>
  );
}