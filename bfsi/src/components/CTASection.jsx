import React from "react";

export default function CallToAction() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="bg-[#f5f3ff] p-6 rounded-xl shadow-md">
            <p className="text-sm font-semibold text-[#7b2ff7] uppercase mb-2">
              Transforming BFSI Hiring
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Ready to Accelerate Your BFSI Hiring?
            </h2>
            <p className="text-gray-700 text-lg mt-4 leading-relaxed">
              Get AI-powered talent acquisition tailored for compliance, speed,
              and precision. From risk analysts to digital bankers, we match
              your hiring needs with pre-vetted professionals.
            </p>
          </div>

          {/* Mini Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#fdfcff] border border-gray-100 rounded-lg text-center shadow-sm">
              <h4 className="text-sm font-semibold text-[#7b2ff7]">
                AI-screened
              </h4>
              <p className="text-gray-600 text-xs mt-1">
                Verified profiles tailored to your exact needs.
              </p>
            </div>
            <div className="p-4 bg-[#fdfcff] border border-gray-100 rounded-lg text-center shadow-sm">
              <h4 className="text-sm font-semibold text-[#7b2ff7]">
                80% Faster Hiring
              </h4>
              <p className="text-gray-600 text-xs mt-1">
                Smart workflows to reduce cycle time drastically.
              </p>
            </div>
            <div className="p-4 bg-[#fdfcff] border border-gray-100 rounded-lg text-center shadow-sm">
              <h4 className="text-sm font-semibold text-[#7b2ff7]">
                Compliance-Ready
              </h4>
              <p className="text-gray-600 text-xs mt-1">
                Talent pools pre-vetted for industry regulations.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-[#7b2ff7] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-[#6a23dc] transition">
              Request a Demo
            </button>
            <button className="border border-[#7b2ff7] text-[#7b2ff7] px-6 py-3 rounded-full font-medium hover:bg-[#f7f1ff] transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="bfsi/src/assets/278e93e6-cba8-47ce-a4d5-09d049806d08.png"
            alt="AI in BFSI Hiring"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

