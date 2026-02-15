const learnings = [
  { emoji: "💡", title: "Sales Mastery", description: "Effortlessly guide, connect, and close deals with powerful communication and emotional intelligence." },
  { emoji: "🔄", title: "Client Retention & Relationship", description: "Turn clients into lifelong advocates by focusing on emotions, not just transactions." },
  { emoji: "🚀", title: "Time Management & Goal Mastery", description: "Dominate your schedule and set transformative targets for peak productivity." },
  { emoji: "🌟", title: "Mindset in Real Estate", description: "Rewire your beliefs and tap into the power of your subconscious to excel in any market." },
  { emoji: "🤖", title: "Leverage AI & Technology", description: "Stay ahead by using cutting-edge Artificial Intelligence to outpace competitors." },
  { emoji: "🏆", title: "Team Building & Leadership Skills", description: "Foster collaboration and create a high-performing culture with actionable strategies." },
  { emoji: "💬", title: "Master Communication", description: "Strengthen connections and negotiations to effortlessly seal success." },
  { emoji: "🦋", title: "Embrace Change & Personal Growth", description: "Upgrade yourself continuously and adapt to evolving challenges." },
  { emoji: "⚡", title: "Ownership & Emotional Resilience", description: "Take full responsibility for your journey and manage emotions in professional decisions." },
  { emoji: "🌍", title: "Networking & Manifestation", description: "Build impactful connections and turn your vision into a thriving reality." }
];

const LearningsSection = () => {
  return (
    <section className="pt-0 pb-12 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        {/* Changed items-center to items-start to push text to the top */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left side - Profile Image Area */}
          <div className="relative order-2 lg:order-1 lg:mt-12">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-muted to-background border border-border overflow-hidden relative group">
              <img 
                src="/pf.png" 
                alt="Mr. Acharya Amresh Jha" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="font-serif text-3xl font-bold text-white mb-1">
                  Mr. Acharya Amresh Jha
                </h3>
                <p className="text-gold font-medium tracking-widest uppercase text-sm">Real Estate Mentor</p>
              </div>
              <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-glow animate-float z-10">
              <span className="text-3xl">🎯</span>
            </div>
          </div>

          {/* Right side - Learnings list */}
          <div className="order-1 lg:order-2">
            {/* Reduced mb-4 to mb-2 to move text up */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2">
              What You Will <span className="text-gradient-gold">Learn?</span>
            </h2>
            {/* Reduced mb-10 to mb-6 to pull list up */}
            <p className="text-muted-foreground mb-6">
              Master the essential skills and strategies to dominate the real estate market
            </p>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-4 scrollbar-hide">
              {learnings.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-background transition-all duration-300 group"
                >
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{item.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;