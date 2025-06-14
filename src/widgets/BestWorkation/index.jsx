import React from 'react';

const BestWorkation = () => {
  return (
    <section className=" py-8 px-2">
        <div className="container">

      {/* Headline */}
      <div className="max-w-3xl mx-auto text-center mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <span className="text-primary">Struggling with </span>
          <span className="text-secondary">Employee<br className="hidden md:inline" /> Retention and Hiring?</span>
        </h2>
      </div>
      {/* Card */}
      <div className=" rounded-3xl overflow-hidden shadow-xl bg-[#1a2340] relative">
        <div className="relative w-full h-[340px] md:h-[700px]">
          {/* Illustration (placeholder) */}
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=800&q=80"
            alt="Workation Illustration"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.85) blur(0.5px)' }}
          />
          {/* Overlay for darkening */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2340]/80 to-[#1a2340]/60" />

          {/* Card Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-12 py-8">
            <div className="text-white text-2xl md:text-3xl font-light mb-2 flex items-center gap-2">
              Best
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold ml-2">place to</span>
            </div>
            <div className="text-primary font-bold text-5xl md:text-6xl leading-none mb-2">
              Work<br />ation
            </div>
            <button className="mt-4 bg-primary text-secondary font-semibold px-8 py-3 rounded-full text-lg shadow hover:bg-primary/80 transition">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      <div className='pt-4'>
        <p className='text-black text-[32px] font-bold'>"Best Place to Work" is an initiative by Work to Wander designed to help companies strengthen their employer branding,  attract top talent, and boost retention through workplace excellence.</p>
      </div>
       </div>

    </section>
  );
};

export default BestWorkation; 