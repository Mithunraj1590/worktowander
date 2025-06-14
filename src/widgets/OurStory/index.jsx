import Image from 'next/image';
import React from 'react';

const topCircleRadius = 170; // 380px diameter
const innerTopCircleRadius = 160;
const bottomCircleRadius = 230; // 500px diameter
const innerBottomCircleRadius = 220;

const topLeft = { cx: 350, cy: 210, r: topCircleRadius };
const topRight = { cx: 1000, cy: topLeft.cy + topLeft.r * 2.5, r: topCircleRadius };
const gap = 270;
const bottomY = topRight.cy + topRight.r + gap;
const bottomLeft = { cx: 350, cy: bottomY + 50, r: bottomCircleRadius };
const bottomRight = { cx: 960, cy: bottomY, r: bottomCircleRadius };

const circles = [topLeft, topRight, bottomLeft, bottomRight];

const OurStory = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center py-8 bg-[#f5f5f5] pb-[600px]">
      <div className="container">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-primary">Our</span> <span className="text-yellow-400">Story</span>
        </h2>

        {/* SVG Path and Circles */}
        <div className="relative w-full xl:h-[1700px] xxl:h-[1700px] mx-auto mb-8 flex justify-center items-center">
          {/* Centered SVG */}
          <div className='max-w-[850px] absolute xl:top-[90px] 2xl:top-[0] left-[41%] translate-x-[-50%]'>
            <Image src="/images/lines.png" width={978} height={2019} alt="line" />
          </div>
          <svg className="block mx-auto pointer-events-none z-0" width="1400" height="1700" viewBox="0 0 1400 1700" fill="none">
            {/* Top circles (380px diameter) */}
            <g>
              <circle cx={topLeft.cx} cy={topLeft.cy} r={topLeft.r} stroke="#bbb" strokeWidth="2" fill="#fff" />
              <circle cx={topLeft.cx} cy={topLeft.cy} r={innerTopCircleRadius} stroke="#ddd" strokeWidth="1.5" fill="#fff" />
            </g>
            <g>
              <circle cx={topRight.cx} cy={topRight.cy} r={topRight.r} stroke="#bbb" strokeWidth="2" fill="#fff" />
              <circle cx={topRight.cx} cy={topRight.cy} r={innerTopCircleRadius} stroke="#ddd" strokeWidth="1.5" fill="#fff" />
            </g>
            {/* Bottom circles (500px diameter) */}
            <g>
              <circle cx={bottomLeft.cx} cy={bottomLeft.cy} r={bottomLeft.r} stroke="#bbb" strokeWidth="2" fill="#fff" />
              <circle cx={bottomLeft.cx} cy={bottomLeft.cy} r={innerBottomCircleRadius} stroke="#ddd" strokeWidth="1.5" fill="#fff" />
            </g>
            <g>
              <circle cx={bottomRight.cx} cy={bottomRight.cy} r={bottomRight.r} stroke="#bbb" strokeWidth="2" fill="#fff" />
              <circle cx={bottomRight.cx} cy={bottomRight.cy} r={innerBottomCircleRadius} stroke="#ddd" strokeWidth="1.5" fill="#fff" />
            </g>
          </svg>



          {/* Text blocks outside circles */}
          {/* Meet Vajeha */}
          <div className="absolute xl:right-[19%] 2xl:right-[19%] xl:top-[200px] 2xl:top-[140px] xl:w-[500px] 2xl:w-[580px] text-left z-30">
            <div className="font-bold text-[30px] text-black mb-1">Meet Vajeha</div>
            <div className="text-black xl:text-[19px] 2xl:text-[24px] font-medium leading-tight">She works a remote job, traveling between metro cities and working from coworking spaces. She loves the lifestyle, but it can get lonely sometimes—so one day, she invited her friend Athul to one of her workations.</div>
          </div>
          {/* Meet Athul */}
          <div className="absolute left-[16%]" style={{ top: topRight.cy - 90 }}>
            <div className=" xl:w-[500px] 2xl:w-[580px] text-right z-30">
              <div className="font-bold text-[30px] text-black mb-1">Meet Athul</div>
              <div className="text-black xl:text-[19px] 2xl:text-[24px] font-medium leading-tight">He owns a marketing agency and leads a fully remote team. He loves to travel to fuel his creativity. He joined Vajeha on one of her workations and instantly fell in love with the lifestyle.</div>
            </div>
          </div>
          <div className='absolute top-[80%] w-full'>
            {/* The Origin Text Block */}
            <div className="relative w-full max-w-[700px] mx-auto mb-7 z-10 ">
              <div className="text-center px-2 md:px-0">
                <div className="font-bold text-[30px] text-black mb-1">The Origin</div>
                <div className="text-black xl:text-[19px] 2xl:text-[25px] leading-tight">They realized this workation concept is powerful—and that anyone working remotely would love it. It's also the perfect solution for many of the mental health challenges remote workers face. So they launched Work to Wander with a vision to help startup teams and remote workers go on workations.</div>
              </div>
            </div>

            {/* Bottom Illustration */}
            <div className="relative w-full z-10 m-auto h-[686px] bg-gradient-to-br from-yellow-300 to-blue-300 rounded-[340px] overflow-hidden flex items-end justify-center">
              {/* Placeholder illustration */}
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=800&q=80" alt="illustration" className="w-full h-full object-cover object-center opacity-80" />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default OurStory; 