import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is CredoHire different from traditional hiring platforms?",
    answer:
      "CredoHire uses Gen-AI to deeply understand BFSI roles and regulations. It auto-matches JDs with certified, audit-ready professionals—saving time and ensuring compliance.",
  },
  {
    question: "Is the platform secure and compliant with BFSI regulations?",
    answer:
      "Yes, CredoHire is GDPR and RBI-ready. We use encrypted infrastructure and follow secure data practices to protect candidate and company information.",
  },
  {
    question: "How quickly can we start hiring?",
    answer:
      "Once you upload your JD, our platform can begin delivering pre-vetted candidates within 24 to 48 hours—often faster.",
  },
  {
    question: "What BFSI roles can I hire for?",
    answer:
      "Everything from Credit Analysts and AML Officers to Fintech Developers and Cybersecurity Experts. Our system is built for BFSI talent sourcing.",
  },
];

export default function BFSIFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-gradient-to-br from-[#ebf8ff] to-[#e0e7ff] py-20 px-6 md:px-16"
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked{" "}
          <span className="text-purple-600">Questions</span>
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-medium text-lg text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
