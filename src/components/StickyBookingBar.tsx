import { useState, useEffect } from "react";

const StickyBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="hidden md:block">
          <p className="text-foreground font-medium">
            Limited Seats <span className="text-primary">Available</span>
          </p>
          <p className="text-sm text-muted-foreground">7-8th March 2026 (Sat-Sun) • Hotel Holiday Inn, Mayur Vihar, New Delhi</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <p className="text-sm text-muted-foreground md:hidden">
            Limited Seats <span className="text-primary">Available</span>
          </p>
          <a 
            href="#tickets"
            className="ml-auto md:ml-0 bg-gradient-gold text-primary-foreground font-bold px-8 py-3 rounded-full shadow-gold-glow hover:scale-105 transition-transform duration-300 animate-pulse-glow"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingBar;
