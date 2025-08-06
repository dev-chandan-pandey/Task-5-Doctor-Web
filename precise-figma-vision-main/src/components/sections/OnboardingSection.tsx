import React, { useState } from 'react';
import { OnboardingStep } from '../ui/OnboardingStep';

export const OnboardingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('consultations');

  const steps = [
    {
      title: "Get your referral code",
      description: "Contact us to receive your unique referral code."
    },
    {
      title: "Register on Amrutam",
      description: "Sign up on the Amrutam Doctors app or website to join our specialist network."
    },
    {
      title: "Complete KYC",
      description: "Fill in your details and upload the required documents for verification."
    },
    {
      title: "Start consulting",
      description: "Once verified, begin offering consultations and helping patients."
    }
  ];

  const handleJoinNow = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[rgba(255,247,226,1)] z-0 flex w-full flex-col overflow-hidden items-stretch py-[39px] max-md:max-w-full">
      <div className="flex w-full max-w-[1315px] flex-col items-stretch mr-[25px] max-md:max-w-full max-md:mr-2.5">
        <header className="self-center flex w-[449px] max-w-full flex-col items-center leading-none">
          <div className="w-full rounded-[0px_0px_0px_0px]">
            <h2 className="text-[rgba(51,100,63,1)] text-[40px] font-bold tracking-[0.4px] max-md:max-w-full text-center">
              Join Our Circle of Care
            </h2>
            <p className="text-[rgba(76,76,76,1)] text-xl font-medium tracking-[1.4px] ml-5 mr-[19px] max-md:mx-2.5 text-center">
              Becoming a part of Amrutam is simple
            </p>
          </div>
        </header>

        <div className="mt-[65px] max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-[rgba(58,100,60,1)] justify-center max-md:max-w-full max-md:mt-10">
                <div className="bg-[rgba(255,247,226,1)] border w-full px-8 py-7 rounded-lg border-[rgba(51,100,63,0.5)] border-solid max-md:max-w-full max-md:px-5">
                  <h3 className="text-xl font-bold max-md:max-w-full">
                    Step 1: Get your referral code
                  </h3>
                  <p className="text-sm font-normal mt-2.5 max-md:max-w-full">
                    Contact us to receive your unique referral code.
                  </p>
                </div>
                {steps.slice(1).map((step, index) => (
                  <OnboardingStep
                    key={index + 2}
                    stepNumber={index + 2}
                    title={step.title}
                    description={step.description}
                  />
                ))}
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/5e2391584c2dc4aecbaa6240873c5133775f46d9?placeholderIfAbsent=true"
                alt="Doctor onboarding illustration"
                className="aspect-[1.61] object-contain w-full max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[68px] pl-[100px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <div className="flex max-w-full w-[3784px] items-stretch gap-8 flex-wrap">
          <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="self-center flex items-center gap-9 text-xl text-[rgba(58,100,60,1)] font-normal text-center leading-[1.2] flex-wrap max-md:max-w-full">
              <button
                onClick={() => setActiveTab('consultations')}
                className={`self-stretch flex items-center gap-1.5 overflow-hidden whitespace-nowrap justify-center my-auto px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'consultations'
                    ? 'bg-[rgba(58,100,60,1)] text-white'
                    : 'bg-[rgba(255,247,226,1)] border border-[rgba(58,100,60,0.5)] border-solid'
                }`}
              >
                <div className="self-stretch my-auto">Consultations</div>
              </button>
              <button
                onClick={() => setActiveTab('payment')}
                className={`self-stretch flex items-center gap-1.5 overflow-hidden justify-center my-auto px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'payment'
                    ? 'bg-[rgba(58,100,60,1)] text-white'
                    : 'bg-[rgba(255,247,226,1)] border border-[rgba(58,100,60,0.5)] border-solid'
                }`}
              >
                <div className="self-stretch my-auto">Payment withdrawal</div>
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`self-stretch flex items-center gap-1.5 overflow-hidden whitespace-nowrap justify-center my-auto px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'schedule'
                    ? 'bg-[rgba(58,100,60,1)] text-white'
                    : 'bg-[rgba(255,247,226,1)] border border-[rgba(58,100,60,0.5)] border-solid'
                }`}
              >
                <div className="self-stretch my-auto">Schedule</div>
              </button>
            </div>
            <div className="bg-[rgba(255,247,226,1)] flex w-full flex-col items-center justify-center mt-7 px-[70px] py-[25px] rounded-xl max-md:max-w-full max-md:px-5">
              <div className="w-[977px] max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[33%] max-md:w-full max-md:ml-0">
                    <div className="text-2xl text-[rgba(58,100,60,1)] font-bold mt-[23px] max-md:mt-10">
                      <div>Value Your Practice</div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/1f6ca79f2da0b55f5124b59fe7ab47a0fc3fa604?placeholderIfAbsent=true"
                        alt="Practice value interface"
                        className="aspect-[0.5] object-contain w-[216px] mt-4 max-md:mr-1.5"
                      />
                    </div>
                  </div>
                  <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch text-2xl text-[rgba(58,100,60,1)] font-bold max-md:mt-10">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/1e1bc83a44887caa50a5191c1bab5c823d162354?placeholderIfAbsent=true"
                        alt="Healing journey interface"
                        className="aspect-[0.5] object-contain w-[216px] self-center max-w-full"
                      />
                      <div className="mt-4">Today's Healing Journey</div>
                    </div>
                  </div>
                  <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="grow text-2xl text-[rgba(58,100,60,1)] font-bold mt-[23px] max-md:mt-10">
                      <div>Consultation Details</div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/7b924968dc999b1070ebd2a16bed85c0be6e2e10?placeholderIfAbsent=true"
                        alt="Consultation details interface"
                        className="aspect-[0.5] object-contain w-[216px] ml-3 mr-[11px] mt-[21px] max-md:mx-2.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[rgba(255,247,226,1)] flex w-[68px] shrink-0 h-[560px] mt-[76px] rounded-xl max-md:mt-10" />
        </div>
      </div>

      <button
        onClick={handleJoinNow}
        className="bg-[rgba(58,100,60,1)] self-center flex min-h-14 flex-col items-center text-xl text-white font-bold text-center justify-center mt-[38px] px-9 py-[15px] rounded-xl max-md:px-5 hover:bg-[rgba(58,100,60,0.9)] transition-colors"
      >
        <div>Join Now</div>
      </button>
    </section>
  );
};
