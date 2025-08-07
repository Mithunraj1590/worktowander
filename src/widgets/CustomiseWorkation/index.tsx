"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface WorkationData {
  teamSize: string;
  activity: string;
  email: string;
  phone: string;
}

const CustomiseWorkation = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<WorkationData>({
    teamSize: '',
    activity: '',
    email: '',
    phone: ''
  });

  // Handler for next step
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Handler for previous step
  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  // Update form data
  const updateFormData = (field: keyof WorkationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Check if current step is valid
  const isStepValid = () => {
    switch (step) {
      case 0:
        return formData.teamSize !== '';
      case 1:
        return formData.activity !== '';
      case 2:
        return formData.email !== '' && formData.phone !== '';
      default:
        return true;
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Workation Data:', formData);
    setStep(3);
  };

  // Step 1: Team size
  const renderTeamSizeStep = () => (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" 
              style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-600)' }}></span>
              Step 1 of 3
            </div>
            <h3 className="h3 font-bold mb-8 leading-tight text-black">
              Choose Your{' '}
              <span className="" >
                Team Size
              </span>
            </h3>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Select the size of your team to help us create the perfect workation experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'A team of 5-10',
                'A team of 10-30', 
                'A team of 30-60',
                'A team of 60+'
              ].map((size, index) => (
                <button
                  key={size}
                  onClick={() => updateFormData('teamSize', size)}
                  className="p-6 rounded-2xl border-2 transition-all duration-300 text-left"
                  style={{
                    borderColor: formData.teamSize === size ? 'var(--primary-600)' : 'var(--border-primary)',
                    backgroundColor: formData.teamSize === size ? 'var(--primary-50)' : 'var(--bg-primary)',
                    color: formData.teamSize === size ? 'var(--primary-700)' : 'var(--text-secondary)',
                    boxShadow: formData.teamSize === size ? 'var(--shadow-md)' : 'none'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (formData.teamSize !== size) {
                      e.currentTarget.style.borderColor = 'var(--primary-400)';
                      e.currentTarget.style.backgroundColor = 'var(--primary-50)';
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (formData.teamSize !== size) {
                      e.currentTarget.style.borderColor = 'var(--border-primary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    }
                  }}
                >
                  <div className="font-semibold text-lg">{size}</div>
                </button>
              ))}
            </div>
            <button 
              onClick={handleNext}
              disabled={!isStepValid()}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/hero-img.png"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  // Step 2: Activities
  const renderActivityStep = () => (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" 
              style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-600)' }}></span>
              Step 2 of 3
            </div>
            <h3 className="h3 font-bold mb-8 leading-tight text-black">
              Select Your{' '}
              <span className="" >
                Activities
              </span>
            </h3>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Choose the activities that interest your team for a memorable workation experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Adventure & Outdoor',
                'Cultural & Historical', 
                'Relaxation & Wellness',
                'Team Building'
              ].map((activity, index) => (
                <button
                  key={activity}
                  onClick={() => updateFormData('activity', activity)}
                  className="p-6 rounded-2xl border-2 transition-all duration-300 text-left"
                  style={{
                    borderColor: formData.activity === activity ? 'var(--primary-600)' : 'var(--border-primary)',
                    backgroundColor: formData.activity === activity ? 'var(--primary-50)' : 'var(--bg-primary)',
                    color: formData.activity === activity ? 'var(--primary-700)' : 'var(--text-secondary)',
                    boxShadow: formData.activity === activity ? 'var(--shadow-md)' : 'none'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (formData.activity !== activity) {
                      e.currentTarget.style.borderColor = 'var(--primary-400)';
                      e.currentTarget.style.backgroundColor = 'var(--primary-50)';
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (formData.activity !== activity) {
                      e.currentTarget.style.borderColor = 'var(--border-primary)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    }
                  }}
                >
                  <div className="font-semibold text-lg">{activity}</div>
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handlePrevious}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-50"
              >
                Back
              </button>
              <button 
                onClick={handleNext}
                disabled={!isStepValid()}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/hero-img.png"
            alt="Adventure activities"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  // Step 3: Contact information
  const renderContactStep = () => (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" 
              style={{ backgroundColor: 'var(--primary-50)', color: 'var(--primary-600)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--primary-600)' }}></span>
              Step 3 of 3
            </div>
            <h3 className="h3 font-bold mb-8 leading-tight text-black">
              Contact{' '}
              <span className="" >
                Information
              </span>
            </h3>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Provide your contact details so we can reach out with personalized workation proposals.
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl text-lg transition-all duration-300 focus:border-primary focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl text-lg transition-all duration-300 focus:border-primary focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handlePrevious}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-50"
              >
                Back
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/hero-img.png"
            alt="Contact information"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  // Step 4: Thank you
  const renderThankYouStep = () => (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
          <div className="max-w-2xl text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="h3 font-bold mb-6 leading-tight text-black">
              Thank You!
            </h3>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              We've received your workation request. Our team will review your preferences and get back to you within 24 hours with personalized proposals.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-lg mb-4 text-gray-800">Your Preferences:</h4>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Team Size:</span>
                  <span className="font-semibold">{formData.teamSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Activities:</span>
                  <span className="font-semibold">{formData.activity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold">{formData.phone}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setStep(0)}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary-dark"
            >
              Start Over
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/hero-img.png"
            alt="Success"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(to bottom right, var(--bg-secondary), var(--primary-50))' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="h2 font-bold mb-6 leading-tight" 
            style={{ color: 'var(--text-primary)' }}
          >
            For{' '}
            Customised {' '}
            <span className='text-primary'>
              Workation
            </span>
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto" 
            style={{ color: 'var(--text-secondary)' }}
          >
            Create the perfect workation experience for your team with our personalized planning process.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            {['Team Size', 'Activities', 'Contact', 'Complete'].map((stepName, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: index <= step ? 'var(--primary)' : 'var(--neutral-200)',
                    color: index <= step ? 'white' : 'var(--text-secondary)'
                  }}
                >
                  {index + 1}
                </div>
                {index < 3 && (
                  <div 
                    className="w-16 h-1 mx-2"
                    style={{
                      backgroundColor: index < step ? 'var(--primary)' : 'var(--neutral-200)'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className=" mx-auto">
          {step === 0 && renderTeamSizeStep()}
          {step === 1 && renderActivityStep()}
          {step === 2 && renderContactStep()}
          {step === 3 && renderThankYouStep()}
        </div>
      </div>
    </section>
  );
};

export default CustomiseWorkation; 