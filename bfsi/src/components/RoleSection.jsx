import React from "react";

const roleBannerUrl =
    "bfsi/src/assets/chatgpt-bfsi-image.png"; 
  const roles = {
    "⚖️ Risk & Compliance": {
      icon: "https://img.freepik.com/premium-vector/compliance-risk-vector-icon-can-be-used-risk-management-iconset_717774-60942.jpg",
      roles: ["Risk Analyst", "AML Officer", "Compliance Manager"],
    },
    "📊 Finance & Accounting": {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtllwlOwbbqN27HYX5MaSvcAEeQGCZszVbA&s",
      roles: ["Credit Analyst", "Treasury Specialist", "Financial Advisor"],
    },
    "💻 Fintech & Digital": {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaoSSlT2tKG12oiYDNvUqDow3wnlaHcAiDw&s",
      roles: ["Fintech Developer", "Fraud Analyst", "Cybersecurity Expert"],
    },
    "🛡️ Insurance": {
      icon: "https://cdn-icons-png.flaticon.com/512/9539/9539743.png",
      roles: ["Actuary", "Claims Manager", "Underwriting Specialist"],
    },
  };
  
  export default function RoleSection() {
    return (
      <section className="bg-[#edf3ff] py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-40">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e1e2f] mb-6">
            Your End-to-End Hiring Partner in 
            <span className="text-[#7b2ff7]"> BFSI</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
            Explore domain-specific hiring expertise tailored for modern BFSI workforce needs.

            </p>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(roles).map(([title, data]) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-[#ede9fe] p-3 rounded-lg mr-3">
                      <img src={data.icon} alt={title} className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e1e2f]">{title}</h3>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 pl-2">
                    {data.roles.map((role) => (
                      <li key={role} className="before:content-['▹'] before:text-[#7b2ff7] before:mr-2">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Image */}
          <div className="flex-1 w-full">
            <img
              src={roleBannerUrl}
              alt="BFSI Illustration"
              className="w-full max-w-xl mx-auto lg:mx-0 rounded-[2rem] shadow-md"
            />
          </div>
        </div>
      </section>
    );
  }