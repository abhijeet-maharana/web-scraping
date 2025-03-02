"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MessageSquare,
  Mail,
  Phone,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

// const clientLogos = [
//   "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
//   "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
//   "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
//   "https://images.unsplash.com/photo-1599305446243-530000b45ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
// ];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-background/80"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Data Collection?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to discuss your data extraction needs and
            how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>scrape@pixelperfectui.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+917008954962</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>WhatsApp: +917008954962</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* <div>
              <h3 className="text-2xl font-semibold mb-4">Trusted By</h3>
              <div className="grid grid-cols-4 gap-4">
                {clientLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-2 flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`Client ${index + 1}`}
                      className="h-8 opacity-70"
                    />
                  </div>
                ))}
              </div>
            </div> */}
          </motion.div>

          <motion.div
            className="bg-card rounded-xl border border-border p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your data extraction needs..."
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
