import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Rocket, Zap } from "lucide-react";

export default function LeadHexLanding() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-green-400">LeadHex</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          AI-Powered Lead Generation & Outreach Automations for Growth-Driven Teams
        </p>
        <Button className="text-green-400 border border-green-400 hover:bg-green-600 hover:text-white">
          Contact Us
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gray-900 border-green-500 hover:scale-105 transition-transform">
          <CardContent className="p-6 space-y-4">
            <Rocket className="text-green-400" size={32} />
            <h2 className="text-2xl font-semibold">Lead Gen. + Personalized Emails</h2>
            <p className="text-gray-400">
              For large firms targeting broad markets at scale. Includes a ready-made Make scenario that outputs to CSV for email campaigns.
            </p>
            <a href="#contact" className="text-green-400 hover:underline">Learn More</a>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-green-500 hover:scale-105 transition-transform">
          <CardContent className="p-6 space-y-4">
            <Zap className="text-green-400" size={32} />
            <h2 className="text-2xl font-semibold">Automation Template + Coaching</h2>
            <p className="text-gray-400">
              Ideal for smaller firms with custom needs. Includes a documented setup, one-on-one call, and flexible templates.
            </p>
            <a href="#contact" className="text-green-400 hover:underline">Learn More</a>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-green-500 hover:scale-105 transition-transform">
          <CardContent className="p-6 space-y-4">
            <Mail className="text-green-400" size={32} />
            <h2 className="text-2xl font-semibold">Full-Service Outreach</h2>
            <p className="text-gray-400">
              A full-service plan: lead gen + outreach via Instantly, strategy calls, CSV enrichment, and monthly insurance.
            </p>
            <a href="#contact" className="text-green-400 hover:underline">Learn More</a>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto space-y-4 text-center text-gray-400">
        <p>
          All services are custom-fit and designed to maximize meeting bookings, without complexity. Let us handle the tech so you can focus on growth.
        </p>
        <Button className="bg-green-400 text-black hover:bg-green-300">
          Get in Touch
        </Button>
      </section>

      <footer id="contact" className="text-center pt-20 border-t border-gray-800 text-sm text-gray-500">
        <p>Built by Samuel Ndu – <a href="mailto:samuel.ndu@leadhex.net" className="underline text-green-400">samuel.ndu@leadhex.net</a></p>
      </footer>
    </div>
  );
} 