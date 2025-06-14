import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-white pt-10 pb-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Logo and Brand */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-secondary text-2xl">W</div>
            <span className="text-2xl font-bold text-primary">Workation</span>
          </div>
          <p className="text-gray-400 max-w-xs text-sm mb-4">Empowering remote work, travel, and productivity for modern teams and individuals.</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-primary" aria-label="Twitter"><svg width="24" height="24" fill="currentColor" className=""><path d="M19.633 7.997c.013.176.013.353.013.53 0 5.39-4.104 11.61-11.61 11.61-2.307 0-4.454-.676-6.263-1.84.32.038.637.05.97.05 1.92 0 3.687-.652 5.096-1.747-1.793-.037-3.308-1.217-3.833-2.846.25.037.5.062.764.062.367 0 .735-.05 1.078-.144-1.877-.377-3.29-2.034-3.29-4.025v-.05c.553.307 1.19.49 1.867.514a4.07 4.07 0 0 1-1.81-3.39c0-.75.202-1.45.553-2.055a11.63 11.63 0 0 0 8.437 4.28c-.062-.3-.1-.613-.1-.927 0-2.26 1.833-4.093 4.093-4.093 1.178 0 2.243.5 2.99 1.304a8.09 8.09 0 0 0 2.593-.99 4.07 4.07 0 0 1-1.797 2.25 8.19 8.19 0 0 0 2.347-.64 8.73 8.73 0 0 1-2.047 2.12z"/></svg></a>
            <a href="#" className="hover:text-primary" aria-label="LinkedIn"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="#" className="hover:text-primary" aria-label="Instagram"><svg width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.974.974 1.252 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.974.974-2.242 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.974-.974-1.252-2.242-1.314-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.974-.974 2.242-1.252 3.608-1.314 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.637.336-3.608 1.308-.971.971-1.25 2.332-1.308 3.608-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.337 2.637 1.308 3.608.971.971 2.332 1.25 3.608 1.308 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.637-.337 3.608-1.308.971-.971 1.25-2.332 1.308-3.608.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.337-2.637-1.308-3.608-.971-.971-2.332-1.25-3.608-1.308-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-1 max-w-md">
          <h4 className="text-lg font-semibold mb-2 text-primary">Subscribe to our Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-full bg-[#232b3e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary flex-1"
              required
            />
            <button
              type="submit"
              className="bg-primary text-secondary font-semibold px-6 py-2 rounded-full hover:bg-primary/80 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Inline Menu at Bottom */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-base md:text-lg border-t border-gray-700 pt-4">
        <a href="#" className="hover:text-primary transition">Home</a>
        <a href="#" className="hover:text-primary transition">Why Workation</a>
        <a href="#" className="hover:text-primary transition">Destinations</a>
        <a href="#" className="hover:text-primary transition">Pricing</a>
        <a href="#" className="hover:text-primary transition">Contact</a>
      </div>
      <div className="text-center text-gray-400 text-sm mt-4">
        &copy; {new Date().getFullYear()} Workation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 