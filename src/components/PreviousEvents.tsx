import React from "react";

const highlightImages = [
  { image: "/celeb1.jpeg" },
  { image: "/celeb2.jpeg" },
  { image: "/celeb3.jpeg" },
  { image: "/celeb4.jpeg" },
  { image: "/celeb5.jpeg" },
  { image: "/celeb6.jpeg" },
  { image: "/celeb7.jpeg" },
  { image: "/celeb8.jpeg" },
  { image: "/celeb9.jpeg" },
  { image: "/celeb10.jpeg" },
  { image: "/celeb11.jpeg" },
  { image: "/celeb12.jpeg" },
];

const PreviousEvents = () => {
  return (
    /* Changed pt-0 pb-4 to py-0 to remove all vertical gaps */
    <section className="py-0 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1280px]">
        
        {/* Simplified Header - Reduced mb-6 to mb-2 */}
        <div className="text-center mb-2">
          <h2 className="text-[#C07F3D] font-bold text-2xl md:text-3xl uppercase tracking-widest">
            Achievements
          </h2>
          <div className="w-12 h-1 bg-[#C07F3D] mx-auto mt-1" />
        </div>

        <div className="relative group">
          {/* Scroll Area - Removed pb-2 */}
          <div className="flex overflow-x-auto gap-3 scrollbar-hide snap-x snap-mandatory">
            {highlightImages.map((event, index) => (
              <div 
                key={index} 
                className="flex-none w-[300px] md:w-[380px] aspect-[4/3] snap-center relative rounded-lg overflow-hidden border border-[#C07F3D]/20 transition-all duration-500 hover:border-[#C07F3D]/60"
              >
                <img 
                  src={event.image} 
                  alt={`Highlight ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="text-white/30 text-xs font-mono tracking-tighter">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Edge Fade */}
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;