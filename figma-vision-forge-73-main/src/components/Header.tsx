import React from 'react';

export const Header = () => {
  return (
    <header className="bg-[rgba(255,247,226,1)] z-10 flex w-full flex-col pl-5 pr-[73px] py-5 max-md:max-w-full max-md:pr-5">
      <div className="flex w-[805px] max-w-full gap-5 text-xl text-[rgba(58,100,60,1)] font-normal leading-[1.4] flex-wrap justify-between">
        <div className="flex gap-1 mt-2.5">
          <img
            src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/a1679881899920bbbc9966b6a14b25cc593d151e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 shrink-0"
            alt="Phone icon"
          />
          <div>+91 9826352321</div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/00b0ecb9fc7fe9cc6f04634a0b298d307700794b?placeholderIfAbsent=true"
          className="aspect-[5.21] object-contain w-52 shrink-0 max-w-full"
          alt="Amrutam logo"
        />
      </div>
      <div className="flex w-full max-w-[991px] flex-col items-stretch mt-[15px] max-md:max-w-full">

        <div className="flex w-full items-center justify-between gap-4 flex-nowrap max-md:flex-wrap max-md:justify-center">
          <nav className="flex items-center gap-10 text-xl text-[rgba(58,100,59,1)] font-semibold leading-[1.4] pl-60">
            <a href="#" className="self-stretch whitespace-nowrap my-auto hover:text-[rgba(58,100,59,0.8)] transition-colors">Home</a>
            <a href="#" className="self-stretch w-[127px] my-auto hover:text-[rgba(58,100,59,0.8)] transition-colors">find doctors</a>
            <a href="#" className="self-stretch w-[94px] my-auto hover:text-[rgba(58,100,59,0.8)] transition-colors">Lab Tests</a>
            <a href="#" className="self-stretch whitespace-nowrap w-[52px] my-auto hover:text-[rgba(58,100,59,0.8)] transition-colors">Shop</a>
            <a href="#" className="self-stretch whitespace-nowrap w-[66px] my-auto hover:text-[rgba(58,100,59,0.8)] transition-colors">Forum</a>
            <a href="#" className="self-stretch w-[92px] my-auto hover:text-[rgba(58,100,59,0.8)] transition-colors">About Us</a>
          </nav>
          <div className="relative flex min-h-9 items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-6 relative">
              <button className="relative bg-[rgba(210,217,210,1)] flex min-h-9 items-center justify-center w-9 h-9 rounded-[18px] hover:bg-[rgba(200,207,200,1)] transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/a494d314497272a8aee54c79e2db2234d9f0b9a2?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6"
                  alt="Search"
                />
                {/* Badge */}
                <span className="absolute -top-1 -right-1 bg-[rgba(58,100,60,1)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">₹2</span>
              </button>
              <button className="relative bg-[rgba(210,217,210,1)] flex min-h-9 items-center justify-center w-9 h-9 rounded-[18px] hover:bg-[rgba(200,207,200,1)] transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/0ec4c9566d405074d4e3bd43f925363f137c762e?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-6"
                  alt="Cart"
                />
                {/* Badge */}
                <span className="absolute -top-1 -right-1 bg-[rgba(58,100,60,1)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">1</span>
              </button>
              <button className="bg-[rgba(210,217,210,1)] flex min-h-9 items-center justify-center w-9 h-9 px-1.5 rounded-[18px] hover:bg-[rgba(200,207,200,1)] transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/86720600e9bd666fa3bd594941f70a3db5901835?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5"
                  alt="Notifications"
                />
              </button>
              <button className="bg-[rgba(210,217,210,1)] flex min-h-9 items-center justify-center w-9 h-9 rounded-[18px] hover:bg-[rgba(200,207,200,1)] transition-colors">
                <div className="flex min-h-6 w-6" />
              </button>
            </div>
            <button className="hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/a14e39d5d472325ce5aedb06f5f39a8bb08d6f74?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-6"
                alt="Profile"
              />
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};