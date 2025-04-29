import React, { useEffect } from 'react';
const Navbar = () => {
  const handleThemeChange = (theme) => {
    document.documentElement.classList.remove('theme-green', 'theme-pink');
    if (theme === 'green') {
      document.documentElement.classList.add('theme-green');
    } else if (theme === 'pink') {
      document.documentElement.classList.add('theme-pink');
    }
    localStorage.setItem('colorTheme', theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme === 'green') {
      document.documentElement.classList.add('theme-green');
    } else if (savedTheme === 'pink') {
      document.documentElement.classList.add('theme-pink');
    }
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wide">
          BlogVerse
        </div>

        <div className="space-x-6 hidden md:flex">
        <a href="/" className="text-white hover:text-white transition">Home</a>
        <a href="/blog" className="text-white hover:text-white transition">Blog</a>
    <a href="/about" className="text-white hover:text-white transition">About</a>
        <a href="/contact" className="text-white hover:text-white transition">Contact</a>
</div>

        <div className="flex items-center space-x-4">
          <select
            onChange={(e) => handleThemeChange(e.target.value)}
            className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-2 py-1"
          >
            <option value="">Default</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
          </select>
        </div>

        <button className="md:hidden text-text focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
