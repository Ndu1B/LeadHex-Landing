import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-slate mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Terms of Service</h1>
          
          <p className="text-gray-600 mb-8">
            Welcome to LeadHex. By accessing or using our service, you agree to be bound by the following terms and conditions.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Services Provided</h2>
            <p className="text-gray-600">
              LeadHex is a B2B outreach automation platform that helps businesses personalize and streamline email campaigns using AI and integration tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Subscription & Payments</h2>
            <p className="text-gray-600">
              By subscribing, you agree to recurring charges based on your selected plan. Upgrades or downgrades will apply to the next billing cycle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Cancellations</h2>
            <p className="text-gray-600">
              You may cancel at any time. Refunds are not issued for unused time except as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="text-gray-600">
              LeadHex is not responsible for issues arising from third-party integrations or deliverability limitations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Modifications</h2>
            <p className="text-gray-600">
              Terms may change. Continued use constitutes acceptance.
            </p>
          </section>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              For questions, please{' '}
              <Link to="/contact" className="text-teal-500 hover:text-teal-600 underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 