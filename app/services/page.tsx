import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

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
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
