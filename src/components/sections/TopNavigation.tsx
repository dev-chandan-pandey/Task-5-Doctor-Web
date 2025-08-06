
import React from 'react';

export const TopNavigation: React.FC = () => {
  const handleJoinNow = () => {
    // Scroll to contact section or handle join action
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[rgba(55,54,54,1)] absolute z-10 flex w-full gap-[40px_62px] overflow-hidden flex-wrap h-[67px] px-20 py-2 top-0 max-md:max-w-full max-md:px-5">
      <div className="text-[rgba(217,217,217,1)] text-xl font-medium leading-[1.4] grow shrink basis-auto my-auto">
        Register Yourself As An Amrutam Doctor
      </div>
      <button
        onClick={handleJoinNow}
        className="bg-[rgba(58,100,59,1)] flex flex-col overflow-hidden items-center text-base text-white font-bold justify-center grow shrink-0 basis-0 w-fit px-[70px] py-[15px] rounded-2xl max-md:px-5 hover:bg-[rgba(58,100,59,0.9)] transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/cfcc66f13c0b531100e0b2bbdec895ddb5da0288?placeholderIfAbsent=true"
            alt="Join icon"
            className="aspect-[1.05] object-contain w-[21px] self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">Join Now</span>
        </div>
      </button>
    </nav>
  );
};

