import React from "react";
import { CheckCircle2, Building2, TrendingUp, Users } from "lucide-react";

const expertise = [
  { 
    icon: Users, 
    text: "Has helped 10,000+ individuals start & scale profitable property portfolios." 
  },
  { 
    icon: Building2, 
    text: "15+ years of real estate experience across commercial & residential sectors." 
  },
  { 
    icon: TrendingUp, 
    text: "Featured in major real estate conferences & media outlets." 
  },
  { 
    icon: CheckCircle2, 
    text: "Trusted mentor for professionals, entrepreneurs, and wealth builders across India." 
  },
];

const MentorSection = () => {
  return (
    /* Changed py-20 to pt-0 and pb-8 to eliminate the gap */
    <section className="pt-0 pb-8 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Reduced mb-4 to mb-2 */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-2">
          Know Your <span className="text-gradient-gold">Mentor</span>
        </h2>
        {/* Reduced mb-12 to mb-8 */}
        <h3 className="text-2xl md:text-3xl font-display text-center text-foreground mb-8">
          Mr. Acharya Amresh Jha
        </h3>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left - Bio */}
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Mr. Acharya Amresh Jha is a renowned real estate educator, business consultant, 
                and highly successful entrepreneur. He is recognized as one of the most 
                respected and ethical voices in the Indian property market today.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Known for his deep analytical approach, he has transformed the financial 
                trajectories of thousands of investors by helping them navigate complex 
                real estate landscapes with clarity and confidence.
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="text-lg font-serif text-foreground italic">
                  "Empowering the common man with the tools of the wealthy through strategic real estate mastery."
                </p>
              </div>
            </div>

            {/* Right - Achievement List */}
            <div className="space-y-3">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 card-glass rounded-xl border-l-4 border-l-gold shadow-sm">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;