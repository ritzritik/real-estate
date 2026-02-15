import { Users, TrendingUp, Brain, Smartphone, Lightbulb, Crown } from "lucide-react";

const benefits = [
  { 
    icon: Users, 
    title: "High-Level Networking", 
    description: "Forge strategic alliances with India’s top real estate developers, investors, and industry icons." 
  },
  { 
    icon: TrendingUp, 
    title: "Institutional Growth", 
    description: "Master advanced frameworks used by top 1% investors to scale portfolios and maximize ROI in 2026." 
  },
  { 
    icon: Brain, 
    title: "Psychology of Success", 
    description: "Rewire your mindset with elite performance coaching. Learn to turn discipline into destiny and hard work into a high-yielding legacy." 
  },
  { 
    icon: Smartphone, 
    title: "Dominating Modern Channels", 
    description: "Future-proof your business with AI-driven social media marketing and cutting-edge PropTech strategies." 
  },
  { 
    icon: Lightbulb, 
    title: "Proprietary Market Insights", 
    description: "Gain access to exclusive 'inner-circle' property management tactics and profitability secrets." 
  },
  { 
    icon: Crown, 
    title: "Front-Row Executive Access", 
    description: "Command the room with priority VIP seating, ensuring the best vantage point for learning and engagement." 
  }
];

const BenefitsSection = () => {
  return (
    /* Changed pb-24 to pb-4 to remove the bottom gap */
    <section className="pt-0 pb-4 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What You Will <span className="text-gradient-gold">Get</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg">
            Experience a transformative day filled with actionable insights and exclusive benefits 
            designed to scale your real estate career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-glass p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-8 shadow-gold-glow group-hover:rotate-6 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-gold transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              <div className="mt-6 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold/50 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;