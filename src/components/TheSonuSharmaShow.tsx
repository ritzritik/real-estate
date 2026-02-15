import { Globe2, Map, ShieldCheck, Trophy, Mic2, Star } from "lucide-react";

const TheSonuSharmaShow = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Cinematic Visual */}
          <div className="w-full lg:w-1/2 relative group">
            
            {/* Floating Corporate Milestone Badge */}
            <div className="absolute -top-10 -left-10 hidden md:flex flex-col items-center justify-center w-44 h-44 rounded-full bg-gradient-gold p-1 shadow-gold-glow animate-float z-20">
              <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center text-center p-4">
                <Trophy className="w-8 h-8 text-gold mb-1" />
                <span className="text-[10px] font-bold tracking-tighter uppercase text-muted-foreground">Trusted by</span>
                <span className="text-2xl font-bold text-white">100,000+</span>
                <span className="text-[10px] font-bold tracking-tighter uppercase text-muted-foreground">individuals</span>
              </div>
            </div>

            {/* Decorative Offset Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
              <img 
              src="/standing.jpg" 
              alt="Real Estate Mastery with Acharya Amresh Jha" 
              className="w-full h-auto object-cover -scale-x-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Right Side: Narrative Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              <Mic2 className="w-4 h-4" />
              The Acharya Amresh Jha
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              A Legacy of <span className="text-gradient-gold">Global Excellence</span>
            </h2>

            {/* Benefits List Section */}
            <div className="space-y-4 mb-10">
              {[
                "Build a profitable property portfolio — starting with your first deal.",
                "Generate monthly passive income that beats your salary.",
                "Master negotiation, funding, and tax-saving strategies.",
                "Retire early with assets that grow even while you sleep."
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 group/item">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                    <span className="text-gold text-[10px]">✅</span>
                  </div>
                  <p className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
              <p className="pt-4 text-primary font-semibold border-t border-border/50">
                This event will show you exactly how top professionals do it — step by step.
              </p>
            </div>

            {/* Impact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card-glass border border-border flex items-center justify-center">
                  <Map className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Pan-India Presence</h4>
                  <p className="text-sm text-muted-foreground">Uniting thousands of builders and brokers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-card-glass border border-border flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">12+ Years Authority</h4>
                  <p className="text-sm text-muted-foreground">Proven track record in high-stakes environments.</p>
                </div>
              </div>
            </div>

            {/* UPDATED: Total Viewership Stat Card */}
            <div className="mt-12 p-6 rounded-2xl bg-card-glass border border-border/50 relative overflow-hidden group hover:border-gold/40 transition-all duration-300">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                    <span className="text-white font-bold ml-2">4.9 Ratings</span>
                  </div>
                  <p className="text-gold font-bold text-2xl md:text-3xl mb-1"> Acharya Amresh Jha</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-bold">The #1 Real Estate Coach In India</p>
                </div>
                <div className="bg-gradient-gold p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheSonuSharmaShow;