export default function Process() {
  return (
    <section id="process" className="relative w-full bg-black">
      
      {/* SLIDE 1: First Postcard */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden flex items-center justify-center">
        {/* Desktop Postcard */}
        <img 
          src="/postcard-one.png" 
          alt="Our Process" 
          className="hidden md:block absolute w-full max-w-4xl h-auto object-contain drop-shadow-2xl rotate-[8deg] translate-x-[7%]"
        />
        {/* Mobile Postcard */}
        <img 
          src="/postcard-one-mob.png" 
          alt="Our Process" 
          className="block md:hidden absolute w-full max-w-[90%] h-auto object-contain drop-shadow-2xl rotate-[10deg] translate-x-[2%]"
        />
      </div>

      {/* SLIDE 2: Second Postcard */}
      <div className="sticky top-0 w-full h-[100vh] pointer-events-none z-20 flex items-center justify-center">
        {/* Desktop Postcard */}
        <img 
          src="/postcard-two.png" 
          alt="Our Process - Part 2" 
          className="hidden md:block absolute w-full max-w-4xl h-auto object-contain drop-shadow-2xl rotate-[-15deg] -translate-x-[9%]"
        />
        {/* Mobile Postcard */}
        <img 
          src="/postcard-two-mob.png" 
          alt="Our Process - Part 2" 
          className="block md:hidden absolute w-full max-w-[90%] h-auto object-contain drop-shadow-2xl rotate-[-6deg] -translate-x-[2%]"
        />
      </div>

      {/* SLIDE 3: Third Postcard */}
      <div className="sticky top-0 w-full h-[100vh] pointer-events-none z-30 flex items-center justify-center">
        {/* Desktop Postcard */}
        <img 
          src="/postcard-three.png" 
          alt="Our Process - Part 3" 
          className="hidden md:block absolute w-full max-w-4xl h-auto object-contain drop-shadow-2xl rotate-[-3deg] translate-x-[8%] translate-y-[8%]"
        />
        {/* Mobile Postcard */}
        <img 
          src="/postcard-three-mob.png" 
          alt="Our Process - Part 3" 
          className="block md:hidden absolute w-full max-w-[90%] h-auto object-contain drop-shadow-2xl rotate-[2deg] translate-x-[2%]"
        />
      </div>

    </section>
  );
}
