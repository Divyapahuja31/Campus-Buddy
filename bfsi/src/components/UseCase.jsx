import React from "react";
import { FaUniversity, FaCreditCard, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const BFSIUseCases = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      {/* Use Case Section */}
      <div className="bg-gradient-to-br from-[#ebf8ff] to-[#c3dafe] p-10 rounded-3xl space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Real-World Use Cases for BFSI Hiring</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Whether you're a digital bank scaling fast or a compliance-focused NBFC, CredoHire is built to match your hiring pace and precision.
          </p>
        </div>

        {/* Use Case Cards */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(123,47,247,0.25)] flex items-start space-x-4">
            <FaUniversity className="text-purple-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">🏦 NBFCs & Traditional Banks</h3>
              <p className="text-gray-600">Reduce time-to-hire for high-compliance roles like Credit Analysts, Risk Officers, and Audit Managers.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(123,47,247,0.25)] flex items-start space-x-4">
            <FaCreditCard className="text-purple-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">💳 Fintech Startups</h3>
              <p className="text-gray-600">Source developers, fraud analysts, and digital product leads with domain-relevant AI screening.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(123,47,247,0.25)] flex items-start space-x-4">
            <FaMobileAlt className="text-purple-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">📲 Digital Banking Platforms</h3>
              <p className="text-gray-600">Hire for niche roles like cybersecurity experts and blockchain consultants with compliance-ready profiles.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(123,47,247,0.25)] flex items-start space-x-4">
            <FaShieldAlt className="text-purple-500 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold">🛡️ Insurance & Actuarial</h3>
              <p className="text-gray-600">Match actuarial scientists, claims managers, and insurance underwriters with speed and precision.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#e0f2fe] to-[#dbeafe] p-10 rounded-3xl">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
    How <span className="text-purple-600">CredoHire</span> Works
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
    <div className="flex flex-col items-center">
      <div className="bg-purple-100 p-5 rounded-full mb-4 shadow-lg">
        <span className="text-3xl text-purple-600">📄</span>
      </div>
      <h3 className="font-semibold text-lg text-gray-800">Upload Role or JD</h3>
      <p className="text-gray-600 mt-2 text-sm">Provide the job description or role details to kickstart the talent match process.</p>
    </div>

    <div className="flex flex-col items-center">
      <div className="bg-purple-100 p-5 rounded-full mb-4 shadow-lg">
        <span className="text-3xl text-purple-600">⚙️</span>
      </div>
      <h3 className="font-semibold text-lg text-gray-800">AI Screening</h3>
      <p className="text-gray-600 mt-2 text-sm">Advanced algorithms filter the best candidates tailored to your specific needs.</p>
    </div>

    <div className="flex flex-col items-center">
      <div className="bg-purple-100 p-5 rounded-full mb-4 shadow-lg">
        <span className="text-3xl text-purple-600">🤖</span>
      </div>
      <h3 className="font-semibold text-lg text-gray-800">AI interviews</h3>
      <p className="text-gray-600 mt-2 text-sm">Automated interviews assess technical and soft skills, saving hours of manual work.</p>
    </div>

    <div className="flex flex-col items-center">
      <div className="bg-purple-100 p-5 rounded-full mb-4 shadow-lg">
        <span className="text-3xl text-purple-600">🎯</span>
      </div>
      <h3 className="font-semibold text-lg text-gray-800">Hire</h3>
      <p className="text-gray-600 mt-2 text-sm">Easily review results, coordinate final rounds, and onboard top talent effortlessly.</p>
    </div>
  </div>
</div>
     </div>
  );
};

export default BFSIUseCases;