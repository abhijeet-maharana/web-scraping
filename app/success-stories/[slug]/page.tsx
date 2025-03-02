import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  MessageSquare,
  Share2,
  User,
} from "lucide-react";

// This would typically come from a database or CMS
const successStories = {
  "ecommerce-price-intelligence": {
    title: "E-commerce Price Intelligence",
    subtitle:
      "How RetailTech Inc. increased profit margins by 15% using our competitive price monitoring solution",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "E-commerce",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    authorRole: "VP of E-commerce, RetailTech Inc.",
    authorAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    challenge:
      "RetailTech Inc., a mid-sized e-commerce retailer with over 5,000 products, was struggling to keep up with competitors' pricing strategies. Manual price checking was time-consuming and inefficient, leading to missed opportunities and reduced profit margins. They needed a solution that could automatically monitor competitor prices across multiple platforms and provide actionable insights.",
    solution:
      "We implemented our E-commerce Price Intelligence solution, which included:\n\n1. Automated data extraction from 15+ competitor websites\n2. Real-time price monitoring for their entire product catalog\n3. Custom alerts for price changes and stock availability\n4. Competitive analysis dashboard with actionable insights\n5. API integration with their pricing management system",
    results: [
      "15% increase in profit margins within the first quarter",
      "Reduced manual monitoring time by 90%",
      "Identified 200+ pricing opportunities in the first month",
      "Improved competitive positioning with dynamic pricing",
      "Increased customer retention through strategic price matching",
    ],
    testimonial:
      "Transformed our business intelligence capabilities. We now have real-time competitor data that drives our pricing strategy. The ROI has been incredible – we've seen a 15% increase in profit margins while staying competitive in a crowded market.",
    relatedStories: [
      {
        id: 2,
        title: "Real Estate Market Analysis",
        slug: "real-estate-market-analysis",
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 6,
        title: "Travel Industry Competitive Analysis",
        slug: "travel-industry-competitive-analysis",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  "real-estate-market-analysis": {
    title: "Real Estate Market Analysis",
    subtitle:
      "Helping PropertyVision identify undervalued properties with comprehensive market data",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Real Estate",
    date: "February 28, 2025",
    author: "Michael Chen",
    authorRole: "CTO, PropertyVision",
    authorAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    challenge:
      "PropertyVision, a property investment firm, needed to identify undervalued properties in competitive markets. Traditional methods of market research were slow and often missed opportunities. They required a solution that could analyze thousands of property listings daily and identify potential investments based on specific criteria.",
    solution:
      "We developed a custom Real Estate Data Extraction solution that included:\n\n1. Automated data collection from 20+ real estate listing platforms\n2. Historical price trend analysis for target neighborhoods\n3. Comprehensive property data including amenities, square footage, and nearby facilities\n4. Predictive analytics to identify potentially undervalued properties\n5. Custom alerts for new listings matching investment criteria",
    results: [
      "200+ properties analyzed daily across multiple markets",
      "12% higher ROI on investments compared to previous methods",
      "Identified 35 undervalued properties in the first month",
      "Reduced time to identify investment opportunities by 75%",
      "Expanded investment portfolio by 40% within six months",
    ],
    testimonial:
      "The quality and accuracy of the data we receive is exceptional. Their compliance-first approach gave us confidence that all data is ethically sourced. We've been able to identify investment opportunities that would have been impossible to find manually, resulting in significantly higher returns.",
    relatedStories: [
      {
        id: 1,
        title: "E-commerce Price Intelligence",
        slug: "ecommerce-price-intelligence",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 4,
        title: "Financial Market Data Analysis",
        slug: "financial-market-data-analysis",
        image:
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  "b2b-lead-generation": {
    title: "B2B Lead Generation",
    subtitle:
      "Generating qualified sales leads for GrowthLabs, resulting in a 3x increase in conversion rates",
    image:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Lead Generation",
    date: "January 20, 2025",
    author: "Alex Rodriguez",
    authorRole: "Head of Marketing, GrowthLabs",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    challenge:
      "GrowthLabs, a B2B SaaS company, was struggling with lead generation. Their sales team was spending too much time on prospecting and not enough on closing deals. They needed a solution to identify and qualify potential leads at scale.",
    solution:
      "We implemented our B2B Lead Generation solution, which included:\n\n1. Targeted data extraction from company websites, professional networks, and industry directories\n2. Automated identification of decision-makers and key stakeholders\n3. Contact information verification and enrichment\n4. Integration with their CRM system for seamless lead management\n5. Compliance checks to ensure all data collection adhered to privacy regulations",
    results: [
      "10,000+ qualified leads generated in the first quarter",
      "3x increase in conversion rates from lead to customer",
      "60% reduction in customer acquisition cost (CAC)",
      "Sales team productivity increased by 40%",
      "Expanded target market by identifying new industry segments",
    ],
    testimonial:
      "We've tried other web scraping services, but none matched the reliability and scalability of this. Their API integration was seamless, and the quality of leads has transformed our sales process. Our conversion rates have tripled, and our sales team can focus on what they do best – closing deals.",
    relatedStories: [
      {
        id: 4,
        title: "Financial Market Data Analysis",
        slug: "financial-market-data-analysis",
        image:
          "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 5,
        title: "Healthcare Research Automation",
        slug: "healthcare-research-automation",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
};

export default function SuccessStoryDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const story = successStories[slug as keyof typeof successStories];

  if (!story) {
    return (
      <main className="min-h-screen">
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Story not found</h1>
          <p className="mb-8">
            The success story you're looking for doesn't exist or has been
            moved.
          </p>
          <Button asChild>
            <Link href="/success-stories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Success Stories
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <section className="pt-32 pb-16">
      <div className="container max-w-4xl mx-auto">
        <Link
          href="/success-stories"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Success Stories
        </Link>

        <div className="mb-8">
          <div className="text-sm font-medium text-primary mb-2">
            {story.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{story.title}</h1>
          <p className="text-xl text-muted-foreground">{story.subtitle}</p>
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={story.authorAvatar}
                alt={story.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-medium">{story.author}</div>
              <div className="text-xs text-muted-foreground">
                {story.authorRole}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{story.date}</span>
          </div>

          <Button variant="ghost" size="sm" className="ml-auto">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-10">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>The Challenge</h2>
          <p>{story.challenge}</p>

          <h2>Our Solution</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: story.solution.replace(/\n\n/g, "<br><br>"),
            }}
          />

          <h2>Results</h2>
          <ul>
            {story.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>

          <blockquote>
            <p>{story.testimonial}</p>
            <footer>
              — {story.author}, {story.authorRole}
            </footer>
          </blockquote>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold mb-8">Related Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {story.relatedStories.map((relatedStory) => (
              <Link
                key={relatedStory.id}
                href={`/success-stories/${relatedStory.slug}`}
                className="group"
              >
                <div className="rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedStory.image}
                      alt={relatedStory.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {relatedStory.title}
                    </h3>
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

        <div className="mt-16 bg-card border border-border rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to achieve similar results?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get in touch with our team to discuss your data extraction needs and
            how we can help your business grow.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
