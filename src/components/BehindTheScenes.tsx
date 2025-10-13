"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertCircle, TrendingUp, Zap, BookOpen } from "lucide-react";
import GradualBlur from "@/components/ui/gradual-blur";
import TiltedCard from "@/components/ui/tilted-card";

export default function BehindTheScenes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stories = [
    {
      icon: AlertCircle,
      title: "The Performance Challenge",
      project: "Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      challenge: "The initial version was loading 10+ seconds with large datasets, making it unusable for clients.",
      solution: "Implemented data virtualization, optimized queries, and added intelligent caching strategies.",
      result: "Reduced load time to under 2 seconds, even with millions of records.",
      lessons: [
        "Always measure before optimizing",
        "User perception matters as much as actual speed",
        "Caching strategies can make or break performance"
      ]
    },
    {
      icon: TrendingUp,
      title: "Scaling from 10 to 10,000 Users",
      project: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      challenge: "The platform couldn't handle Black Friday traffic. Database was hitting limits and checkout was failing.",
      solution: "Redesigned the architecture with load balancing, database read replicas, and queue-based processing.",
      result: "Successfully handled 50x traffic spike with 99.9% uptime during peak sales.",
      lessons: [
        "Design for scale from day one",
        "Queue heavy operations to prevent bottlenecks",
        "Monitor everything in production"
      ]
    },
    {
      icon: Zap,
      title: "The Great Refactor",
      project: "Task Management App",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      challenge: "Technical debt accumulated over 2 years made it nearly impossible to add new features.",
      solution: "Planned a 3-month gradual refactor, migrating to TypeScript and modern patterns piece by piece.",
      result: "Reduced bugs by 70%, improved developer velocity by 3x, and shipped 5 major features in the next quarter.",
      lessons: [
        "Technical debt always catches up",
        "Incremental refactoring beats big rewrites",
        "Good type systems prevent entire classes of bugs"
      ]
    },
    {
      icon: BookOpen,
      title: "Learning in Public",
      project: "Open Source Component Library",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      challenge: "Building accessible components is harder than it looks. Initial versions had numerous a11y issues.",
      solution: "Deep dive into WCAG guidelines, worked with accessibility experts, and added comprehensive testing.",
      result: "Library now used by 500+ projects, with excellent accessibility ratings and positive community feedback.",
      lessons: [
        "Accessibility should be built-in, not bolted on",
        "Community feedback is invaluable",
        "Documentation is as important as code"
      ]
    }
  ];

  return (
    <section id="behind-scenes" className="py-32 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Behind the Scenes</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Challenges & Lessons
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from the trenches – the problems, iterations, and lessons learned 
            that don't make it to the portfolio showcase.
          </p>
        </motion.div>

        {/* Stories */}
        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
                {/* Image with TiltedCard */}
                <div className="h-64 md:h-full">
                  <TiltedCard
                    imageSrc={story.image}
                    altText={story.project}
                    captionText={story.project}
                    containerHeight="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    scaleOnHover={1.05}
                    rotateAmplitude={10}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <story.icon className="h-4 w-4 text-white" />
                          <span className="text-white text-sm font-semibold">{story.project}</span>
                        </div>
                      </div>
                    }
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <h4 className="text-2xl font-bold">{story.title}</h4>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-2">The Challenge</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{story.challenge}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-2">The Solution</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{story.solution}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-2">The Result</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{story.result}</p>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold mb-3">Lessons Learned</h5>
                    <ul className="space-y-2">
                      {story.lessons.map((lesson, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">→</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}