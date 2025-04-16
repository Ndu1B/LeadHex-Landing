import { motion } from 'framer-motion';


export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            At LeadHex, we value your privacy. This policy explains how we collect, use, and safeguard your data.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. What We Collect</h2>
            <p className="text-gray-600">
              We collect contact information, usage data, and campaign performance data necessary to operate our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Data</h2>
            <p className="text-gray-600">
              Data is used to provide services, communicate with you, and improve our platform. We do not sell your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
            <p className="text-gray-600">
              We use services like Make, OpenAI, Instantly, and Stripe. Their privacy policies apply.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies & Analytics</h2>
            <p className="text-gray-600">
              We use analytics tools to understand site usage. You can disable cookies in your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-600">
              You may request to access or delete your data by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-600">
              For privacy-related inquiries, email{' '}
              <a href="mailto:samuel@leadhex.net" className="text-teal-500 hover:text-teal-600">
                samuel@leadhex.net
              </a>
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
} 