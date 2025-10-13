"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Server, Cloud, Zap, Shield, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradualBlur from "@/components/ui/gradual-blur";
import TiltedCard from "@/components/ui/tilted-card";

export default function SystemDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedArchitecture, setSelectedArchitecture] = useState(0);

  const architectures = [
    {
      title: "Microservices E-Commerce",
      description: "Scalable architecture for high-traffic e-commerce platform",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      components: [
        { icon: Server, label: "API Gateway", color: "from-blue-400 to-blue-600" },
        { icon: Database, label: "PostgreSQL", color: "from-indigo-400 to-indigo-600" },
        { icon: Cloud, label: "Redis Cache", color: "from-red-400 to-red-600" },
        { icon: Zap, label: "Event Bus", color: "from-yellow-400 to-yellow-600" }
      ],
      features: [
        "Load balancing across multiple instances",
        "Event-driven architecture for order processing",
        "Separate read/write databases for optimization",
        "CDN for static assets and images"
      ]
    },
    {
      title: "Real-Time Analytics Platform",
      description: "High-performance data processing and visualization system",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      components: [
        { icon: Layers, label: "Data Lake", color: "from-green-400 to-green-600" },
        { icon: Zap, label: "Stream Processing", color: "from-purple-400 to-purple-600" },
        { icon: Database, label: "Time-Series DB", color: "from-cyan-400 to-cyan-600" },
        { icon: Shield, label: "Auth Service", color: "from-pink-400 to-pink-600" }
      ],
      features: [
        "Real-time data ingestion from multiple sources",
        "Stream processing with Apache Kafka",
        "WebSocket connections for live updates",
        "Horizontal scaling for data processing"
      ]
    },
    {
      title: "Serverless SaaS Application",
      description: "Cost-effective, auto-scaling cloud-native architecture",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      components: [
        { icon: Cloud, label: "Lambda Functions", color: "from-orange-400 to-orange-600" },
        { icon: Database, label: "DynamoDB", color: "from-blue-400 to-blue-600" },
        { icon: Server, label: "API Gateway", color: "from-teal-400 to-teal-600" },
        { icon: Shield, label: "Cognito Auth", color: "from-rose-400 to-rose-600" }
      ],
      features: [
        "Pay-per-use pricing model",
        "Auto-scaling based on demand",
        "Global distribution with CloudFront",
        "Managed authentication and authorization"
      ]
    }
  ];

  const current = architectures[selectedArchitecture];

  return (
    <section id="system-design" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            System Design
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Architecture Showcase
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-level system designs and backend architectures I've implemented
          </p>
        </motion.div>

        {/* Architecture Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {architectures.map((arch, index) => (
            <Button
              key={arch.title}
              variant={selectedArchitecture === index ? "default" : "outline"}
              onClick={() => setSelectedArchitecture(index)}
              size="sm"
            >
              {arch.title}
            </Button>
          ))}
        </motion.div>

        {/* Architecture Display */}
        <motion.div
          key={selectedArchitecture}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Architecture Diagram with TiltedCard */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card h-96">
            <TiltedCard
              imageSrc={current.image}
              altText={current.title}
              captionText={current.title}
              containerHeight="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.03}
              rotateAmplitude={6}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              }
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 pointer-events-none">
              <h4 className="text-2xl font-bold mb-2">{current.title}</h4>
              <p className="text-white/90">{current.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Components */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h5 className="text-lg font-semibold mb-4">Key Components</h5>
              <div className="space-y-3">
                {current.components.map((component, index) => (
                  <motion.div
                    key={component.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${component.color} flex items-center justify-center shrink-0`}>
                      <component.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{component.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h5 className="text-lg font-semibold mb-4">Architecture Features</h5>
              <ul className="space-y-3">
                {current.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}