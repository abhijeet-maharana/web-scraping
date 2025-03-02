import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Database,
  ShoppingCart,
  Users,
  Building,
  Server,
  FileSearch,
  Globe,
  BarChart3,
} from "lucide-react";

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
  {
    id: 5,
    title: "Social Media Monitoring",
    description:
      "Track brand mentions, competitor activities, and industry trends across social media platforms.",
    details:
      "Monitor conversations about your brand, analyze sentiment, and identify emerging trends. Our social media scraping solutions help you understand your audience and improve your social strategy.",
    icon: Globe,
    color: "from-sky-500 to-blue-400",
  },
  {
    id: 6,
    title: "Content & SEO Analysis",
    description:
      "Extract and analyze content from websites to inform your SEO and content marketing strategies.",
    details:
      "Gather data on keywords, backlinks, content structure, and more. Our content scraping tools help you identify opportunities, analyze competitors, and optimize your digital presence.",
    icon: FileSearch,
    color: "from-rose-500 to-red-400",
  },
  {
    id: 7,
    title: "Custom Data Extraction Solutions",
    description:
      "Tailored scraping solutions for your specific business needs and data requirements.",
    details:
      "Every business has unique data needs. Our team can develop custom scraping solutions that target specific websites, extract particular data points, and deliver the information in your preferred format.",
    icon: Server,
    color: "from-indigo-500 to-violet-400",
  },
  {
    id: 8,
    title: "Data Analysis & Visualization",
    description:
      "Transform raw scraped data into actionable insights with advanced analytics and visualization.",
    details:
      "Don't just collect data—understand it. Our data analysis services help you identify patterns, trends, and opportunities in your scraped data, with custom dashboards and reports.",
    icon: BarChart3,
    color: "from-teal-500 to-green-400",
  },
];

export default function ServicesPage() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/90">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive web scraping and data extraction solutions tailored to
            your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-xl border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="p-8">
                <div
                  className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${service.color}`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {service.details}
                  </p>
                </div>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 ${service.color} group-hover:opacity-5`}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team can develop tailored data extraction solutions for your
            specific business requirements.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
