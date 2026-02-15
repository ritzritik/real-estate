import { Mic2 } from "lucide-react";

const podcastData = [
  { id: 1, embedId: "5NqcplzU4YE", title: "Podcast 1" },
  { id: 2, embedId: "J9Tyj7rlKBg", title: "Podcast 2" },
  { id: 3, embedId: "Dv7O9d-Eiag", title: "Podcast 3" },
  { id: 4, embedId: "iPBKtqTYz0Q", title: "Podcast 4" },
  { id: 5, embedId: "81o1W-Tavi4", title: "Podcast 5" },
];

const EventTestimonials = () => {
  return (
    /* Changed py-24 to pt-0 and pb-12 to remove the gap */
    <section className="pt-0 pb-12 bg-background relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Reduced mb-16 to mb-10 */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured Conversations With <br className="hidden md:block" />
            <span className="text-gradient-gold"> Acharya Amresh Jha</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-gold mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep conversations on real estate, wealth, mindset & India’s growth with top industry voices
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center">
          {podcastData.map((video) => (
            <div 
              key={video.id} 
              className="group relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-gold-glow hover:-translate-y-2"
            >
              {/* YouTube Embed */}
              <iframe
                className="absolute inset-0 w-full h-full z-0 opacity-90 group-hover:opacity-100 transition-opacity"
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Floating Label */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                 <div className="px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-white/10 flex items-center gap-2">
                    <Mic2 className="w-3 h-3 text-gold" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Featured Podcast</span>
                 </div>
              </div>

              {/* Bottom Progress Shimmer */}
              <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-1000 bg-gradient-gold z-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTestimonials;