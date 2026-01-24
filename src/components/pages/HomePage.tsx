"use client";

import { ContactForm } from "../ContactForm";

const HomePage = () => {
  return (
    <div>
      <div className="relative h-[calc(100vh-100px)] block">
        <img
          src="/assets/hero_xl.jpg"
          className="w-full h-full object-cover object-left"
          alt="hero imagen de la cabaña"
          loading="eager"
        />

        {/* Desktop Contact Form */}
        <div className="hidden md:block fixed top-[120px] right-0 w-full max-w-sm">
          <ContactForm sticky />
        </div>
      </div>

      {/* Mobile Contact Form */}
      <div className="md:hidden">
        <ContactForm sticky />
      </div>
    </div>
  );
};

export default HomePage;
