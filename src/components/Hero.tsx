"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const liquidPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!container.current || !textRef.current || !liquidPathRef.current) return;

    // Parallax on the hero text
    gsap.to(textRef.current, {
      y: 150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Liquid SVG path morphing upward as user scrolls away from hero
    gsap.fromTo(
      liquidPathRef.current,
      {
        attr: { d: 'M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z' },
      },
      {
        attr: { d: 'M 0 0 Q 50 40 100 0 L 100 100 L 0 100 Z' },
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div
      ref={container}
      className="sticky top-0 z-0 w-full h-[100dvh] bg-vantara-bg items-center justify-center overflow-hidden flex flex-col"
    >
      <video
        src="/Firefly make a modern animated video for portfolio website by the person image 319776 (1).mp4"
        className="absolute inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 z-0 bg-black/40" />
      {/* Hero Text */}
      <div
        ref={textRef}
        className="absolute right-8 md:right-16 lg:right-24 top-[55%] md:top-[60%] -translate-y-1/2 z-10 flex flex-col gap-2 text-white items-end justify-center"
      >
        <h1 className="text-3xl md:text-5xl lg:text-[4rem] tracking-tighter leading-[0.85] text-right font-medium whitespace-nowrap drop-shadow-lg">
          Julio  <br /> Herrera <br /> Velutini
        </h1>
        <div className="mt-0 font-sans text-sm md:text-base font-medium leading-tight drop-shadow-md text-right">
          <p>Venezuelan banker</p>
          
        </div>
      </div>


      {/* Liquid SVG overlay — rises from bottom as user scrolls */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ fill: '#000000ff' }}
        >
          <path
            ref={liquidPathRef}
            d="M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z"
          />
        </svg>
      </div>
    </div>
  );
}
