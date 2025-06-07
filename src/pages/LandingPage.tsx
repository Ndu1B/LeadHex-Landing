import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Rocket, Zap, ArrowUpRight } from "lucide-react";

const ACCENT = "#78f5b2";
const BG = "#181c20";
const CARD = "#23272c";
const HEADER_FOOTER = "#23272c";
const CARDS_BG = "#fff";

const thirdParties = [
  { name: "Make", icon: "/logos/make.png" },
  { name: "n8n", icon: "/logos/n8n.png" },
  { name: "Instantly", icon: "/logos/instantly.png" },
  { name: "Apollo", icon: "/logos/apollo.png" },
  { name: "Apify", icon: "/logos/apify.png" },
  { name: "LinkedIn", icon: "/logos/linkedin.png" },
  { name: "Airtable", icon: "/logos/airtable.png" },
  { name: "GPT", icon: "/logos/gpt.png" },
];

export default function LeadHexLanding() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: BG }}>
      {/* Header */}
      <header className="w-full flex items-center justify-between px-8 py-6 mb-32" style={{ background: HEADER_FOOTER }}>
        <a href="#hero" className="text-lg font-bold tracking-widest" style={{ color: ACCENT }}>LEADHEX</a>
        <nav>
          <a href="/contact" className="text-white/70 hover:text-white text-base flex items-center gap-2">
            Contact <span className="text-xl"></span>
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <section id="hero" className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 mt-20 mb-40">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white" style={{ letterSpacing: -2 }}>
              Customized Growth<br />systems<br />for B2B<br />companies.
            </h1>
            <a
              href="/contact"
              className="bg-transparent border border-white/20 text-white px-5 py-2 rounded-lg w-fit mb-4 flex items-center gap-2 hover:bg-white/5"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              Let's talk <ArrowUpRight size={18} style={{ color: ACCENT }} />
            </a>
          </div>
        </section>

        {/* Cards Section with white background */}
        <section className="w-full py-40" style={{ background: CARDS_BG }}>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <Card style={{ background: CARD, borderColor: ACCENT }} className="border-2 shadow-xl rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-4 items-start">
                <Rocket style={{ color: ACCENT }} size={32} />
                <h2 className="text-xl font-semibold text-white">Lead Gen. + Personalized Emails</h2>
                <p className="text-gray-300 text-base">
                  For large firms targeting broad markets at scale. Includes a ready-made Make scenario that outputs to CSV for email campaigns.
                </p>
                <a href="/contact" className="text-base font-medium flex items-center gap-1" style={{ color: ACCENT }}>
                  Learn More <ArrowUpRight size={16} />
                </a>
              </CardContent>
            </Card>
            <Card style={{ background: CARD, borderColor: ACCENT }} className="border-2 shadow-xl rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-4 items-start">
                <Zap style={{ color: ACCENT }} size={32} />
                <h2 className="text-xl font-semibold text-white">Automation Template + Coaching</h2>
                <p className="text-gray-300 text-base">
                  Ideal for smaller firms with custom needs. Includes a documented setup, one-on-one call, and flexible templates.
                </p>
                <a href="/contact" className="text-base font-medium flex items-center gap-1" style={{ color: ACCENT }}>
                  Learn More <ArrowUpRight size={16} />
                </a>
              </CardContent>
            </Card>
            <Card style={{ background: CARD, borderColor: ACCENT }} className="border-2 shadow-xl rounded-2xl">
              <CardContent className="p-8 flex flex-col gap-4 items-start">
                <Mail style={{ color: ACCENT }} size={32} />
                <h2 className="text-xl font-semibold text-white">Full-Service Outreach</h2>
                <p className="text-gray-300 text-base">
                  A full-service plan: lead gen + outreach via Instantly, strategy calls, CSV enrichment, and monthly insurance.
                </p>
                <a href="/contact" className="text-base font-medium flex items-center gap-1" style={{ color: ACCENT }}>
                  Learn More <ArrowUpRight size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why it works Section */}
        <section className="w-full max-w-5xl mx-auto pt-32 pb-8 text-center space-y-10">
          <h2 className="text-5xl font-bold text-white mb-8">Why it works</h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Our systems are built for B2B teams who want to scale without the usual complexity. We combine proven automation, AI, and expert strategy to deliver more leads, more meetings, and more revenue—without the bloat or hassle of traditional solutions. Clients see results like 10x pipeline growth, 5x faster outreach, and higher reply rates, all with less manual work.
          </p>
        </section>

        {/* How it works Section */}
        <section className="w-full max-w-5xl mx-auto py-32 text-center space-y-10">
          <h3 className="text-4xl font-bold text-white mb-6">How it works</h3>
          <div className="text-lg text-gray-300 max-w-3xl mx-auto space-y-6">
            <p>1. <span style={{ color: ACCENT }}>Discovery & Strategy:</span> We analyze your goals, market, and current processes to design a custom automation plan.</p>
            <p>2. <span style={{ color: ACCENT }}>System Build:</span> We set up and integrate the best tools (Make, n8n, Instantly, Apollo, Apify, LinkedIn, Airtable, GPT) for your workflow.</p>
            <p>3. <span style={{ color: ACCENT }}>Launch & Iterate:</span> We launch, monitor, and optimize your system for maximum results, with ongoing support and improvements.</p>
          </div>
        </section>

        {/* Third-party Carousel Section */}
        <section className="w-full py-20" style={{ background: CARD }}>
          <div className="max-w-5xl mx-auto overflow-hidden">
            <div className="relative w-full h-24 flex items-center">
              <div className="flex gap-16 animate-scroll-carousel w-max" style={{ minWidth: '100%' }}>
                {thirdParties.concat(thirdParties).map((tp, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[180px]">
                    <img src={tp.icon} alt={tp.name} className="h-40 w-40 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-3xl mx-auto space-y-4 text-center text-gray-300 mb-32 mt-32">
          <h2 className="text-4xl font-bold mb-4" style={{ color: ACCENT }}>Ready to grow?</h2>
          <p className="text-lg">
            All services are custom-fit and designed to maximize meeting bookings, without complexity. Let us handle the tech so you can focus on growth.
          </p>
          <a
            href="/contact"
            className="bg-[#78f5b2] text-black font-bold px-8 py-3 rounded-lg text-lg hover:bg-[#5be6a0] transition-colors inline-block"
            style={{ background: ACCENT }}
          >
            Get in Touch
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-white/10 text-sm text-gray-400" style={{ background: HEADER_FOOTER }}>
        <div className="flex justify-center gap-8">
          <a href="/terms" className="hover:underline" style={{ color: ACCENT }}>Terms</a>
          <a href="/privacy" className="hover:underline" style={{ color: ACCENT }}>Privacy</a>
          <a href="/contact" className="hover:underline" style={{ color: ACCENT }}>Contact</a>
        </div>
      </footer>

      {/* Carousel Animation */}
      <style>{`
        @keyframes scroll-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll-carousel {
          animation: scroll-carousel 60s linear infinite;
        }
      `}</style>
    </div>
  );
} 