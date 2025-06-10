import React from "react";

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 bg-gray-50 text-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bzX167zfHSjp8QR6wuCJEKfwP3_4Ar6FAg&s"
        alt="Client Feedback"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7b2ff7] mb-8">
          What Our Clients Say
        </h2>
        <blockquote className="italic text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
          “We reduced our hiring time for credit risk and analytics roles from 30+ days to under a week. 
          <br className="hidden md:block" /> CredoHire delivered quality and speed we hadn’t seen before.”
        </blockquote>
        <p className="text-[#7b2ff7] font-semibold text-lg">— Head of Talent, Leading NBFC</p>
      </div>
    </section>
  );
}
