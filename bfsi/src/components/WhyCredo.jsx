import React from "react";

const features = [
  {
    icon: "⚖️",
    title: "Regulatory-Ready Matching  ",
    description:
      "Our AI understands BFSI-specific regulatory needs and connects you with certified, audit-ready professionals.",
    stat: "100% Compliant Hiring",
  },
  {
    icon: "🤖",
    title: "Skill-Driven Screening with AI",
    description:
      "Intelligent assessments for roles like Risk Analyst, Financial Advisor, and more.",
    stat: "AI-Powered Evaluation",
  },
  {
    icon: "⏱️",
    title: "70% Reduction in Time-to-Hire",
    description:
      "Smart matching and pre-vetted candidates speed up your hiring process.",
    stat: "Faster Candidate Conversion",
  },
  {
    icon: "🚀",
    title: "Future-Ready Workforce",
    description:
      "Focus on hiring for fintech, digital banking, and emerging BFSI roles.",
    stat: "Tech-Forward Talent",
  },
];

const WhyCredoHire = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7b2ff7] text-center mb-12 drop-shadow-[0_1px_8px_rgba(123,47,247,0.5)]">
          Why Leading BFSI Companies Choose CredoHire
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="bfsi/src/assets/AI Interviews Reshaping Recruitment in BFSI.png"
              alt="AI in BFSI Recruitment"
              className="w-full h-auto rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            />
          </div>

          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#f5f2ff] p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="bg-white p-2 rounded-lg shadow-inner">
                    <span className="text-[#7b2ff7] text-2xl">{feature.icon}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <p className="text-[#7b2ff7] text-sm font-medium mt-3 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#7b2ff7] inline-block"></span>
                      {feature.stat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCredoHire;
