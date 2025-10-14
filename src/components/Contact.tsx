"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle2, Github, Linkedin } from "lucide-react";
import GradualBlur from "@/components/ui/gradual-blur";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/aashichaudhary", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aashi-chaudhary", label: "LinkedIn" },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Compose email with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:aashichaudhary62004@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-12 lg:px-24 xl:px-32">
        <div className="max-w-2xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Contact</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Get in touch
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out.
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <a
              href="mailto:aashichaudhary62004@gmail.com"
              className="inline-flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              aashichaudhary62004@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 mb-16"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Message sent!</h4>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Send className="h-5 w-5" />
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}