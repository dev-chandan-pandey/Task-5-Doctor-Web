import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What types of consultations are available?",
    answer: "We provide three types of consultations - video, instant call and chat consultation."
  },
  {
    id: 2,
    question: "Can I get refund for the wallet money?"
  },
  {
    id: 3,
    question: "What is the Amrutam Forum?"
  },
  {
    id: 4,
    question: "Can I pause the audio consultation?"
  },
  {
    id: 5,
    question: "Is there a minimum duration for an audio consultation?"
  },
  {
    id: 6,
    question: "Can I get refund for the wallet money?"
  },
  {
    id: 7,
    question: "What is the Amrutam Forum?"
  },
  {
    id: 8,
    question: "Can I pause the audio consultation?"
  },
  {
    id: 9,
    question: "Is there a minimum duration for an audio consultation?"
  }
];

export const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([1]));

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="bg-[rgba(255,247,226,1)] self-center flex w-full max-w-[1216px] flex-col overflow-hidden text-xl text-[rgba(65,65,65,1)] font-medium mt-[50px] pt-10 pb-[76px] px-[33px] rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
      {faqData.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={() => toggleExpanded(item.id)}
            className="w-full text-left hover:text-[rgba(58,100,59,1)] transition-colors"
            aria-expanded={expandedItems.has(item.id)}
          >
            {item.question}
          </button>
          {expandedItems.has(item.id) && item.answer && (
            <div className="text-[rgba(77,77,77,1)] text-lg font-normal mt-[13px] max-md:max-w-full">
              {item.answer}
            </div>
          )}
          {index < faqData.length - 1 && (
            <div className="border self-stretch shrink-0 h-px mt-[31px] border-[rgba(205,205,205,1)] border-solid max-md:max-w-full" />
          )}
          {index < faqData.length - 1 && (
            <div className="mt-[27px]" />
          )}
        </div>
      ))}
    </section>
  );
};
