"use client"
import React, { useState } from 'react';

const steps = [
  // Step 1: Team size
  {
    type: 'teamsize',
    content: (
      <div className="flex flex-col md:flex-row bg-black rounded-[40px] overflow-hidden shadow-lg w-full   min-h-[500px]">
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
        
          <div className="text-2xl md:text-4xl font-bold text-secondary mb-6">Choose Your Team Size</div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="bg-gray-200 text-secondary text-2xl font-bold rounded-xl py-6">A team of 5-10</button>
            <button className="bg-gray-200 text-secondary text-2xl font-bold rounded-xl py-6">A team of 10-30</button>
            <button className="bg-gray-200 text-secondary text-2xl font-bold rounded-xl py-6">A team of 30-60</button>
            <button className="bg-secondary text-primary text-2xl font-bold rounded-xl py-6">A team of 30-60</button>
          </div>
          <button className="w-40 h-16 bg-secondary text-white text-xl font-semibold rounded-full" type="button">
            Next
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80" alt="Woman with suitcase" className="object-cover w-full h-full rounded-r-[40px]" />
        </div>
      </div>
    )
  },
  // Step 2: Team activity
  {
    type: 'activity',
    content: (
      <div className="flex flex-col md:flex-row bg-white rounded-[40px] overflow-hidden shadow-lg w-full min-h-[500px]">
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-primary">What would you<br className="md:hidden" /> like to do with</span><br />
            <span className="text-secondary">your team?</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="bg-gray-200 text-secondary text-lg font-bold rounded-xl py-4">SUNNY ESCAPE</button>
            <button className="bg-gray-200 text-secondary text-lg font-bold rounded-xl py-4">CITY BREAK</button>
            <button className="bg-gray-200 text-secondary text-lg font-bold rounded-xl py-4">EXOTIC GETAWAY</button>
            <button className="bg-gray-200 text-secondary text-lg font-bold rounded-xl py-4">EXPERIENCE-ORIENTED</button>
            <button className="bg-gray-200 text-secondary text-lg font-bold rounded-xl py-4">EVENTS-ORIENTED</button>
            <button className="bg-secondary text-primary text-lg font-bold rounded-xl py-4">SPORTS-ORIENTED</button>
          </div>
          <button className="w-40 h-16 bg-secondary text-white text-xl font-semibold rounded-full" type="button">
            Next
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80" alt="Team activity" className="object-cover w-full h-full rounded-r-[40px]" />
        </div>
      </div>
    )
  },
  // Step 3: Email/Phone
  {
    type: 'form',
    content: (
      <div className="flex flex-col md:flex-row bg-white rounded-[40px] overflow-hidden shadow-lg w-full  min-h-[500px]">
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-primary">Where should<br className="md:hidden" /> we send your</span><br />
            <span className="text-secondary">Workation plan?</span>
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-700">EMAIL ADDRESS</label>
              <input type="email" className="w-full rounded-xl bg-gray-200 px-6 py-4 text-lg placeholder-gray-500" placeholder="Enter your email adress" required />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1 text-gray-700">PHONE NUMBER</label>
              <input type="tel" className="w-full rounded-xl bg-gray-200 px-6 py-4 text-lg placeholder-gray-500" placeholder="Enter your phone number" required />
            </div>
          </form>
          <button className="mt-8 w-40 h-16 bg-secondary text-white text-xl font-semibold rounded-full" type="button">
            Next
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80" alt="Woman with suitcase" className="object-cover w-full h-full rounded-r-[40px]" />
        </div>
      </div>
    )
  },
  // Step 4: Thank you
  {
    type: 'thankyou',
    content: (
      <div className="flex flex-col items-center justify-center bg-[#fafafa] rounded-[40px] shadow-lg w-full  min-h-[400px] py-16">
        <div className="flex flex-row items-center gap-8 mb-8">
          <div className="bg-secondary rounded-full p-8 flex items-center justify-center">
            <svg width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#1558A4"/><path d="M44 26L29 41l-9-9" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="text-primary">Thank you for</span> <span className="text-secondary">your inquiry!</span></h2>
            <p className="text-lg text-gray-700">We will get back to you soon with a travel plan.</p>
          </div>
        </div>
      </div>
    )
  },
];

const CustomiseWorkation = () => {
  const [step, setStep] = useState(0);

  // Handler for next step
  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#fafafa] p-4">
      <div className="container">
      <h2 className="text-h2 text-center md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-400">For </span><span className="text-primary">Costumised</span> <span className="text-secondary">Workation</span>
          </h2>
        {React.cloneElement(steps[step].content, {
          // Pass next handler to buttons if needed
          onClick: handleNext,
        })}
      </div>
    </div>
  );
};

export default CustomiseWorkation; 