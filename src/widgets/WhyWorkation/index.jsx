import React from 'react'

const pills = [
  // Pills with text
  {
    text: 'Stay Productive',
    color: 'bg-primary text-secondary',
    style: 'left-[90px] top-[280px] px-6 py-2',
  },
  {
    text: 'Tick off your bucket list',
    color: 'bg-secondary text-white',
    style: 'left-[-40px] top-[340px] px-6 py-2',
  },
  {
    text: 'Escape from isolation',
    color: 'bg-primary text-secondary',
    style: 'left-[120px] bottom-[120px] px-6 py-2',
  },
  {
    text: 'Explore New Cultures',
    color: 'bg-secondary text-white',
    style: 'right-[60px] top-[180px] px-6 py-2',
  },
  {
    text: 'Grow Your Network',
    color: 'bg-primary text-secondary',
    style: 'right-[-30px] top-[340px] px-6 py-2',
  },
  // Pills without text (decorative)
  {
    text: '',
    color: 'bg-primary',
    style: 'left-[180px] top-[80px] w-16 h-4',
  },
  {
    text: '',
    color: 'bg-secondary',
    style: 'left-[30px] top-[260px] w-10 h-4',
  },
  {
    text: '',
    color: 'bg-primary',
    style: 'right-[120px] top-[80px] w-20 h-4',
  },
]

const WhyWorkation = () => {
  // Circle sizes and opacities (innermost 480px, then 100px, 200px, 100px, 100px gaps)
  const circles = [
    { size: 'w-[980px] h-[980px]', opacity: 'border-opacity-10' }, // outermost (100px gap)
    { size: 'w-[880px] h-[880px]', opacity: 'border-opacity-20' }, // 100px gap
    { size: 'w-[780px] h-[780px]', opacity: 'border-opacity-30' }, // 100px gap
    { size: 'w-[580px] h-[580px]', opacity: 'border-opacity-50' }, // 200px gap
    { size: 'w-[480px] h-[480px]', opacity: 'border-opacity-90' }, // innermost
  ]

  return (
    <section className="py-[100px]">
      <div className="container flex items-center justify-center min-h-[600px] lg:min-h-screen py-8">
        {/* Concentric Circles - perfectly center aligned */}
        <div className="relative flex items-center justify-center w-[980px] h-[980px]">
          {circles.map((circle, i) => (
            <div
              key={i}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-400 ${circle.opacity} rounded-full ${circle.size}`}
              style={{ zIndex: 1 + i }}
            />
          ))}

          {/* Pills */}
          {pills.map((pill, i) => (
            <div
              key={i}
              className={`absolute rounded-full font-semibold shadow-md flex items-center justify-center ${pill.color} ${pill.style}`}
              style={{ zIndex: 20 }}
            >
              {pill.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkation
