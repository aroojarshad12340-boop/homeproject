'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { 
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
  HiOutlineStar,
  HiOutlineHome,
  HiOutlineSparkles,
  HiOutlineX
} from 'react-icons/hi';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [showPlanDetails, setShowPlanDetails] = useState<number | null>(null);
  const [showConsultation, setShowConsultation] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const pricingPlans = [
    {
      id: 1,
      name: 'Essential',
      description: 'Perfect for small spaces and single rooms',
      monthlyPrice: 299,
      yearlyPrice: 2990,
      icon: HiOutlineHome,
      features: [
        'Initial consultation (2 hours)',
        'Mood board & concept development',
        'Space planning & layout',
        'Color palette recommendation',
        'Material selection (up to 5 items)',
        'Shopping list with links',
        '2 rounds of revisions',
        'Email support (48h response)'
      ],
      limitations: [
        'No on-site visits',
        'No project management',
        'No custom furniture design'
      ],
      popular: false,
      color: 'from-gray-50 to-gray-100',
      borderColor: 'border-gray-200',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
      iconColor: 'text-gray-600',
      fullDescription: 'The Essential plan is perfect for small projects like single rooms or apartments. You get professional design guidance while maintaining control over implementation.',
      idealFor: 'Small apartments, single rooms, home offices'
    },
    {
      id: 2,
      name: 'Professional',
      description: 'Ideal for full apartments and offices',
      monthlyPrice: 599,
      yearlyPrice: 5990,
      icon: HiOutlineStar,
      features: [
        'Everything in Essential, plus:',
        'In-depth consultation (4 hours)',
        '3D renderings & walkthrough',
        'Custom furniture design',
        'Material selection (up to 15 items)',
        'Lighting design plan',
        'Vendor coordination',
        '4 rounds of revisions',
        'Priority email support (24h)',
        '1 on-site visit'
      ],
      limitations: [
        'No project management',
        'Additional on-site visits extra'
      ],
      popular: true,
      color: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-400',
      buttonColor: 'bg-amber-600 hover:bg-amber-700',
      iconColor: 'text-amber-600',
      fullDescription: 'Our most popular plan for complete home renovations and office designs. Get comprehensive design support with 3D visualizations and vendor coordination.',
      idealFor: 'Full apartments, houses, small offices'
    },
    {
      id: 3,
      name: 'Premium',
      description: 'Full-service design for luxury spaces',
      monthlyPrice: 999,
      yearlyPrice: 9990,
      icon: HiOutlineSparkles,
      features: [
        'Everything in Professional, plus:',
        'Comprehensive consultation (8 hours)',
        'Full 3D visualization package',
        'Unlimited material selection',
        'Custom furniture & fixtures',
        'Full project management',
        'Contractor coordination',
        'Unlimited revisions',
        '24/7 priority support',
        '5 on-site visits',
        'Final styling & accessories',
        'Post-completion photoshoot'
      ],
      limitations: [],
      popular: false,
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      iconColor: 'text-purple-600',
      fullDescription: 'The ultimate full-service experience for luxury projects. We handle everything from concept to completion, including contractor coordination and final styling.',
      idealFor: 'Luxury homes, penthouses, high-end commercial'
    }
  ];

  const addOns = [
    {
      id: 1,
      name: 'Additional On-site Visit',
      price: 199,
      description: 'Extra site visit for measurements or meetings',
      details: 'Perfect for complex projects requiring multiple site visits. Includes travel within 50 miles.'
    },
    {
      id: 2,
      name: 'Custom Furniture Design',
      price: 499,
      description: 'Bespoke furniture pieces designed just for you',
      details: 'Work with our designers to create unique pieces tailored to your space and style.'
    },
    {
      id: 3,
      name: 'Lighting Design Package',
      price: 299,
      description: 'Comprehensive lighting plan and fixture selection',
      details: 'Professional lighting design including fixture selection, placement plans, and smart home integration.'
    },
    {
      id: 4,
      name: 'Project Management',
      price: 799,
      description: 'Full oversight from concept to completion',
      details: 'Complete project management including contractor coordination, timeline management, and quality control.'
    }
  ];

  const faqs = [
    {
      question: "What's included in the initial consultation?",
      answer: "The initial consultation includes a 2-hour meeting with our design team to discuss your vision, needs, budget, and timeline. We'll walk through your space, take measurements, and provide initial ideas and recommendations."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day satisfaction guarantee. If you're not happy with our initial concepts, we'll provide a full refund. After the concept phase, all sales are final due to the custom nature of our work."
    },
    {
      question: "Can I switch plans later?",
      answer: "Absolutely! You can upgrade your plan at any time. The difference in price will be prorated for the remainder of your billing cycle."
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes! We work with clients worldwide through virtual consultations, video calls, and digital collaboration tools. Our process is designed to be seamless regardless of location."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary by scope. A single room typically takes 4-6 weeks, while a full home can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and PayPal. For larger projects, we offer flexible payment plans."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./images/bg4.jpg" 
            alt="Pricing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-amber-400">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Choose the perfect plan for your project. All plans include our signature 
              design approach and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition"
            >
              <motion.div
                layout
                className={`w-6 h-6 bg-amber-600 rounded-full shadow-md ${
                  billingCycle === 'yearly' ? 'ml-8' : 'ml-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-amber-600 text-xs ml-1">Save 15%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative bg-gradient-to-br ${plan.color} rounded-2xl shadow-xl overflow-hidden border-2 ${
                  plan.popular ? plan.borderColor : 'border-transparent'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <plan.icon className={`text-3xl ${plan.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <HiOutlineCheckCircle className="text-green-500 text-lg flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    <li className="text-amber-600 text-sm font-medium">
                      +{plan.features.length - 4} more features
                    </li>
                  </ul>

                  <button
                    onClick={() => setShowPlanDetails(plan.id)}
                    className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group`}
                  >
                    View Plan Details
                    <HiOutlineArrowRight className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Details Modal */}
      <AnimatePresence>
        {showPlanDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
            onClick={() => setShowPlanDetails(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {pricingPlans.find(p => p.id === showPlanDetails) && (
                <>
                  <div className={`p-8 bg-gradient-to-br ${
                    pricingPlans.find(p => p.id === showPlanDetails)?.color
                  }`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {pricingPlans.find(p => p.id === showPlanDetails)?.name} Plan
                        </h2>
                        <p className="text-gray-600">
                          {pricingPlans.find(p => p.id === showPlanDetails)?.fullDescription}
                        </p>
                      </div>
                      <button
                        onClick={() => setShowPlanDetails(null)}
                        className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center hover:bg-white/80 transition"
                      >
                        <HiOutlineX className="text-xl" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                      <span className="text-3xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' 
                          ? pricingPlans.find(p => p.id === showPlanDetails)?.monthlyPrice 
                          : pricingPlans.find(p => p.id === showPlanDetails)?.yearlyPrice}
                      </span>
                      <span className="text-gray-500 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-2">Ideal For:</h3>
                      <p className="text-gray-600">
                        {pricingPlans.find(p => p.id === showPlanDetails)?.idealFor}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">All Features:</h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {pricingPlans.find(p => p.id === showPlanDetails)?.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <HiOutlineCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <Link
                        href="/contact"
                        className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition text-center"
                      >
                        Select This Plan
                      </Link>
                      <button
                        onClick={() => setShowPlanDetails(null)}
                        className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Optional <span className="text-amber-600">Add-ons</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">${addon.price}</span>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                    Add +
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-amber-600 text-xl">
                    {faqOpen === index ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {faqOpen === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./images/bg3.jpg" 
            alt="CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-3xl border border-white/10 p-12 md:p-16 shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Not Sure Which Plan is Right?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and we'll help you choose the perfect package for your project.
              </p>
              <button
                onClick={() => setShowConsultation(true)}
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition shadow-xl"
              >
                Book Free Consultation
                <HiOutlineArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Modal */}
      <AnimatePresence>
        {showConsultation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowConsultation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-md w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Book Consultation</h2>
                <button
                  onClick={() => setShowConsultation(false)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                >
                  <HiOutlineX />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
                >
                  Schedule Consultation
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default PricingPage;