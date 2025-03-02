import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DataAnimation } from "@/components/ui/data-animation";
import { Shield, CheckCircle, Lock, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <DataAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 mb-6">
            Hire me to Scrape any Website – Leads, Prices, Data & More!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Get real-time, structured data from any website – competitor prices,
            leads, e-commerce data, or anything you need. Fast, legal, and
            hassle-free!
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Contact us
          </Button>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Badge
              variant="secondary"
              className="py-2 px-4 flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              <span>GDPR-compliant</span>
            </Badge>
            <Badge
              variant="secondary"
              className="py-2 px-4 flex items-center gap-2"
            >
              <Lock className="h-4 w-4" />
              <span>Secure Data Handling</span>
            </Badge>
            <Badge
              variant="secondary"
              className="py-2 px-4 flex items-center gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Trusted by Businesses</span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
