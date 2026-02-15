import { MapPin, Calendar, Clock, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col bg-background">
      
      {/* Top Full Image Section */}
      <div className="relative w-full z-0">
        <img 
          src="/REM-Delhi.jpeg" 
          alt="Real Estate Mastery Delhi" 
          className="w-full h-auto block shadow-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[8rem] md:text-[18rem] lg:text-[25rem] font-serif font-bold text-gradient-gold opacity-10">
            2026
          </span>
        </div>
      </div>

      {/* Content Section - Changed pt-12 md:pt-24 to pt-0 to remove top gap */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-0 pb-0">
        <div className="max-w-5xl mx-auto">
          {/* Added a small mt-8 to prevent the text from touching the image shadow directly */}
          <div className="mt-8">
            <h2 className="text-primary text-lg md:text-xl font-semibold tracking-widest uppercase mb-4">
              Join The Revolution
            </h2>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Learn How To Build Massive Wealth Through Real Estate <br />
              <span className="text-gradient-gold">
                EVEN IF YOU’RE STARTING SMALL!
              </span>
              <br /> in 2026
            </h1>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Achieve Real Estate Mastery From India’s Trusted Real Estate Coach
            <span className="text-primary font-semibold block mt-2 text-2xl">
              Mr. Acharya Amresh Jha
            </span>
          </p>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16 group">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-gold-glow bg-card transition-transform duration-500 hover:scale-[1.01]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/QjzUd0_KGAU"
                title="Real Estate Gamechanger"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2 italic">
              <Play className="w-4 h-4 text-primary" />
              Watch the vision for 2026 with Acharya Amresh Jha
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-primary" />
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Location</div>
              <span className="text-base font-medium text-center">Hotel Holiday Inn, Mayur Vihar, New Delhi</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-primary" />
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Date</div>
              <span className="text-base font-medium">7–8th March 2026</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 border border-border backdrop-blur-sm">
              <Clock className="w-8 h-8 text-primary" />
              <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Timing</div>
              <span className="text-base font-medium">9:00 AM – 6:00 PM</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pb-8">
            <a
              href="#tickets"
              className="inline-block bg-gradient-gold text-primary-foreground font-bold text-xl px-16 py-6 rounded-full shadow-gold-glow hover:scale-110 hover:brightness-110 transition-all duration-300 active:scale-95"
            >
              Book Your Seat Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;