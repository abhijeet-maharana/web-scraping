"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Database, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-4 right-4 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Web Scraping Service</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/success-stories"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Success Stories
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp us
          </Button>
        </div>
      </div>
    </header>
  );
}
