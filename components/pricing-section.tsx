"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const pricingPlans = {
  oneTime: [
    {
      id: 1,
      name: "Basic",
      description: "Perfect for small projects and one-time data needs",
      price: "$499",
      features: [
        "Single website data extraction",
        "Up to 10,000 data points",
        "Data delivered in CSV/Excel format",
        "Basic data cleaning & structuring",
        "7-day delivery",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: 2,
      name: "Standard",
      description: "Ideal for medium-sized projects with specific requirements",
      price: "$999",
      features: [
        "Multiple website data extraction",
        "Up to 50,000 data points",
        "Data delivered in your preferred format",
        "Advanced data cleaning & structuring",
        "Custom fields & parameters",
        "3-day delivery",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Comprehensive solution for complex data extraction needs",
      price: "Custom",
      features: [
        "Unlimited website data extraction",
        "Unlimited data points",
        "Custom data processing & integration",
        "Advanced filtering & transformation",
        "Dedicated project manager",
        "Priority delivery",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ],
  recurring: [
    {
      id: 1,
      name: "Basic",
      description: "Perfect for ongoing data needs with regular updates",
      price: "$299",
      period: "/month",
      features: [
        "Single website data monitoring",
        "Daily data updates",
        "Up to 50,000 data points/month",
        "API access",
        "Basic data cleaning & structuring",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      id: 2,
      name: "Standard",
      description: "Ideal for businesses requiring comprehensive data access",
      price: "$799",
      period: "/month",
      features: [
        "Multiple website data monitoring",
        "Real-time data updates",
        "Up to 250,000 data points/month",
        "API access with higher rate limits",
        "Advanced data cleaning & structuring",
        "Custom fields & parameters",
        "Priority email & chat support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      description: "Tailored solution for large-scale data extraction needs",
      price: "Custom",
      period: "",
      features: [
        "Unlimited website monitoring",
        "Real-time data updates",
        "Unlimited data points",
        "Dedicated API infrastructure",
        "Custom data processing & integration",
        "Advanced filtering & transformation",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ],
};

export function PricingSection() {
  const [billingType, setBillingType] = useState<"oneTime" | "recurring">("recurring");

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-background/90 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your data extraction needs.
          </p>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={cn(
              "text-sm font-medium transition-colors",
              billingType === "oneTime" ? "text-foreground" : "text-muted-foreground"
            )}>
              One-Time
            </span>
            <Switch
              checked={billingType === "recurring"}
              onCheckedChange={(checked) => setBillingType(checked ? "recurring" : "oneTime")}
            />
            <span className={cn(
              "text-sm font-medium transition-colors",
              billingType === "recurring" ? "text-foreground" : "text-muted-foreground"
            )}>
              Recurring
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans[billingType].map((plan) => (
            <motion.div
              key={plan.id}
              className={cn(
                "rounded-xl overflow-hidden border transition-all duration-300",
                plan.popular
                  ? "border-primary/50 bg-gradient-to-b from-primary/5 to-card shadow-lg"
                  : "border-border bg-card"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.id * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                
                <Button 
                  className={cn(
                    "w-full mb-8",
                    plan.popular
                      ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={cn(
                        "mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                        plan.popular ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}