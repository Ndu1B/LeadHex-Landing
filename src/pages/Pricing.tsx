import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { createCheckoutSession } from '../api/checkout';

const plans = [
  {
    name: 'LeadHex Standard',
    price: '$599',
    description: 'Single Inbox Plan for hands-off growth',
    features: [
      'One custom inbox connected to outreach automation',
      'Verified leads and data enrichment',
      'Personalized AI email copywriting',
      'Ongoing deliverability support',
      'Lead dashboard (Google Sheets + optional Softr UI)',
      'Around to 500 leads per month'
    ],
    priceId: import.meta.env.VITE_STRIPE_PRODUCT_STANDARD,
    planType: 'subscription'
  },
  {
    name: 'LeadHex Plus',
    price: '$799',
    description: 'Dual Inbox Plan for growing teams',
    features: [
      'Everything in Standard',
      'Additional custom email inbox',
      'Higher sending volume',
      'Improved deliverability',
      'Split testing capabilities',
      'Enhanced campaign management'
    ],
    priceId: import.meta.env.VITE_STRIPE_PRODUCT_PLUS,
    planType: 'subscription'
  },
  {
    name: 'LeadHex Scale',
    price: '$999',
    description: 'Three Inbox Plan for high-volume outreach',
    features: [
      'Three fully managed inboxes',
      'Higher lead throughput',
      'Faster campaign cycles',
      'Priority support',
      'Advanced analytics',
      'Custom integration options'
    ],
    priceId: import.meta.env.VITE_STRIPE_PRODUCT_SCALE,
    planType: 'subscription'
  }
];

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string, planType: 'subscription' | 'payment') => {
    setLoading(priceId);
    try {
      await createCheckoutSession(priceId, planType);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600">
            Scale your outreach with our flexible pricing options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                    <div className="text-3xl font-bold text-teal-500 mb-2">
                      {plan.price}<span className="text-base font-normal text-gray-600">/month</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSubscribe(plan.priceId, plan.planType)}
                    disabled={!!loading}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                  >
                    {loading === plan.priceId ? 'Processing...' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <CardContent className="p-8">
              <div className="md:flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">LeadHex Enterprise App</h2>
                  <p className="mb-4 text-teal-50">Custom Frontend with Instantly Integration</p>
                  <p className="text-3xl font-bold mb-4">$2,500 <span className="text-base font-normal">one-time</span></p>
                </div>
                <Button
                  onClick={() => handleSubscribe(import.meta.env.VITE_STRIPE_PRODUCT_ENTERPRISE, 'payment')}
                  disabled={!!loading}
                  className="bg-white text-teal-600 hover:bg-teal-50"
                >
                  {loading === import.meta.env.VITE_STRIPE_PRODUCT_ENTERPRISE ? 'Processing...' : 'Get Started'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
} 