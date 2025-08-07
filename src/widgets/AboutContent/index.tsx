"use client"
import Image from 'next/image';

const AboutContent = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
                  {/* Decorative Element */}
          <div className=" mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
              <h2 className="h2 font-bold text-gray-900 leading-tight">
                About{' '}
                <span className="text-primary">TravelAgency</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                We're passionate about creating unforgettable travel experiences that bring teams together 
                and transform the way companies think about employee engagement and retention.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Since our founding, we've helped hundreds of companies build stronger teams through 
                carefully curated travel experiences that boost morale, foster collaboration, and create 
                lasting memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-[50px] pt-4">
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">Happy Teams</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm sm:text-base text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm sm:text-base text-gray-600">Destinations</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Team travel experience"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent; 