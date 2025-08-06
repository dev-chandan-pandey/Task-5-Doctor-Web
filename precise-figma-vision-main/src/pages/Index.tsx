import React from 'react';
import { TopNavigation } from '@/components/sections/TopNavigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { OnboardingSection } from '@/components/sections/OnboardingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <main className="bg-white relative overflow-hidden pt-[66px] min-h-screen">
      <TopNavigation />
      
      <HeroSection />
      
      <WhyChooseUsSection />
      
      <OnboardingSection />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <ContactSection />
      
      <FooterSection />
    </main>
  );
};

export default Index;
