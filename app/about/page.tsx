"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Database,
  Shield,
  Zap,
  Users,
  Award,
  CheckCircle,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "With over 15 years of experience in data science and web technologies, Alex founded the company with a vision to make web data accessible to businesses of all sizes.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah Williams",
    role: "CTO",
    bio: "Sarah leads our technical team, bringing expertise in distributed systems, machine learning, and ethical data collection practices.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Chen",
    role: "Head of Data Science",
    bio: "Michael oversees our data processing pipelines and ensures the highest quality of data delivery to our clients.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Emma Rodriguez",
    role: "Legal & Compliance Director",
    bio: "Emma ensures all our data collection practices are ethical, legal, and compliant with global regulations.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "Started with a small team of 3 data scientists focused on e-commerce data extraction.",
  },
  {
    year: "2020",
    title: "First Enterprise Client",
    description:
      "Secured our first Fortune 500 client and expanded our team to 15 members.",
  },
  {
    year: "2022",
    title: "API Platform Launch",
    description:
      "Launched our Data-as-a-Service API platform, serving over 100 businesses.",
  },
  {
    year: "2023",
    title: "International Expansion",
    description:
      "Opened offices in Europe and Asia to better serve our global client base.",
  },
  {
    year: "2025",
    title: "AI Integration",
    description:
      "Integrated advanced AI capabilities into our data extraction and analysis services.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Ethical Data Collection",
    description:
      "We adhere to the highest ethical standards in all our data collection practices.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description:
      "We continuously innovate to provide the most efficient and reliable data extraction solutions.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We view our clients as partners and are committed to their long-term success.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "We ensure the highest quality of data through rigorous validation and cleaning processes.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="container mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-6">
              I'm a data extraction specialist with a passion for turning web
              data into valuable business insights.
            </p>
            <p className="text-muted-foreground mb-6">
              With over 7 years of experience in web scraping and data
              extraction, I've helped businesses of all sizes access the data
              they need to make informed decisions, gain competitive advantages,
              and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>7+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-card border-y border-border py-20 mb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground">
              From humble beginnings to becoming a trusted data extraction
              specialist.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="md:w-1/2 p-6">
                      <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
                        <div className="text-primary font-bold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Values</h2>
          <p className="text-muted-foreground">
            The core principles that guide my work and relationships with
            clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
          <p className="text-muted-foreground">
            I specialize in various data extraction techniques and technologies
            to deliver the best results for my clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-card border border-border rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Web Scraping Technologies
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Python (BeautifulSoup, Scrapy, Selenium)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Node.js (Puppeteer, Cheerio)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Headless browsers & API integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Proxy management & IP rotation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Data Processing</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Data cleaning & normalization</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Structured data extraction (JSON, XML)</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Natural language processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Database integration (SQL, NoSQL)</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Industry Knowledge</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>E-commerce & retail</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Real estate & finance</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Lead generation & sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Market research & competitive analysis</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="bg-card border border-border rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how I can help you extract the data you need to grow
              your business.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
            >
              <Link href="/contact" className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
