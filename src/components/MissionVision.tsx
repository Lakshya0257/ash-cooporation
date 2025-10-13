"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, Sparkles } from "lucide-react";
import GradualBlur from "@/components/ui/gradual-blur";

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest quality in every project, never settling for 'good enough'."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Building with users in mind, understanding their needs, and solving real problems."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Embracing new technologies and approaches to push the boundaries of what's possible."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open communication, honest feedback, and clear documentation in everything I do."
    }
  ];

  return (
    <section id="mission" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Mission & Vision
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            What drives me
          </h3>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-4">My Mission</h4>
            <p className="text-muted-foreground leading-relaxed">
              To create digital experiences that make a meaningful impact on people's lives. 
              I aim to bridge the gap between complex technology and intuitive design, making 
              powerful tools accessible to everyone. Through clean code, thoughtful design, 
              and continuous learning, I strive to build products that users love and businesses trust.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-4">My Vision</h4>
            <p className="text-muted-foreground leading-relaxed">
              To be at the forefront of web innovation, contributing to the evolution of how 
              we interact with technology. I envision a future where digital products are not 
              just functional but delightful, where accessibility is the norm, and where 
              technology serves humanity in increasingly meaningful ways. I want to be part 
              of building that future.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Core Values</h4>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision I make and every line of code I write
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h5 className="text-lg font-semibold mb-2">{value.title}</h5>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}