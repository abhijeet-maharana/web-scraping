import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const successStories = [
  {
    id: 1,
    title: "E-commerce Price Intelligence",
    description:
      "How a retail chain increased profit margins by 15% using our competitive price monitoring solution.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    date: "March 15, 2025",
    slug: "ecommerce-price-intelligence",
  },
  {
    id: 2,
    title: "Real Estate Market Analysis",
    description:
      "Helping a property investment firm identify undervalued properties with comprehensive market data.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    date: "February 28, 2025",
    slug: "real-estate-market-analysis",
  },
  {
    id: 3,
    title: "B2B Lead Generation",
    description:
      "Generating qualified sales leads for a SaaS company, resulting in a 3x increase in conversion rates.",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lead Generation",
    date: "January 20, 2025",
    slug: "b2b-lead-generation",
  },
  {
    id: 4,
    title: "Financial Market Data Analysis",
    description:
      "How a hedge fund leveraged our data extraction to gain insights into market trends and make informed investment decisions.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Finance",
    date: "April 5, 2025",
    slug: "financial-market-data-analysis",
  },
  {
    id: 5,
    title: "Healthcare Research Automation",
    description:
      "Automating data collection for a healthcare research firm, reducing research time by 60% and improving accuracy.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Healthcare",
    date: "March 10, 2025",
    slug: "healthcare-research-automation",
  },
  {
    id: 6,
    title: "Travel Industry Competitive Analysis",
    description:
      "How a travel booking platform used our data to monitor competitors and optimize pricing strategies.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Travel",
    date: "February 15, 2025",
    slug: "travel-industry-competitive-analysis",
  },
];

const categories = [
  "All Categories",
  "E-commerce",
  "Real Estate",
  "Lead Generation",
  "Finance",
  "Healthcare",
  "Travel",
];

export default function SuccessStories() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover how businesses across industries are leveraging our data
            extraction solutions to gain competitive advantages and drive
            growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search success stories..." className="pl-10" />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <div className="relative">
              <select className="appearance-none bg-card border border-border rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/20">
                {categories.map((category, index) => (
                  <option key={index}>{category}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <Link
              key={story.id}
              href={`/success-stories/${story.slug}`}
              className="group"
            >
              <div className="rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {story.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {story.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Read Case Study
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
