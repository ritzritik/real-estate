import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "When and where is the event happening?",
    answer: "The event is scheduled for 7-8th March 2026 (Sat-Sun) at Hotel Holiday Inn, Mayur Vihar, New Delhi."
  },
  {
    question: "Can I access a recorded version of the event?",
    answer: "Unfortunately, there won't be any recorded version of the event. However, you can follow our social media channels for event-related content and exclusive snippets."
  },
  {
    question: "Will there be any networking opportunities at the event?",
    answer: "Yes! The event is designed to help you connect and network with top real estate leaders from across India."
  },
  {
    question: "What language will the event be conducted in?",
    answer: "The event will be conducted in simple, easy-to-understand Hinglish."
  },
  {
    question: "Will I be provided with refreshments and lunch?",
    answer: "Yes, Tea and Lunch are included in all ticket plans."
  },
  {
    question: "Is there a refund policy?",
    answer: "Tickets are non-refundable, but they can be transferred to another participant."
  },
  {
    question: "Can I upgrade my ticket later?",
    answer: "Yes, subject to availability. Upgrades are encouraged for added bonuses."
  }
];

const FAQSection = () => {
  return (
    /* Changed pb-12 to pb-32 to add a significant bottom gap */
    <section className="pt-0 pb-32 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-2">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          Everything you need to know about the event
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-glass rounded-xl px-6 border-none"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;