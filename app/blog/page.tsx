import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, Filter, Search, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Scraping: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that are shaping the future of web data extraction and how businesses can prepare.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Industry Trends",
    date: "April 10, 2025",
    author: "David Chen",
    authorAvatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    readTime: "8 min read",
    slug: "future-of-web-scraping-trends-2025",
  },
  {
    id: 2,
    title: "Ethical Data Collection: Best Practices for Compliant Web Scraping",
    excerpt:
      "Learn how to navigate the complex legal landscape of web scraping while maintaining ethical standards and regulatory compliance.",
    image:
      "https://images.unsplash.com/photo-1576444356170-66073046b1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Compliance",
    date: "March 25, 2025",
    author: "Emma Rodriguez",
    authorAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    readTime: "6 min read",
    slug: "ethical-data-collection-best-practices",
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Data Extraction and Analysis",
    excerpt:
      "Discover how artificial intelligence and machine learning are transforming the way businesses extract, process, and analyze web data.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology",
    date: "March 15, 2025",
    author: "Michael Johnson",
    authorAvatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    readTime: "10 min read",
    slug: "ai-revolutionizing-data-extraction",
  },
  {
    id: 4,
    title: "Overcoming Common Web Scraping Challenges",
    excerpt:
      "Address the most frequent obstacles in web data extraction and learn practical solutions to ensure reliable and efficient scraping.",
    image:
      "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technical",
    date: "March 5, 2025",
    author: "Sarah Williams",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    readTime: "7 min read",
    slug: "overcoming-web-scraping-challenges",
  },
  {
    id: 5,
    title:
      "Data-Driven Decision Making: Turning Web Data into Business Insights",
    excerpt:
      "Learn how to transform raw web data into actionable business intelligence that drives strategic decision-making and growth.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Business Strategy",
    date: "February 28, 2025",
    author: "James Wilson",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    readTime: "9 min read",
    slug: "data-driven-decision-making",
  },
  {
    id: 6,
    title: "Web Scraping for E-commerce: Competitive Intelligence Strategies",
    excerpt:
      "Explore how e-commerce businesses can leverage web scraping to monitor competitors, optimize pricing, and identify market opportunities.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "E-commerce",
    date: "February 20, 2025",
    author: "Lisa Thompson",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    readTime: "8 min read",
    slug: "web-scraping-ecommerce-competitive-intelligence",
  },
];

const categories = [
  "All Categories",
  "Industry Trends",
  "Compliance",
  "Technology",
  "Technical",
  "Business Strategy",
  "E-commerce",
];

export default function Blog() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/90">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights, guides, and industry news about web scraping, data
            extraction, and business intelligence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
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

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${blogPosts[0].slug}`} className="group">
            <div className="grid md:grid-cols-5 gap-8 rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
              <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              </div>
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                <div className="text-sm text-primary font-medium mb-2">
                  {blogPosts[0].category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={blogPosts[0].authorAvatar}
                        alt={blogPosts[0].author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.authorAvatar}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
