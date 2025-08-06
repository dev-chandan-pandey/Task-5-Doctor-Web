
// import React from 'react';
// import { HeroSection } from '@/components/HeroSection';
// import { FeatureSection } from '@/components/FeatureSection';
// import { ForumMockup } from '@/components/ForumMockup';

// const Index = () => {
//   return (
//     <main className="bg-[rgba(255,247,226,1)] flex flex-col overflow-hidden items-center pt-8 pb-[113px] px-20 max-md:pb-[100px] max-md:px-5 min-h-screen">
//       <div className="flex w-full max-w-[1212px] flex-col items-stretch max-md:max-w-full">
//         <HeroSection />
        
//         {/* First Feature - Instant FREE 5-Mins Call */}
//         <section className="w-full max-w-[1134px] ml-3.5 mt-[127px] max-md:max-w-full max-md:mt-10">
//           <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//             <div className="w-6/12 max-md:w-full max-md:ml-0">
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/2a17a2162f422624968865b8583c9926d4af30a6"
//                 alt="Doctor consultation illustration"
//                 className="aspect-[1.71] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
//               />
//             </div>
//             <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
//               <div className="flex flex-col items-stretch mt-[51px] max-md:max-w-full max-md:mt-10">
//                 <h2 className="text-[rgba(58,100,60,1)] text-[28px] font-semibold">
//                   <span className="font-medium">Instant</span>{" "}
//                   <span className="font-extrabold">FREE</span>{" "}
//                   <span className="font-medium">5-Mins Call</span>
//                 </h2>
//                 <p className="text-[rgba(102,102,102,1)] text-lg font-medium leading-6 mt-3 max-md:max-w-full">
//                   We understand the importance of building trust with your
//                   patients. That's why Amrutam offers a{" "}
//                   <span className="font-bold text-[rgba(49,46,46,1)]">
//                     free 5-minute call
//                   </span>
//                   , helping you connect instantly and foster lasting patient
//                   relationships with ease.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Second Feature - Forum for Meaningful Connections */}
//         <section className="w-full mt-[191px] max-md:max-w-full max-md:mr-[7px] max-md:mt-10">
//           <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//             <div className="w-6/12 max-md:w-full max-md:ml-0">
//               <div className="self-stretch my-auto max-md:max-w-full max-md:mt-10">
//                 <h2 className="text-[rgba(58,100,60,1)] text-[28px] font-bold max-md:max-w-full max-md:mr-2.5">
//                   Forum for Meaningful Connections
//                 </h2>
//                 <p className="text-[rgba(102,102,102,1)] text-lg font-medium mt-3 max-md:max-w-full">
//                   We value your journey in Ayurveda .The Amrutam Forum helps you
//                   engage with patients, answer questions, while the
//                   "Thoughts" section allows you to share deeper
//                   Ayurvedic wisdom.
//                 </p>
//               </div>
//             </div>
//             <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
//               <ForumMockup />
//             </div>
//           </div>
//         </section>

//         {/* Third Feature - Choose Your Session Mode */}
//         <FeatureSection
//           title="Choose Your Session Mode"
//           description="Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs."
//           imageSrc="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/45c535d1265a432911dae383f7afb1390168830f"
//           imageAlt="Session mode options interface"
//           imagePosition="left"
//         />

//         {/* Fourth Feature - Smart Wallet */}
//         <section className="mt-[130px] max-md:max-w-full max-md:mr-[7px] max-md:mt-10">
//           <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//             <div className="w-[44%] max-md:w-full max-md:ml-0">
//               <div className="flex flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
//                 <h2 className="text-[rgba(58,100,60,1)] text-[28px] font-bold">
//                   Smart Wallet
//                 </h2>
//                 <p className="text-[rgba(102,102,102,1)] text-lg font-medium mt-3 max-md:max-w-full">
//                   We understand the need for seamless transactions. With Amrutam
//                   Wallet, you can easily withdraw payments, and for your
//                   security, a one-time password is sent to your registered
//                   mobile number during withdrawals.
//                 </p>
//               </div>
//             </div>
//             <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/da13dc11583324e208682bff8b7315c46e19381f"
//                 alt="Smart wallet interface"
//                 className="aspect-[2.1] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Fifth Feature - Flexible Work Timing */}
//         <section className="w-full max-w-[1178px] mt-[135px] max-md:max-w-full max-md:mt-10">
//           <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
//             <div className="w-6/12 max-md:w-full max-md:ml-0">
//               <img
//                 src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/f13fa4033a82681afbe798dbd52282ff0c696793"
//                 alt="Flexible timing interface"
//                 className="aspect-[1.59] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
//               />
//             </div>
//             <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
//               <div className="flex flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
//                 <h2 className="text-[rgba(58,100,60,1)] text-[28px] font-bold">
//                   Flexible Work Timing
//                 </h2>
//                 <p className="text-[rgba(102,102,102,1)] text-lg font-medium leading-6 mt-3 max-md:max-w-full">
//                   We recognize the importance of managing your time. With the
//                   availability toggle in the doctor's app, you control when
//                   patients can book consultations, ensuring a balanced and
//                   stress-free practice.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Index;

import React from 'react';
import { TopNavigation } from '@/components/sections/TopNavigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { OnboardingSection } from '@/components/sections/OnboardingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <main className="bg-white relative overflow-hidden pt-[66px] min-h-screen">
      <TopNavigation />
      
      <HeroSection />
      
      <WhyChooseUsSection />
      
      <OnboardingSection />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <ContactSection />
      
      <FooterSection />
    </main>
  );
};

export default Index;


