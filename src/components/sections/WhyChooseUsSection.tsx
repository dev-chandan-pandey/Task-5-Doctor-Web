
import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';

export const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      title: "Instant FREE 5-Mins Call",
      description: "We understand the importance of building trust with your patients. That's why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/2a17a2162f422624968865b8583c9926d4af30a6?placeholderIfAbsent=true",
      imageAlt: "Doctor consultation interface"
    },
    {
      title: "Forum for Meaningful Connections",
      description: "We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the \"Thoughts\" section allows you to share deeper Ayurvedic wisdom.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/45c535d1265a432911dae383f7afb1390168830f?placeholderIfAbsent=true",
      imageAlt: "Forum interface mockup",
      reverse: true
    },
    {
      title: "Choose Your Session Mode",
      description: "Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/45c535d1265a432911dae383f7afb1390168830f?placeholderIfAbsent=true",
      imageAlt: "Session mode options"
    },
    {
      title: "Smart Wallet",
      description: "We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/da13dc11583324e208682bff8b7315c46e19381f?placeholderIfAbsent=true",
      imageAlt: "Smart wallet interface",
      reverse: true
    },
    {
      title: "Flexible Work Timing",
      description: "We recognize the importance of managing your time. With the availability toggle in the doctor's app, you control when patients can book consultations, ensuring a balanced and stress-free practice.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/f13fa4033a82681afbe798dbd52282ff0c696793?placeholderIfAbsent=true",
      imageAlt: "Flexible timing interface"
    }
  ];

  return (
    <section className="bg-[rgba(255,247,226,1)] z-0 flex w-full flex-col overflow-hidden items-center pt-8 pb-[113px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex mb-[-23px] w-full max-w-[1212px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <header className="text-center">
          <h2 className="text-[rgba(58,100,60,1)] text-[40px] font-bold tracking-[0.4px] self-center max-md:max-w-full">
            Why Doctors Choose Us?
          </h2>
          <p className="text-[rgba(76,76,76,1)] text-xl font-medium tracking-[0.2px] text-center self-center mt-2 max-md:max-w-full">
            Unlock the Benefits of Smarter Healthcare Management and Patient Care
          </p>
        </header>

        <div className="w-full max-w-[1134px] ml-3.5">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              reverse={feature.reverse}
            />
          ))}
        </div>

        {/* Forum Interface Mockup */}
        <div className="w-full mt-[191px] max-md:max-w-full max-md:mr-[7px] max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <div className="self-stretch my-auto max-md:max-w-full max-md:mt-10">
                <h3 className="text-[rgba(58,100,60,1)] text-[28px] font-bold max-md:max-w-full max-md:mr-2.5">
                  Forum for Meaningful Connections
                </h3>
                <p className="text-[rgba(102,102,102,1)] text-lg font-medium mt-3 max-md:max-w-full">
                  We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.
                </p>
              </div>
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="grow max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[35%] max-md:w-full max-md:ml-0">
                    <div className="bg-neutral-50 flex w-full flex-col overflow-hidden items-stretch mt-[59px] mx-auto rounded-lg max-md:mt-10">
                      <div className="flex items-stretch gap-5 overflow-hidden justify-between bg-[#EAF2EA] pl-1.5 rounded-[0_0_16.807px_16.807px]">
                        <div className="text-[#0C140C] text-xs font-medium leading-none tracking-[-0.12px] my-auto">
                          Forum
                        </div>
                        <div>
                          <div className="bg-[rgba(207,235,207,0.5)] flex shrink-0 h-[35px] rounded-[50%]" />
                          <div className="bg-[rgba(207,235,207,0.5)] flex w-16 shrink-0 h-2 ml-[13px] mt-3 rounded-[50%] max-md:ml-2.5" />
                        </div>
                      </div>
                      <div className="bg-white self-center flex w-full items-stretch gap-px overflow-hidden text-sm font-medium whitespace-nowrap tracking-[-0.14px] leading-none mt-[15px] rounded-[5px]">
                        <div className="bg-white flex min-h-4 items-center gap-0.5 overflow-hidden text-[#2E2F2E] justify-center px-[3px] rounded-[3px]">
                          <div className="self-stretch my-auto">Questions</div>
                        </div>
                        <div className="bg-[rgba(12,20,12,1)] flex min-h-4 items-center gap-0.5 overflow-hidden text-[#EEF4EE] justify-center px-[3px] rounded-[3px]">
                          <div className="self-stretch my-auto">Thoughts</div>
                        </div>
                      </div>
                      <div className="self-center flex items-center gap-[40px_56px] text-[6px] mt-2.5">
                        <div className="self-stretch my-auto">
                          <div className="flex items-center gap-[7px]">
                            <img
                              src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/3999bf7f464d3626ffb236d939edeb17386b898c?placeholderIfAbsent=true"
                              alt="Dr. Marium Roy avatar"
                              className="aspect-[1.06] object-contain w-[18px] self-stretch shrink-0 my-auto rounded-[50%]"
                            />
                            <div className="self-stretch flex flex-col items-stretch my-auto">
                              <div className="text-[rgba(30,30,30,1)] font-normal leading-[1.3]">
                                Dr. Marium Roy
                              </div>
                              <div className="flex items-center gap-[3px] text-[rgba(141,141,141,1)] font-semibold leading-none justify-center">
                                <div className="self-stretch my-auto">5 days ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[rgba(46,47,46,1)] text-[6px] font-normal leading-[11px] ml-3 mt-2 max-md:ml-2.5 max-md:mr-[9px]">
                        <span className="font-bold">Thought :</span>{" "}
                        <span className="font-semibold">Can Ayurveda help with stress and mental health issues?</span>
                      </div>
                      <div className="text-[rgba(31,31,31,1)] text-[6px] font-normal leading-[9px] tracking-[0.06px] z-10 mt-2 max-md:ml-[9px] max-md:mr-[5px]">
                        Ayurveda, one of the world's oldest holistic healing systems, originated in India over 3,000 years ago and is still widely practiced today. It is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. Unlike conventional medicine, Ayurveda emphasizes prevention and the personalized treatment of diseases through a combination of diet, herbal remedies, exercise, and lifestyle adjustments. One fascinating aspect is its concept of "doshas" – Vata, Pitta, and Kapha – which are believed to be the primary life forces or energies that govern our physiological and psychological activities. Ayurvedic practitioners tailor treatments to balance these doshas in each individual, promoting harmony and health.
                      </div>
                    </div>
                  </div>
                  <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex w-full flex-col overflow-hidden mx-auto px-1.5 py-[17px] rounded-lg max-md:mt-10">
                      <div className="self-stretch flex items-stretch gap-[40px_75px]">
                        <div className="flex flex-col text-[rgba(58,100,59,1)] font-semibold flex-1">
                          <div className="text-[8px] leading-none">Questions</div>
                          <div className="flex h-5 w-[61px] items-center text-[6px] leading-none mt-[23px]">
                            <div className="self-stretch flex items-center gap-[5px] my-auto">
                              <img
                                src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/3e71df0d969852a89d5ed274bd52f0fa4ffc8a3f?placeholderIfAbsent=true"
                                alt="Priya Singh avatar"
                                className="aspect-[1.05] object-contain w-[21px] self-stretch shrink-0 my-auto rounded-[50%]"
                              />
                              <div className="self-stretch my-auto">Priya Singh</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch font-medium flex-1">
                          <div className="text-[rgba(184,184,184,1)] text-[8px] leading-none self-center">
                            Thoughts
                          </div>
                          <button className="bg-[rgba(58,100,59,1)] flex min-h-[15px] items-center gap-1 overflow-hidden text-[5px] text-white tracking-[-0.05px] justify-center mt-6 pl-[33px] pr-8 py-1 rounded-[3px] max-md:px-5 hover:bg-[rgba(58,100,59,0.9)] transition-colors">
                            <div className="self-stretch my-auto">Ask Question</div>
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-1.5 mt-5">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/a045c9f6f212c475ef735763e759ddf21bc271a0?placeholderIfAbsent=true"
                          alt="Anonymous user avatar"
                          className="aspect-[1] object-contain w-5 shrink-0 rounded-[41px]"
                        />
                        <div className="w-11">
                          <div className="text-[rgba(30,30,30,1)] text-[7px] font-normal leading-[1.1]">
                            Anonymous
                          </div>
                          <div className="text-[rgba(141,141,141,1)] text-[5px] font-semibold leading-none">
                            5 days ago
                          </div>
                        </div>
                      </div>
                      <div className="text-black text-[6px] font-medium leading-loose mt-[9px]">
                        Question: Can Ayurveda help with stress and mental health issues?
                      </div>
                      <div className="text-[rgba(31,31,31,1)] text-[5px] font-normal leading-[9px] w-60 mt-[7px]">
                        Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
