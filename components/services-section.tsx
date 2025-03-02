"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Database,
  ShoppingCart,
  Users,
  Building,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Data-as-a-Service (DaaS) API",
    description:
      "Access live & structured data feeds through our robust API. Perfect for integrating real-time web data into your applications.",
    details:
      "Our DaaS API provides continuous access to structured web data from thousands of sources. We handle the extraction, cleaning, and delivery so you can focus on using the data.",
    icon: Database,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "E-commerce & Price Monitoring",
    description:
      "Track competitor prices, product information, and market trends across e-commerce platforms.",
    details:
      "Stay ahead of the competition with real-time price monitoring across major marketplaces. Track pricing changes, stock levels, and product details to optimize your pricing strategy.",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Lead Generation & Contact Scraping",
    description:
      "Build targeted B2B email lists and sales leads from company websites, directories, and professional networks.",
    details:
      "Ethically source contact information for your target audience. Our systems can identify decision-makers, extract verified contact details, and help you build high-quality lead lists.",
    icon: Users,
    color: "from-amber-500 to-orange-400",
  },
  {
    id: 4,
    title: "Real Estate & Finance Data Extraction",
    description:
      "Extract property listings, financial data, and market research for investment analysis and business intelligence.",
    details:
      "Get comprehensive real estate and financial data from multiple sources. Track property listings, price history, market trends, and financial indicators to make informed investment decisions.",
    icon: Building,
    color: "from-emerald-500 to-green-400",
  },
];

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-background/80 to-background"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized data extraction solutions tailored to your business
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={cn(
                "relative overflow-hidden rounded-xl border border-border transition-all duration-300",
                hoveredService === service.id
                  ? "shadow-lg shadow-primary/10"
                  : ""
              )}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <div
                  className={cn(
                    "w-14 h-14 rounded-lg mb-6 flex items-center justify-center",
                    `bg-gradient-to-br ${service.color}`
                  )}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">
                  {hoveredService === service.id
                    ? service.details
                    : service.description}
                </p>
              </div>

              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
                  `${service.color}`,
                  hoveredService === service.id ? "opacity-5" : ""
                )}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
