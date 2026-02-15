import { Sparkles, Tag, Brain, Users, ArrowUpRight, Trophy } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Full Day of Transformation",
    description: "A full day filled with fun, inspiration and transformation in Real Estate Training",
    image: "/Why1.JPG",
  },
  {
    icon: Tag,
    title: "Exclusive Deals & Offers",
    description: "Exclusive Access to Special Deals and Offers during Real Estate Gamechanger 2026",
    image: "/Why2.JPG",
  },
  {
    icon: Brain,
    title: "Holistic Personal Growth",
    description: "Immerse in holistic personal growth with Real estate insights from Mr. Acharya Amresh Jha",
    image: "/Why3.JPG",
  },
  {
    icon: Users,
    title: "Network with Leaders",
    description: "Connect and network with thousands of like-minded Real Estate Brokers and Builders",
    image: "/Why4.JPG",
  }
];

const videoTestimonials = ["/1.mp4", "/2.mp4", "/3.mp4", "/4.mp4"];

const WhyAttendSection = () => {
  return (
    /* Changed pb-12 to py-0 to remove top/bottom gaps */
    <section className="py-0 bg-background relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- SECTION 1: VIDEO TESTIMONIALS --- */}
        {/* Removed pt-12 and reduced mb-24 to mb-16 */}
        <div className="pt-0 mb-16">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-gold" />
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Success Chronicles</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Real Impact, <span className="text-gradient-gold">Real Results</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((src, index) => (
              <div 
                key={index} 
                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-border/50 bg-black group shadow-2xl transition-all duration-500 hover:border-gold/50"
              >
                <video 
                  src={src} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  controls
                  preload="metadata"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: REASONS GRID --- */}
        {/* Reduced pt-16 to pt-10 */}
        <div className="border-t border-border/20 pt-10 pb-10">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Why You Shouldn't <span className="text-gradient-gold">Miss Out</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-gold mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the most anticipated real estate event of 2026 and gain the competitive edge you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group relative flex flex-col h-full rounded-3xl overflow-hidden border border-border/50 bg-card/30 card-glass transition-all duration-500 hover:border-gold/50 hover:shadow-gold-glow"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={reason.image} 
                    alt={reason.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-gold shadow-lg flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {reason.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Benefit <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;