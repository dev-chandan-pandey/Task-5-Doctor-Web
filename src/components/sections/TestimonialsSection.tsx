
import React from 'react';
import { TestimonialCard } from '../ui/TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Dr. Pooja Deshmukh",
      credentials: "BAMS",
      avatarSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/bbf8b1dfbdadf581cb4ed3c411daa4639ac92791?placeholderIfAbsent=true",
      testimonial: "\"Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.\"",
      rating: 4,
      size: 'small' as const
    },
    {
      name: "Dr. Rajesh Iyer",
      credentials: "Ayurvedic Practitioner",
      avatarSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/1993835207f184d31b9460b55b279dbce5b4d980?placeholderIfAbsent=true",
      testimonial: "\"Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.\"",
      rating: 5,
      size: 'large' as const
    },
    {
      name: "Dr. Ananya Sharma",
      credentials: "BAMS",
      avatarSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/0a7eb8aeaff8cea6fb5d5059931ebac70df3b0e9?placeholderIfAbsent=true",
      testimonial: "\"As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products.\"",
      rating: 4,
      size: 'small' as const
    }
  ];

  return (
    <section className="bg-[rgba(255,247,226,1)] z-0 flex w-full flex-col overflow-hidden items-stretch justify-center px-[100px] py-8 max-md:max-w-full max-md:px-5">
      <header className="self-center flex w-[808px] max-w-full flex-col items-stretch text-center">
        <h2 className="text-[rgba(51,100,63,1)] text-[40px] font-bold self-center max-md:max-w-full">
          What other Ayurvedic Doctors are Saying
        </h2>
        <p className="text-[rgba(76,76,76,1)] text-xl font-normal mt-2 max-md:max-w-full">
          Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
        </p>
      </header>

      <div className="flex w-full items-center gap-5 flex-wrap mt-12 max-md:max-w-full max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            credentials={testimonial.credentials}
            avatarSrc={testimonial.avatarSrc}
            testimonial={testimonial.testimonial}
            rating={testimonial.rating}
            size={testimonial.size}
          />
        ))}
      </div>
    </section>
  );
};

