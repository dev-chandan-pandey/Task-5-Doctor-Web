import React, { useState } from 'react';

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="flex flex-col relative min-h-[202px] w-full items-center pt-[21px] pb-[38px] px-20 max-md:max-w-full max-md:px-5">
      <img
        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/38cd3c3d0541819329d25cc2d8acd670353ff3c9?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      <div className="relative flex w-[539px] max-w-full flex-col items-stretch">
        <h1 className="text-[rgba(51,52,72,1)] text-4xl font-semibold text-center self-center">
          FAQ
        </h1>
        <form onSubmit={handleSearch} className="flex gap-5 text-base text-[#2E2F2E] font-normal tracking-[-0.16px] leading-none mt-12 max-md:mt-10">
          <div className="items-stretch border bg-white flex min-w-60 w-[539px] gap-2 overflow-hidden flex-wrap p-3 rounded-xl border-solid border-[#F0F0F0]">
            <img
              src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/6cd28c2b1502407ae35e30cc333115b1dfc4c4bd?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
              alt="Search icon"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for any queries that you have"
              className="grow shrink w-[478px] basis-auto my-auto max-md:max-w-full bg-transparent outline-none"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
