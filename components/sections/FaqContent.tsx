"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    id: "general",
    label: "General FAQs",
    faqs: [
      {
        q: "What Are Your Business Hours?",
        a: "Our team is available Monday to Friday, 9:00 AM – 6:00 PM (PST). For urgent matters, you can reach us via email and we'll respond within 24 hours.",
      },
      {
        q: "How Can I Contact Customer Support?",
        a: "You can reach our support team via email at admin@plorixhub.com, call us at +990-737 621 432, or use the contact form on our website. We aim to respond within one business day.",
      },
      {
        q: "What Payment Methods Do You Accept?",
        a: "We accept major credit and debit cards, bank transfers, and secure online payment gateways. All transactions are processed through encrypted systems to ensure maximum security.",
      },
      {
        q: "What Is Your Return/Refund Policy?",
        a: "We offer a satisfaction guarantee on all our services. If you're not happy with the deliverables within the first milestone, we'll work with you to make it right or provide a refund per our agreement terms.",
      },
      {
        q: "Do You Offer Any Discounts Or Promotions?",
        a: "Yes, we offer seasonal promotions and discounts for long-term partnerships. Startups and non-profits may also qualify for special pricing. Contact us to learn more.",
      },
      {
        q: "Is My Personal Information Secure?",
        a: "Absolutely. We follow strict data protection protocols and comply with GDPR regulations. Your personal information is never shared with third parties without your explicit consent.",
      },
      {
        q: "What Are The System Requirements For Your Software?",
        a: "Our web applications work on all modern browsers (Chrome, Firefox, Safari, Edge). For enterprise software, we'll provide specific requirements based on your deployment environment.",
      },
      {
        q: "Does Your Software Integrate With Other Software?",
        a: "Yes, we build with integration in mind. Our solutions support REST APIs, webhooks, and can connect with popular tools like Slack, Salesforce, QuickBooks, and more.",
      },
      {
        q: "How Much Does Your Service Cost?",
        a: "Pricing varies based on project scope, complexity, and timeline. We offer custom quotes after an initial discovery call. Contact us to discuss your specific needs and budget.",
      },
    ],
  },
  {
    id: "product",
    label: "Product/Service FAQs",
    faqs: [
      {
        q: "What Services Do You Offer?",
        a: "We provide a wide range of IT solutions including web development, software development, UI/UX design, system integration, and technical support. Our services are tailored to meet the specific needs of businesses of all sizes.",
      },
      {
        q: "Is Your Service Customizable?",
        a: "Yes, all our services are fully customizable. We work closely with clients to understand their unique requirements and tailor our solutions accordingly.",
      },
      {
        q: "How Long Does It Take To Complete A Project?",
        a: "Project timelines depend on scope and complexity. A simple website might take 2–4 weeks, while a complex enterprise application could take 3–6 months. We provide detailed timelines during the planning phase.",
      },
      {
        q: "Do You Provide Ongoing Maintenance And Support?",
        a: "Yes, we offer flexible maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements.",
      },
      {
        q: "Is Your Software Scalable?",
        a: "Absolutely. We design all our solutions with scalability in mind, using cloud-native architectures, microservices, and horizontal scaling strategies to grow with your business.",
      },
      {
        q: "Do You Offer Demo Or Trial Versions?",
        a: "For SaaS products we develop, we can implement trial periods or demo environments. For custom projects, we often provide prototypes or MVP versions for testing before full development.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical FAQs",
    faqs: [
      {
        q: "What Technologies Do You Use For Development?",
        a: "We use modern technologies such as HTML5, CSS3, JavaScript, React, PHP, and WordPress, depending on project requirements. Our tech stack is selected based on performance, scalability, and security needs.",
      },
      {
        q: "Is Your Code Optimized And Well-Structured?",
        a: "Yes, we follow industry best practices including SOLID principles, clean architecture, thorough code reviews, and comprehensive test coverage to ensure maintainable, efficient code.",
      },
      {
        q: "Do You Ensure Website Security?",
        a: "Security is a top priority. We implement OWASP security standards, SSL/TLS encryption, input validation, secure authentication, and regular security audits to protect your application.",
      },
      {
        q: "Is The Website Fully Responsive?",
        a: "All our web solutions are built mobile-first and tested across all major devices and screen sizes to ensure a seamless experience for every user.",
      },
      {
        q: "Do You Provide API Integration Services?",
        a: "Yes, we specialize in API development and integration. We can connect your application with third-party services, payment gateways, CRM systems, and any RESTful or GraphQL API.",
      },
    ],
  },
  {
    id: "payment",
    label: "Payment FAQs",
    faqs: [
      {
        q: "What Payment Methods Do You Accept?",
        a: "We accept major credit and debit cards, bank transfers, and secure online payment gateways. All transactions are processed through encrypted systems to ensure maximum security.",
      },
      {
        q: "Do You Require An Advance Payment?",
        a: "Yes, we typically require a 30–50% advance payment to begin the project. The remaining balance is split based on project milestones, ensuring transparency for both parties.",
      },
      {
        q: "Is My Payment Information Secure?",
        a: "Yes, we use industry-standard encryption and never store sensitive payment data directly. All payments are processed via PCI-DSS compliant payment processors.",
      },
      {
        q: "Do You Offer Installment Payment Options?",
        a: "Yes, for larger projects we offer flexible installment plans tied to project milestones. We'll work with you to create a payment schedule that fits your budget and project timeline.",
      },
    ],
  },
];

export default function FaqContent() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFAQs = FAQ_CATEGORIES[activeCategory].faqs;

  function selectCategory(i: number) {
    setActiveCategory(i);
    setOpenIndex(0);
  }

  function toggleItem(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="bg-white py-10 sm:py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">

          {/* Left — category list */}
          <nav aria-label="FAQ categories" className="h-fit rounded-xl bg-white p-4 shadow-md dark:bg-gray-900">
            {FAQ_CATEGORIES.map((cat, i) => {
              const isActive = activeCategory === i;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(i)}
                  className={`flex w-full items-center justify-between border-b border-gray-100 px-3 py-4 text-sm font-semibold transition-colors last:border-0 dark:border-gray-800 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                  }`}
                >
                  <span>{cat.label}</span>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 ${
                      isActive ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right — accordion */}
          <div className="rounded-xl bg-[#F0F1FA] p-6 dark:bg-gray-900 lg:p-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {currentFAQs.map((faq, i) => {
                const isOpen = openIndex === i;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <div key={i} className="py-5">
                    <button
                      onClick={() => toggleItem(i)}
                      className="flex w-full items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {num}. Q: {faq.q}
                      </span>
                      <span className="shrink-0 text-gray-500">
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 pl-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
