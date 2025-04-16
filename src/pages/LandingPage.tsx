import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Navbar */}
      <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <Link to="/">
            <h1 className="text-xl font-semibold text-teal-500">LeadHex</h1>
          </Link>
          <div className="flex gap-6">
            <Link to="/pricing" className="text-gray-600 hover:text-teal-500 transition-colors">
              Pricing
            </Link>
            <a href="#login" className="text-gray-600 hover:text-teal-500 transition-colors">
              Login
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 relative z-1">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-24 text-center"
        >
          <h1 className="text-6xl font-bold mt-40 mb-6 bg-gradient-to-r from-teal-400 to-teal-500 text-transparent bg-clip-text">
            Empowering local businesses through AI-powered automation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the power of intelligent outreach automation designed specifically for small and mid-sized businesses.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-teal-400 to-teal-500 hover:from-teal-500 hover:to-teal-600">
            Get in Touch
          </Button>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Smarter outreach with zero busywork</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "/public/stats-icon.png",
                title: "Hyper-personalized emails",
                description: "AI-powered customization for each prospect"
              },
              {
                icon: "/public/mail-icon.png",
                title: "Intelligent Dashboard",
                description: "Track leads and campaign performance in real-time"
              },
              {
                icon: "/public/sync-icon.png",
                title: "Seamless Integration",
                description: "Works with your existing tools and workflows"
              }
            ].map((feature, i) => (
              <Card key={i} className="backdrop-blur-sm bg-white/50 hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        <section className="text-center max-w-3xl mx-auto mt-24">
          <h2 className="text-4xl font-bold mb-6 bg-black text-transparent bg-clip-text">
            Empowering Small & Mid-Sized Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Leadhex builds automation infrastructure that helps lean companies stay competitive in a fast-evolving tech environment.
            No bloat, no complexity — just the tools you need to scale what works.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 mt-24 mb-40">
          <Card className="transform transition-all hover:scale-105">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">Who We Help</h3>
              <ul className="space-y-3">
                {[
                  'Bootstrapped SaaS founders',
                  'Small marketing or consulting agencies',
                  'Operations-driven service businesses',
                  'Growth-focused B2B teams'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="transform transition-all hover:scale-105">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-500">Why Leadhex?</h3>
              <ul className="space-y-3">
                {[
                  '25–30% email open rates (Industry Average: 15–20%)',
                  '8–10% reply rates (Industry Average: 2–5%)',
                  'Fully automated Lead Generation, Outreach & Response Handling',
                  'Zero-hassle integrations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        
      </main>

      <footer className="p-6 text-center text-sm text-gray-500 border-t bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-center gap-8">
          <Link to="/contact" className="hover:text-teal-500">Contact</Link>
          <Link to="/terms" className="hover:text-teal-500">Terms</Link>
          <Link to="/privacy" className="hover:text-teal-500">Privacy</Link>
        </div>
        <div className="mt-8">
          © {new Date().getFullYear()} Leadhex. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 