
import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  children?: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  children,
  titleClassName = "text-[rgba(58,100,60,1)] text-[28px] font-bold",
  containerClassName = "mt-[130px] max-md:max-w-full max-md:mr-[7px] max-md:mt-10"
}) => {
  const imageColumn = (
    <div className="w-6/12 max-md:w-full max-md:ml-0">
      {children || (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="aspect-[1.43] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
        />
      )}
    </div>
  );

  const contentColumn = (
    <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
      <div className="flex flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
        <h2 className={titleClassName}>
          {title}
        </h2>
        <p className="text-[rgba(102,102,102,1)] text-lg font-medium leading-6 mt-3 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className={containerClassName}>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {imagePosition === 'left' ? (
          <>
            {imageColumn}
            {contentColumn}
          </>
        ) : (
          <>
            {contentColumn}
            {imageColumn}
          </>
        )}
      </div>
    </section>
  );
};

