import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Locations */}
        <div className="space-y-6 col-span-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/cc3f74d6-14bd-4b7c-b3a9-182ebca5553c.jpeg"
              alt="CredoHire Logo"
              className="w-10"
            />
            <h2 className="text-2xl font-bold text-[#7b2ff7]">CredoHire</h2>
          </div>

          <div className="text-sm grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-black mb-1">GURUGRAM</h4>
              <p>
                716, ILD Trade Centre<br />
                Sector 47, Gurugram<br />
                Haryana 122018<br />
                contact@credohire.ai
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">NOIDA</h4>
              <p>
                Workbox Space, ESquare Building,<br />
                Plot C-2, Sector 96,<br />
                Noida, Uttar Pradesh 201301
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-1">UAE</h4>
              <p>
                Total Business Centre<br />
                Khalidiya Towers - Mezzanine Floor<br />
                Al Faskar St - Al Bateen - W10<br />
                Abu Dhabi
              </p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
<div className="w-full flex justify-center">
  <div className="max-w-xs">
    <h3 className="text-xl font-semibold mb-4 text-center">Useful Links</h3>
    <div className="grid grid-cols-2 gap-x-6 text-sm">
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
        <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
        <li><a href="#" className="hover:text-blue-600">Terms of Services</a></li>
        <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
      </ul>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
        <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
        <li><a href="#" className="hover:text-blue-600">Data & Security</a></li>
      </ul>
    </div>
  </div>
</div>


       {/* Social Media and Media Mentions */}
<div className="col-span-2 flex justify-end">
  <div className="space-y-4 text-right">
    <h3 className="text-xl font-semibold">Find us on</h3>

    <div className="flex justify-end space-x-4 items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1aVWk-CKVXfWr_MHFTwBSnZSSZCYsdVBtQ&s" alt="YourStory" className="w-10" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKW3e4HCUMJgZmKvlXV8p8T74fCcxbPePpfw&s" alt="Twitter" className="w-6" />
      <img src="https://cdn.pixabay.com/photo/2018/03/19/02/52/logo-instagram-3238899_1280.png" alt="Instagram" className="w-6" />
      <img src="https://logowik.com/content/uploads/images/linkedin-grey9353.jpg" alt="LinkedIn" className="w-6" />
    </div>

    <div className="flex justify-end space-x-6 pt-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/People_Matters_logo.png" alt="People Matters" className="w-24" />
      <img src="https://thumbs.dreamstime.com/b/web-145095261.jpg" alt="Forbes" className="w-20" />
    </div>
  </div>
</div>

      </div>

      {/* Divider */}
      <div className="mt-12 pt-8 border-t border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-600">
        {/* Registered With */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-3">Registered With</h4>
          <div className="flex gap-6 flex-wrap items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvWw4slP-MlWN3c6VFbjbqwMhJ0Q_aQcFbg&s"
              alt="Microsoft for Startups"
              className="h-20 object-contain"
            />
            <img
              src="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg"
              alt="NVIDIA Inception"
              className="h-20 object-contain"
            />
          </div>
        </div>

        {/* Incubated With */}
        <div>
          <h4 className="font-semibold text-gray-500 mb-3">Incubated With</h4>
          <img
            src="https://www.coe-iot.com/wp-content/uploads/2023/04/logo-1.jpg"
            alt="NASSCOM CoE"
            className="h-20 mt-2 object-contain"
          />
        </div>

        {/* Review Us */}
        <div className="text-center md:text-right">
          <h4 className="font-semibold text-gray-500 mb-3">Review Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            <img src="https://seekvectorlogo.net/wp-content/uploads/2019/07/capterra-inc-vector-logo.png" alt="Capterra" className="h-20" />
            <img src="https://mms.businesswire.com/media/20241211638373/en/2329400/22/G2_Logo_Red_RGB.jpg" alt="G2" className="h-20" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-10 text-sm text-gray-500">
        Copyright © 2025 CredoHire
      </p>
    </footer>
  );
};

export default Footer;
