"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import GradualBlur from "@/components/ui/gradual-blur";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      text: "Alex is one of the most talented developers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is exceptional. He consistently delivered high-quality work ahead of schedule."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "StartupXYZ",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      text: "Working with Alex was a game-changer for our project. He brought fresh perspectives to our technical challenges and his code quality is outstanding. His expertise in modern web technologies helped us scale from 0 to 10,000 users seamlessly."
    },
    {
      name: "Emily Watson",
      role: "Design Lead",
      company: "Creative Agency",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
      text: "Alex has an incredible eye for design implementation. He doesn't just code what's in the mockups – he enhances them with thoughtful micro-interactions and performance optimizations. Our collaboration was seamless and the results speak for themselves."
    },
    {
      name: "David Kumar",
      role: "Engineering Manager",
      company: "Enterprise Solutions",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 5,
      text: "I had the pleasure of managing Alex for 2 years. His technical skills are top-notch, but what really sets him apart is his communication and mentorship. He elevated the entire team's capabilities and became our go-to person for complex problems."
    },
    {
      name: "Jessica Thompson",
      role: "Founder & CEO",
      company: "Innovate Labs",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      rating: 5,
      text: "Alex transformed our vision into reality. His ability to understand business needs and translate them into technical solutions is remarkable. He's professional, reliable, and a joy to work with. Highly recommended!"
    },
    {
      name: "Tom Anderson",
      role: "Senior Developer",
      company: "DevTeam Inc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
      rating: 5,
      text: "As a peer, I can confidently say Alex raises the bar for everyone around him. His code reviews are insightful, his architecture decisions are sound, and he's always willing to help others grow. A true team player."
    }
  ];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto px-12 lg:px-24 xl:px-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            What people say
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from managers, colleagues, and clients I've had the privilege to work with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
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