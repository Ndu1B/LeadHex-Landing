import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-gray-900">
      <header className="border-b bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex justify-center items-center">
          <img 
            src="/leadhex-logo.png" 
            alt="Leadhex" 
            className="h-60 w-auto py-4"
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-emerald-500 text-transparent bg-clip-text">
            Empowering Small & Mid-Sized Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Leadhex builds automation infrastructure that helps lean companies stay competitive in a fast-evolving tech environment.
            No bloat, no complexity — just the tools you need to scale what works.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="transform transition-all hover:scale-105">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Who We Help</h3>
              <ul className="space-y-3">
                {[
                  'Bootstrapped SaaS founders',
                  'Small marketing or consulting agencies',
                  'Operations-driven service businesses',
                  'Growth-focused B2B teams'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Why Leadhex?</h3>
              <ul className="space-y-3">
                {[
                  '25–30% email open rates (Industry Average: 15–20%)',
                  '8–10% reply rates (Industry Average: 2–5%)',
                  'Fully automated Lead Generation, Outreach & Response Handling',
                  'Zero-hassle integrations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-md mx-auto">
          <Card className="transform hover:shadow-xl transition-all">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-emerald-700">Let's Talk</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all h-32"
                />
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500 border-t bg-white/50">
        © {new Date().getFullYear()} Leadhex. Built for small teams.
      </footer>
    </div>
  );
} 