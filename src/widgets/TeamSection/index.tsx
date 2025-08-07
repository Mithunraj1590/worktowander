"use client"
import TeamMemberCard from '@/components/TeamMemberCard';

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
    bio: "Passionate about creating meaningful travel experiences that bring teams together and foster lasting connections.",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    twitter: "https://twitter.com/sarahjohnson"
  },
  {
    name: "Michael Chen",
    position: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Expert in logistics and team coordination, ensuring every trip runs smoothly from start to finish.",
    linkedin: "https://linkedin.com/in/michael-chen"
  },
  {
    name: "Emily Rodriguez",
    position: "Travel Experience Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    bio: "Creates unique itineraries that balance adventure, relaxation, and team-building activities.",
    linkedin: "https://linkedin.com/in/emily-rodriguez",
    twitter: "https://twitter.com/emilyrodriguez"
  },
  {
    name: "David Kim",
    position: "Customer Success Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Dedicated to ensuring every client has an exceptional experience and their teams return stronger than ever.",
    linkedin: "https://linkedin.com/in/david-kim"
  },
  {
    name: "Lisa Thompson",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Spreads the word about how travel can transform workplace culture and employee satisfaction.",
    linkedin: "https://linkedin.com/in/lisa-thompson",
    twitter: "https://twitter.com/lisathompson"
  },
  {
    name: "James Wilson",
    position: "Technology Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Builds the digital tools that make planning and managing team trips seamless and efficient.",
    linkedin: "https://linkedin.com/in/james-wilson"
  }
];

const TeamSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
                {/* Decorative Element */}
          <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>
            <h2 className="h2 font-bold text-gray-900 mb-4">
              Meet Our{' '}
              <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our passionate team of travel experts, operations specialists, and customer success 
              professionals work together to create unforgettable team experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                twitter={member.twitter}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Ready to work with our team?
            </p>
            <a
              href="/contact"
              className="btn btn-primary"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 