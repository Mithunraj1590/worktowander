import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Mock blog data - in real app, this would come from CMS or API
const blogPosts = {
  '10-essential-tips-team-retreats': {
    title: '10 Essential Tips for Planning Successful Team Retreats',
    excerpt: 'Discover the key strategies that make team retreats truly effective for building stronger relationships and boosting productivity.',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Team retreats have become an essential part of modern workplace culture, offering opportunities for team building, 
        strategic planning, and relationship building outside the office environment. However, planning a successful team 
        retreat requires careful consideration of various factors.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Define Clear Objectives</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Before planning any retreat, clearly define what you want to achieve. Are you focusing on team building, 
        strategic planning, skill development, or a combination of these? Having clear objectives will guide all 
        your planning decisions.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Choose the Right Location</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        The location can make or break your retreat. Consider factors like accessibility, accommodation quality, 
        meeting facilities, and activities available. The destination should align with your budget and objectives.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Plan Engaging Activities</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Mix structured activities with free time. Include team-building exercises, workshops, and recreational 
        activities that align with your objectives. Remember that the best team building often happens during 
        informal interactions.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Consider Timing and Duration</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Choose timing that works for most team members and consider the optimal duration. While longer retreats 
        allow for deeper connections, shorter ones can be more cost-effective and easier to schedule.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Budget Wisely</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Create a detailed budget that includes travel, accommodation, meals, activities, and any additional 
        costs. Look for package deals and early booking discounts to maximize value.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Communicate Effectively</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Provide clear information about the retreat schedule, what to bring, dress code, and any special 
        requirements. Good communication builds excitement and ensures everyone is prepared.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Include Team Building Activities</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Plan activities that encourage collaboration, communication, and trust-building. These can range from 
        outdoor adventures to creative workshops, depending on your team's interests and comfort levels.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Balance Work and Play</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        While retreats should be productive, they should also be enjoyable. Include downtime for relaxation 
        and socializing, as these moments often lead to the most meaningful connections.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Follow Up After the Retreat</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        The work doesn't end when the retreat ends. Follow up with action items, feedback collection, and 
        plans to maintain the momentum and relationships built during the retreat.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Measure Success</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Define how you'll measure the success of your retreat. This could include team satisfaction surveys, 
        improved collaboration metrics, or achievement of specific objectives.
      </p>

      <div class="bg-blue-50 rounded-2xl p-6 mt-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>Clear objectives guide all planning decisions</li>
          <li>Location and timing significantly impact success</li>
          <li>Balance structured activities with free time</li>
          <li>Effective communication is crucial</li>
          <li>Follow-up ensures lasting impact</li>
        </ul>
      </div>
    `,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    category: 'Team Building',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80',
      bio: 'CEO & Founder of TravelAgency, passionate about creating meaningful team experiences.'
    },
    publishedAt: 'March 15, 2024',
    readTime: '5 min read',
    tags: ['Team Building', 'Leadership', 'Corporate Travel']
  }
};

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | TravelAgency Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
          <Link 
            href="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute left-0 bottom-[50px] w-full">
          <div className="container">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl">
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  {post.category}
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mb-0">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
                  <p className="text-gray-600">{post.author.bio}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm text-gray-500">{post.publishedAt}</p>
                  <p className="text-sm text-gray-500">{post.readTime}</p>
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
} 