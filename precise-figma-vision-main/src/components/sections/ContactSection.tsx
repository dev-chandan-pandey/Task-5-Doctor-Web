import React from 'react';
import { ContactForm } from '../ui/ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="bg-[rgba(255,247,226,1)] z-0 flex w-full flex-col overflow-hidden items-stretch px-[100px] py-20 max-md:max-w-full max-md:px-5">
      <header className="self-center w-[785px] max-w-full text-center">
        <h2 className="text-[rgba(51,100,63,1)] text-[40px] font-bold max-md:max-w-full">
          Let's Connect
        </h2>
        <p className="text-[rgba(76,76,76,1)] text-xl font-normal leading-[30px] mt-2 max-md:max-w-full">
          We're here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.
        </p>
      </header>

      <div className="w-full mt-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[41%] max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/ca4622f740e885e32d7c53e2a05e2d49bd3b3d22?placeholderIfAbsent=true"
              alt="Contact illustration"
              className="aspect-[1.06] object-contain w-full grow rounded-lg max-md:max-w-full max-md:mt-6"
            />
          </div>
          <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
