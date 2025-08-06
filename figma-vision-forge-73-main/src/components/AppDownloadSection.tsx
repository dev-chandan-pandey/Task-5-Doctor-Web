import React from 'react';

const features = [
  "Access to Prescriptions",
  "Track health efficiently",
  "Direct Chat with Doctors",
  "In-app reminders for consultations"
];

export const AppDownloadSection = () => {
  return (
    <footer className="bg-[rgba(255,247,226,1)] flex w-full flex-col overflow-hidden items-stretch mt-24 pt-[70px] border-[rgba(220,216,205,1)] border-t max-md:max-w-full max-md:mt-10">
      <div className="self-center w-full max-w-[1240px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col mt-[7px] max-md:max-w-full max-md:mt-10">
              <h2 className="text-[rgba(58,100,59,1)] text-4xl font-bold leading-[50px] self-stretch max-md:max-w-full">
                Download Amrutam Ayurveda App Now
              </h2>
              <p className="text-[rgba(103,103,103,1)] text-xl font-normal tracking-[-0.2px] mt-8 max-md:max-w-full">
                The Amrutam Ayurveda App is your one-stop app for all things
                Ayurveda! Apart from mimicking the website, the app has added
                benefits
              </p>
              <div className="flex w-[474px] max-w-full items-stretch gap-[34px] mt-11 max-md:mt-10">
                {features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="bg-[rgba(255,247,226,1)] border flex h-[81px] flex-col overflow-hidden items-center justify-center flex-1 px-3 rounded-2xl border-[rgba(220,216,205,1)] border-solid">
                    <div className="flex min-h-[83px] w-full max-w-[196px] items-center gap-3">
                      <div className="self-stretch relative flex min-h-10 gap-2.5 w-10 my-auto">
                        <div className="bg-[rgba(255,247,226,1)] shadow-[0px_4px_15px_rgba(0,0,0,0.04)] border z-0 flex w-10 shrink-0 h-10 rounded-[50%] border-[rgba(58,100,59,1)] border-solid" />
                        <img
                          src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/407b14698b1594358807ff2e1a051f13a9351778?placeholderIfAbsent=true"
                          className="aspect-[0.96] object-contain w-[22px] absolute z-0 shrink-0 h-[23px] right-[9px] bottom-2"
                          alt="Feature icon"
                        />
                      </div>
                      <div className="text-[rgba(58,100,59,1)] text-base font-normal leading-[22px] w-36 my-auto">
                        {feature}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex w-[474px] max-w-full items-stretch gap-[34px] mt-4">
                {features.slice(2, 4).map((feature, index) => (
                  <div key={index + 2} className="bg-[rgba(255,247,226,1)] border flex h-[81px] flex-col overflow-hidden items-center justify-center flex-1 px-3 rounded-2xl border-[rgba(220,216,205,1)] border-solid">
                    <div className="flex min-h-[83px] w-full max-w-[196px] items-center gap-3">
                      <div className="self-stretch relative flex min-h-10 gap-2.5 w-10 my-auto">
                        <div className="bg-[rgba(255,247,226,1)] shadow-[0px_4px_15px_rgba(0,0,0,0.04)] border z-0 flex w-10 shrink-0 h-10 rounded-[50%] border-[rgba(58,100,59,1)] border-solid" />
                        <img
                          src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/407b14698b1594358807ff2e1a051f13a9351778?placeholderIfAbsent=true"
                          className="aspect-[0.96] object-contain w-[22px] absolute z-0 shrink-0 h-[23px] right-[9px] bottom-2"
                          alt="Feature icon"
                        />
                      </div>
                      <div className="text-[rgba(58,100,59,1)] text-base font-normal leading-[22px] w-36 my-auto">
                        {feature}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-[15px] flex-wrap mt-[59px] max-md:mt-10">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/f740e9ebd9cdb9ae75eb321908235353c34a92df?placeholderIfAbsent=true"
                    className="aspect-[3.38] object-contain w-[243px] min-w-60"
                    alt="Download on App Store"
                  />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/943630b17f903c5687bb05271124e4a84b0c1419?placeholderIfAbsent=true"
                    className="aspect-[3.4] object-contain w-[245px] min-w-60"
                    alt="Get it on Google Play"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[41%] max-md:w-full max-md:ml-0">
                    <div className="bg-[rgba(58,100,59,1)] overflow-hidden text-white w-full mt-[145px] pt-[17px] rounded-2xl max-md:mt-10">
                      <div className="flex flex-col pl-[17px] pr-[39px] max-md:pr-5">
                        <div className="text-sm font-medium">
                          Engagement Time
                        </div>
                        <div className="text-lg font-bold mt-3">
                          6m 33s
                        </div>
                      </div>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/af7ce891b706254094091b50ba5c5804a7631f85?placeholderIfAbsent=true"
                        className="aspect-[3.13] object-contain w-[163px] max-w-full mt-[18px] rounded-[10px]"
                        alt="Engagement chart"
                      />
                    </div>
                  </div>
                  <div className="w-[59%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/babe89a71370160aa73b4a12f01ffbcdd24369a5?placeholderIfAbsent=true"
                      className="aspect-[0.82] object-contain w-full grow max-md:mt-10"
                      alt="App preview"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(223,223,199,1)] border self-center flex w-[170px] max-w-full items-center gap-2.5 overflow-hidden text-[rgba(58,100,59,1)] whitespace-nowrap mt-[38px] px-[34px] py-5 rounded-2xl border-[rgba(58,100,59,0.31)] border-solid max-md:px-5">
                <div className="self-stretch flex w-[102px] flex-col items-center my-auto">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/04542a7acc7f6b614b80059fa76dd85c42864456?placeholderIfAbsent=true"
                    className="aspect-[1.7] object-contain w-full rounded-[0px_0px_0px_0px]"
                    alt="Download stats"
                  />
                  <div className="w-[76px] mt-2.5">
                    <div className="text-lg font-normal text-center">
                      10K+
                    </div>
                    <div className="text-sm font-bold mt-1">
                      Downloads
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(217,217,217,1)] flex shrink-0 h-0 mt-[83px] max-md:max-w-full max-md:mt-10" />
      <img
        src="https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/aededcac5ccf25405ed70abb8a1dae10cb7e1cf4?placeholderIfAbsent=true"
        className="aspect-[3.11] object-contain w-full max-md:max-w-full"
        alt="Footer decoration"
      />
    </footer>
  );
};
