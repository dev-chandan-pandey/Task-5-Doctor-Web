
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false
}) => {
  return (
    <div className={`w-full ${reverse ? 'mt-[191px]' : 'mt-[127px]'} max-md:max-w-full max-md:mt-10`}>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className={`w-6/12 ${reverse ? 'order-2' : ''} max-md:w-full max-md:ml-0`}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[1.71] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className={`w-6/12 ${reverse ? 'order-1 mr-5' : 'ml-5'} max-md:w-full max-md:ml-0`}>
          <div className="flex flex-col items-stretch mt-[51px] max-md:max-w-full max-md:mt-10">
            <h3 className="text-[rgba(58,100,60,1)] text-[28px] font-semibold">
              {title}
            </h3>
            <p className="text-[rgba(102,102,102,1)] text-lg font-medium leading-6 mt-3 max-md:max-w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

