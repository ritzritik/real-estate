import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import LearningsSection from "@/components/LearningsSection";
import MentorSection from "@/components/MentorSection";
import TheSonuSharmaShow from "@/components/TheSonuSharmaShow";
import PreviousEvents from "@/components/PreviousEvents";
import EventTestimonials from "@/components/EventTestimonials";
import TicketsSection from "@/components/TicketsSection";
import WhyAttendSection from "@/components/WhyAttendSection";
import FAQSection from "@/components/FAQSection";
import StickyBookingBar from "@/components/StickyBookingBar";


const Index = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-gold selection:text-black">
      <HeroSection />
      <BenefitsSection />
      <LearningsSection />
      <MentorSection />
      <TheSonuSharmaShow />
      <PreviousEvents/>
      <EventTestimonials/>
      <WhyAttendSection />
      <TicketsSection />
      <FAQSection />
      
      <StickyBookingBar />
    </main>
  );
};

export default Index;