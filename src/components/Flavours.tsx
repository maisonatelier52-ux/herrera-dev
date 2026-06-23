"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Real image data provided by the user
const FLAVOURS = [
  {
    id: 1,
    title: "Banking Heritage \n Across Generations",
    leftImage: "/card-1.png",
    description: "Julio Herrera Velutini comes from a historic banking family whose financial legacy spans multiple generations. Growing up surrounded by banking traditions, he developed a deep understanding of finance, leadership, and long-term economic stewardship."
  },
  {
    id: 2,
    title: "Vision Beyond \n Traditional Banking",
    leftImage: "/card-2.png",
    description: "By combining established banking principles with modern financial strategies, Julio Herrera Velutini has helped bridge the gap between traditional institutions and the evolving demands of global markets. His approach emphasizes innovation, stability, and sustainable growth."
  },
  {
    id: 3,
    title: "Building Global \n Financial Networks",
    leftImage: "/card-3.png",
    description: "Throughout his career, he has expanded financial operations across Latin America, Europe, and other international markets. His work focuses on connecting businesses, investors, and institutions through trusted financial solutions."
  },
  {
    id: 4,
    title: "Championing Economic \n Growth Regionally",
    leftImage: "/card-4.png",
    description: "Julio Herrera Velutini has consistently supported entrepreneurship and private-sector development. His banking initiatives have aimed to create opportunities for businesses while encouraging economic progress and financial inclusion."
  },
  {
    id: 5,
    title: "Innovation Driving \n Financial Excellence",
    leftImage: "/card-5.png",
    description: "Recognizing the changing landscape of finance, he has advocated for technology-driven banking solutions, digital transformation, and forward-thinking financial services designed to meet modern client needs."
  },
  {
    id: 6,
    title: "Leadership Through \n Strategic Vision",
    leftImage: "/card-6.png",
    description: "Known for his measured and long-term approach, Julio Herrera Velutini has built a reputation for leadership that balances tradition with innovation. His vision focuses on creating resilient institutions capable of adapting to future challenges."
  }
];

const INTERVAL = 3000; // ms per slide
const TOTAL_DURATION = INTERVAL * FLAVOURS.length; // full loop = 18s

// Circular SVG timer ring — fills over the entire cycle of all flavours
function TimerRing({ totalDuration }: { totalDuration: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setProgress(0);
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min(elapsed / totalDuration, 1);
      setProgress(pct);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // restart after full loop
        startRef.current = null;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [totalDuration]);

  const dashoffset = circumference * (1 - progress);

  return (
    <svg
      width="132"
      height="132"
      viewBox="0 0 72 72"
      className="rotate-[-90deg]"
    >
      {/* Track */}
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke="rgba(180, 173, 167, 0.42)"
        strokeWidth="2"
      />
      {/* Progress arc */}
      <circle
        cx="36"
        cy="36"
        r={radius}
        fill="none"
        stroke="rgba(207, 203, 199, 0.85)"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        strokeLinecap="round"
        style={{ transition: 'none' }}
      />
    </svg>
  );
}


export default function Flavours() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle every INTERVAL ms
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % FLAVOURS.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="features" className="relative w-full h-screen bg-[#FAF8F1] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        
        {/* --- LEFT SIDE: Large Background Images --- */}
        <div className="relative w-full h-full overflow-hidden">
          {FLAVOURS.map((flavour, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`left-${flavour.id}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* Fallback colored background in case image is missing */}
                <div className="absolute inset-0 bg-vantara-accent/10" />
                <img
                  src={flavour.leftImage}
                  alt={flavour.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            );
          })}

          {/* Circular Timer Ring — centered on left image, fills over all 6 slides */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              <TimerRing totalDuration={TOTAL_DURATION} />
              {/* Vantara logo icon inside ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="opacity-80">
                  <text
                    x="54%"
                    y="58%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="rgba(249, 246, 243, 0.85)"
                    fontSize="52"
                    fontFamily="'Brush Script MT', cursive"
                    fontStyle="bold"
                  >
                  J
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Cup & Text Animation --- */}
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-vantara-bg px-8">
          
          {FLAVOURS.map((flavour, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`right-${flavour.id}`}
                className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-1000 ease-in-out pointer-events-none ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* TEXT: Comes from the top */}
                <h3 
                  className={`text-8xl md:text-7xl font-medium text-vantara-text tracking-tighter text-center uppercase mb-8  transition-transform duration-1000 ease-in-out whitespace-pre-line leading-[0.85] ${
                    isActive ? 'translate-y-0' : '-translate-y-20'
                  }`}
                  style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
                >
                  {flavour.title}
                </h3>

                {/* DESCRIPTION PARAGRAPH: Comes from the bottom */}
                <div 
                  className={`relative w-64 h-auto md:w-120 transition-transform duration-1000 ease-in-out flex items-center justify-center ${
                    isActive ? 'translate-y-0' : 'translate-y-20'
                  }`}
                >
                  <p className="text-sm md:text-sm font-light text-black text-center leading-relaxed  drop-shadow-md">
                    {flavour.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
