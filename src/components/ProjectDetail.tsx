"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  // Project data - in a real app, this would come from a database or API
  const projects: Record<string, any> = {
    "1": {
      id: 1,
      title: "Analytics Dashboard",
      category: "Web App",
      date: "March 2024",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      technologies: ["Next.js", "D3.js", "PostgreSQL", "TypeScript", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      overview: "A comprehensive analytics platform designed to help businesses make data-driven decisions. The dashboard provides real-time insights into key metrics and trends.",
      challenge: "The client needed a way to visualize complex datasets in real-time while maintaining excellent performance even with millions of data points.",
      solution: "Built a scalable architecture using Next.js for the frontend and PostgreSQL for data storage. Implemented D3.js for advanced data visualizations with optimized rendering techniques.",
      features: [
        "Real-time data synchronization",
        "Interactive charts and graphs with D3.js",
        "Custom dashboard builder with drag-and-drop",
        "Export reports in multiple formats",
        "Role-based access control",
        "Mobile-responsive design"
      ],
      results: [
        "Reduced data loading time by 85%",
        "Increased user engagement by 60%",
        "Processed over 1M data points daily",
        "Improved decision-making speed by 40%"
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
      ]
    },
    "2": {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web App",
      date: "January 2024",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
      technologies: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      overview: "A modern e-commerce platform with seamless checkout experience and intelligent product recommendations.",
      challenge: "Creating a fast, secure shopping experience that could scale to handle thousands of concurrent users during peak sales periods.",
      solution: "Implemented microservices architecture with Redis caching, integrated Stripe for payments, and built a recommendation engine using collaborative filtering.",
      features: [
        "Smart product recommendations",
        "One-click checkout with Stripe",
        "Real-time inventory management",
        "Advanced search with filters",
        "Wishlist and cart persistence",
        "Order tracking and notifications"
      ],
      results: [
        "Handled 50x traffic during Black Friday",
        "Conversion rate increased by 45%",
        "Average order value up by 30%",
        "99.9% uptime during peak periods"
      ],
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
      ]
    },
    "3": {
      id: 3,
      title: "Task Manager",
      category: "Web App",
      date: "November 2023",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      technologies: ["Vue.js", "Firebase", "Vuex", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      overview: "A minimal yet powerful task management application with drag-and-drop functionality and real-time collaboration.",
      challenge: "Users needed a simple way to organize tasks without the complexity of enterprise project management tools.",
      solution: "Built a clean interface with Vue.js and Firebase for real-time updates. Focused on essential features with intuitive UX.",
      features: [
        "Drag-and-drop task organization",
        "Real-time collaboration",
        "Task priorities and due dates",
        "Project grouping",
        "Activity timeline",
        "Keyboard shortcuts"
      ],
      results: [
        "5,000+ active users in first month",
        "Average session time: 25 minutes",
        "4.8/5 star rating",
        "Featured on Product Hunt"
      ],
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
        "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=80"
      ]
    }
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/work" className="text-primary hover:underline">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.date}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-16"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Project Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 mb-16 p-6 bg-muted/50 rounded-xl"
        >
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Duration</h3>
            <p className="text-lg">{project.duration}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-background border border-border rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Additional Images */}
        {project.images && project.images.length > 1 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image: string, index: number) => (
                <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.results.map((result: string, index: number) => (
              <div
                key={index}
                className="p-4 bg-primary/5 border border-primary/10 rounded-lg"
              >
                <p className="text-muted-foreground">{result}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4 pt-8 border-t border-border"
        >
          <Button
            size="lg"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Live Project
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            View Source Code
          </Button>
        </motion.div>
      </div>
    </article>
  );
}