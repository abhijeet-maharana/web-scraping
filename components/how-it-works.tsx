"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Database, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Tell Us What You Need",
    description: "Select industries and data types you're interested in. We'll help you define the scope and requirements.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "We Extract & Clean Data",
    description: "Our AI-powered systems legally extract the data you need, clean it, and structure it for your use case.",
    icon: Database,
  },
  {
    id: 3,
    title: "You Get Actionable Insights",
    description: "Access your data via API, spreadsheets, or custom dashboards. Transform raw data into business intelligence.",
    icon: BarChart3,
  },
];

export function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes data extraction simple, efficient, and valuable for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className={cn(
                "relative p-8 rounded-xl transition-all duration-300",
                "bg-gradient-to-br from-card/50 to-card border border-border",
                hoveredStep === step.id && "shadow-lg shadow-primary/10 border-primary/20"
              )}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-blue-500 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                {step.id}
              </div>
              
              <div className="text-center pt-6">
                <motion.div
                  className="mb-4 mx-auto"
                  animate={
                    hoveredStep === step.id
                      ? { scale: 1.1, y: -5 }
                      : { scale: 1, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="h-12 w-12 mx-auto text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}