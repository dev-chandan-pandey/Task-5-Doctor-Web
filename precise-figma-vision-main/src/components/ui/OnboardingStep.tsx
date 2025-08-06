import React from 'react';

interface OnboardingStepProps {
  stepNumber: number;
  title: string;
  description: string;
}

export const OnboardingStep: React.FC<OnboardingStepProps> = ({
  stepNumber,
  title,
  description
}) => {
  return (
    <div className="bg-[rgba(255,247,226,1)] border w-full mt-3 px-8 py-7 rounded-lg border-[rgba(51,100,63,0.5)] border-solid max-md:max-w-full max-md:px-5">
      <h3 className="text-xl font-bold max-md:max-w-full text-[rgba(58,100,60,1)]">
        Step {stepNumber}: {title}
      </h3>
      <p className="text-sm font-normal mt-2.5 max-md:max-w-full text-[rgba(58,100,60,1)]">
        {description}
      </p>
    </div>
  );
};
