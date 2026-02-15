import { Check, Star } from "lucide-react";

const tickets = [
  {
    name: "Silver",
    price: "₹2,500",
    gst: "+ 18% GST",
    link: "https://link.professionalrealestateclub.com/silver-yt",
    color: "from-gray-400 to-gray-500",
    features: [
      "Full Day Access",
      "Event Materials",
      "Lunch & Refreshments",
      "Real Estate Manual"
    ],
    popular: false
  },
  {
    name: "Gold",
    price: "₹15,000",
    gst: "+ 18% GST",
    link: "https://link.professionalrealestateclub.com/gold-yt",
    color: "from-yellow-400 to-amber-500",
    features: [
      "Prec Membership Lifetime",
      "Lunch & Refreshments",      
      "Real Estate Mastery Manual",
      "Gold Seating",
    ],
    popular: true
  },
  {
    name: "VIP",
    price: "₹40,000",
    gst: "+ 18% GST",
    link: "https://link.professionalrealestateclub.com/platinum-yt",
    color: "from-purple-400 to-purple-600",
    features: [
      "Prec Membership Lifetime",
      "Lunch & Refreshments",      
      "Vip Seating",
      "Special Dinner",
      "Photo With Acharya Amresh Jha",
      "Manifestation Book",
      "Wealth Builder WorkBook",
      "Real Estate Mastery Manual",
    ],
    popular: false
  }
];

const TicketsSection = () => {
  return (
    <section id="tickets" className="pt-0 pb-12 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-2">
          Buy Your <span className="text-gradient-gold">Tickets</span> Now!
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Choose the perfect ticket for your real estate transformation journey
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tickets.map((ticket, index) => (
            <div 
              key={index}
              className={`relative card-glass rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                ticket.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {ticket.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-gold text-center py-2">
                  <span className="text-primary-foreground font-semibold text-sm flex items-center justify-center gap-1">
                    <Star className="w-4 h-4" /> Most Popular
                  </span>
                </div>
              )}
              
              <div className={`p-6 ${ticket.popular ? 'pt-12' : ''}`}>
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${ticket.color} text-white mb-4`}>
                  {ticket.name}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-foreground">{ticket.price}</span>
                    <span className="text-muted-foreground text-xs font-semibold">{ticket.gst}</span>
                  </div>
                  <span className="text-muted-foreground text-xs block mt-1">per person</span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {ticket.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={ticket.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    ticket.popular 
                      ? 'bg-gradient-gold text-primary-foreground hover:scale-105 shadow-gold-glow' 
                      : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs md:text-sm mt-8">
          <span className="text-foreground font-medium">Note:</span> For Corporate/bulk bookings, email us at{' '}
          <a href="mailto:admin@theajacademy.in" className="text-primary hover:underline">
            admin@theajacademy.in
          </a>{' '}
          (*Min 25 Tickets)
        </p>
      </div>
    </section>
  );
};

export default TicketsSection;