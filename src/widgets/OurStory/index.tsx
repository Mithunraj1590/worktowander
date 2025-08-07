"use client"
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-indigo-100 rounded-full opacity-60 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-pink-100 rounded-full opacity-60 animate-pulse animation-delay-3000"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-10 w-8 h-8 bg-blue-200 rotate-45 opacity-40"></div>
        <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-indigo-200 rotate-45 opacity-40"></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-10 bg-purple-200 rounded-full opacity-40"></div>
      </div>

      <div className="container relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
               {/* Decorative Element */}
          <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
            <h2 className="h2 font-bold text-gray-900 mb-6">
              The Story Behind{' '}
              <span className="text-primary">
                TravelAgency
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a simple idea to transforming how companies think about team building and employee retention
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200"></div>

            {/* Timeline items */}
            <div className="space-y-12 sm:space-y-16">
              {/* 2018 - Founded */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:order-1">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold text-primary">2018</span>
                      <span className="text-sm sm:text-base font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Founded</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">The Beginning</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sarah Johnson founded TravelAgency with a vision to transform how companies approach team building. 
                      What started as a small startup has grown into a trusted partner for hundreds of organizations.
                    </p>
                  </div>
                </div>
                <div className="flex-1 md:order-2">
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                      alt="Team founding"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2020 - Growth */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:order-2">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold text-primary">2020</span>
                      <span className="text-sm sm:text-base font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Growth</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Rapid Expansion</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Despite global challenges, we expanded to serve 100+ companies and launched our signature 
                      "Workation" program that combines work and travel seamlessly.
                    </p>
                  </div>
                </div>
                <div className="flex-1 md:order-1">
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                      alt="Team growth"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2023 - Innovation */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:order-1">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold text-primary">2023</span>
                      <span className="text-sm sm:text-base font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Innovation</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Launched our digital platform and AI-powered trip planning tools, making it easier than ever 
                      for companies to create customized team experiences.
                    </p>
                  </div>
                </div>
                <div className="flex-1 md:order-2">
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
                      alt="Digital innovation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2024 - Today */}
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 md:order-2">
                  <div className="bg-primary rounded-2xl p-6 sm:p-8 shadow-lg relative">
                    <div className="absolute -top-3 left-6 w-6 h-6 bg-white rounded-full border-4 border-primary shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl sm:text-3xl font-bold text-white">2024</span>
                      <span className="text-sm sm:text-base font-semibold text-blue-100 bg-white/20 px-3 py-1 rounded-full">Today</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Leading the Industry</h3>
                    <p className="text-blue-100 leading-relaxed">
                      Serving 500+ companies across 50+ destinations with 95% satisfaction rate. 
                      We continue to innovate and redefine what team travel means in the modern workplace.
                    </p>
                  </div>
                </div>
                <div className="flex-1 md:order-1">
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                      alt="Team success"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm sm:text-base text-gray-600">Happy Teams</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600">Destinations</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm sm:text-base text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">6</div>
                <div className="text-sm sm:text-base text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory; 