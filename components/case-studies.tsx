"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Price Intelligence",
    description:
      "How a retail chain increased profit margins by 15% using our competitive price monitoring solution.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: [
      "15% increase in profit margins",
      "Real-time price adjustments",
      "Automated competitor analysis",
    ],
  },
  {
    id: 2,
    title: "Real Estate Market Analysis",
    description:
      "Helping a property investment firm identify undervalued properties with comprehensive market data.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: [
      "200+ properties analyzed daily",
      "12% higher ROI on investments",
      "Market trend predictions",
    ],
  },
  {
    id: 3,
    title: "B2B Lead Generation",
    description:
      "Generating qualified sales leads for a SaaS company, resulting in a 3x increase in conversion rates.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    results: [
      "10,000+ qualified leads generated",
      "3x increase in conversion rates",
      "60% reduction in CAC",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    text: "Tansformed our business intelligence capabilities. We now have real-time competitor data that drives our pricing strategy.",
    author: "Sarah Johnson",
    position: "VP of E-commerce, RetailTech Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    text: "The quality and accuracy of the data we receive is exceptional. Their compliance-first approach gave us confidence that all data is ethically sourced.",
    author: "Michael Chen",
    position: "CTO, PropertyVision",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    text: "We've tried other web scraping services, but none matched the reliability and scalability. Their API integration was seamless.",
    author: "Alex Rodriguez",
    position: "Head of Marketing, GrowthLabs",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

export function CaseStudies() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="case-studies"
      className="py-24 bg-gradient-to-b from-background to-background/90"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses are leveraging our data extraction solutions to
            gain competitive advantages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="rounded-xl overflow-hidden border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: study.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {study.description}
                </p>
                <div className="space-y-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto bg-card rounded-xl p-8 md:p-12 border border-border">
          <div className="absolute -top-6 left-10 text-primary">
            <Quote className="w-12 h-12 opacity-50" />
          </div>

          <div ref={testimonialsRef} className="relative overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full">
                  <blockquote className="text-xl md:text-2xl italic mb-6 text-center">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveTestimonial(index)}
                className={cn(
                  "w-2 h-2 p-0 rounded-full",
                  activeTestimonial === index
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                )}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
