import React, { useState } from 'react';

export const LoadMoreButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Loading more FAQ items...');
    }, 1000);
  };

  return (
    <div className="self-center flex items-center gap-[37px] text-2xl text-[rgba(58,100,59,1)] font-normal tracking-[-0.24px] leading-[58px] mt-[50px] max-md:mt-10">
      <button
        onClick={handleLoadMore}
        disabled={isLoading}
        className="bg-[rgba(255,247,226,1)] shadow-[0px_2px_6px_rgba(0,0,0,0.25)] self-stretch flex items-center gap-0.5 overflow-hidden my-auto px-[25px] rounded-[7px] max-md:px-5 hover:shadow-[0px_4px_8px_rgba(0,0,0,0.3)] transition-shadow disabled:opacity-50"
      >
        <div className="self-stretch w-[123px] my-auto">
          {isLoading ? 'Loading...' : 'Load More'}
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/6541d90890f8587d8ae9483d4796102e8400388d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Arrow icon"
        />
      </button>
    </div>
  );
};
