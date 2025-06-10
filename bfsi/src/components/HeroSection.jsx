import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#ebf8ff] to-[#c3dafe] text-white py-20 px-6 text-center rounded-b-[3rem] shadow-inner">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#7b2ff7] max-w-3xl mx-auto drop-shadow-md">
        Transforming BFSI Recruitment <br />
        <span className="text-blue-900 drop-shadow-lg">with Gen-AI</span>
      </h1>

      <p className="text-lg mt-6 max-w-3xl mx-auto text-black/80 drop-shadow-sm">
      Accelerate your recruitment in Banking, Finance, Insurance, and Fintech. Our AI-powered platform connects you with pre-vetted, compliant, future-ready professionals—faster than ever.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="bg-white text-[#7b2ff7] px-6 py-3 rounded-lg font-semibold hover:bg-[#f1f5f9] transition duration-300 shadow-md hover:shadow-lg">
          🚀 Request a Free Demo  
        </button>
      </div>
    </section>
  );
}
