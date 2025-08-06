
import React, { useState } from 'react';

export const FAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Amrutam?",
      answer: "Amrutam is a comprehensive healthcare platform that connects Ayurvedic doctors with patients, providing tools for consultations, practice management, and community engagement."
    },
    {
      question: "How does Amrutam help me grow as a practitioner?",
      answer: "Amrutam provides you with a platform to reach more patients, manage your practice efficiently, and connect with a community of fellow practitioners to share knowledge and grow professionally."
    },
    {
      question: "How do I become a part of Amrutam Doctor?",
      answer: "To join Amrutam, you need to get a referral code, register on our platform, complete KYC verification, and once approved, you can start consulting with patients."
    },
    {
      question: "What is Amrutam Global as a platform?",
      answer: "Amrutam Global is our comprehensive platform that connects Ayurvedic practitioners worldwide, enabling knowledge sharing, patient consultations, and practice management on a global scale."
    },
    {
      question: "What documents do I need to provide?",
      answer: "You'll need to provide your medical degree certificates, professional registration documents, identity proof, and any other relevant certifications for verification."
    },
    {
      question: "Is there a fee to join Amrutam?",
      answer: "No, joining Amrutam is completely free. We believe in supporting Ayurvedic practitioners and making healthcare accessible to everyone."
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleSeeMore = () => {
    // Implement see more functionality
    console.log('See more FAQs');
  };

  return (
    <section className="bg-[rgba(255,247,226,1)] z-0 flex w-full flex-col overflow-hidden items-center px-[205px] py-[33px] max-md:max-w-full max-md:px-5">
      <header className="flex w-[785px] max-w-full flex-col items-stretch text-center">
        <h2 className="text-[rgba(51,100,63,1)] text-[40px] font-bold tracking-[0.4px] max-md:max-w-full">
          Frequently Asked Questions
        </h2>
        <p className="text-[rgba(76,76,76,1)] text-xl font-normal self-center mt-2 max-md:max-w-full">
          Find quick answers to common questions to help you navigate the app and its features easily.
        </p>
      </header>

      <div className="self-stretch w-full text-xl text-[rgba(102,102,102,1)] font-medium tracking-[0.2px] leading-[1.3] mt-12 max-md:max-w-full max-md:mt-10">
        {faqs.map((faq, index) => (
          <div key={index} className="flex w-full flex-col items-stretch mt-[26px] max-md:max-w-full">
            <button
              onClick={() => toggleFAQ(index)}
              className="max-md:max-w-full text-left hover:text-[rgba(58,100,60,1)] transition-colors focus:outline-none focus:text-[rgba(58,100,60,1)]"
              aria-expanded={expandedFAQ === index}
            >
              <div className="flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-2xl ml-4">
                  {expandedFAQ === index ? '−' : '+'}
                </span>
              </div>
            </button>
            {expandedFAQ === index && (
              <div className="mt-4 text-lg text-[rgba(76,76,76,1)] font-normal leading-6 max-md:max-w-full">
                {faq.answer}
              </div>
            )}
            <div className="border shrink-0 h-px mt-[25px] border-[rgba(198,193,185,1)] border-solid max-md:max-w-full" />
          </div>
        ))}
      </div>

      <button
        onClick={handleSeeMore}
        className="bg-[rgba(58,100,60,1)] flex min-h-14 flex-col items-center text-xl text-white font-bold text-center justify-center mt-12 px-9 py-[15px] rounded-xl max-md:mt-10 max-md:px-5 hover:bg-[rgba(58,100,60,0.9)] transition-colors"
      >
        <div>See More</div>
      </button>
    </section>
  );
};

