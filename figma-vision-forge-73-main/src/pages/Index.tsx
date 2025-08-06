import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TabNavigation } from '@/components/TabNavigation';
import { FAQSection } from '@/components/FAQSection';
import { LoadMoreButton } from '@/components/LoadMoreButton';
import { AppDownloadSection } from '@/components/AppDownloadSection';

const Index = () => {
  return (
    <div className="bg-[rgba(255,247,226,1)] flex flex-col overflow-hidden items-stretch">
      <Header />
      <HeroSection />
      <TabNavigation />
      <img
        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/f26628342eceb9750bbae4aa870ca23a3152d8bd?placeholderIfAbsent=true"
        className="aspect-[142.86] object-contain w-[150px] self-center max-w-full mt-[7px]"
        alt="Decorative line"
      />
      <FAQSection />
      <LoadMoreButton />
      <AppDownloadSection />
    </div>
  );
};

export default Index;
