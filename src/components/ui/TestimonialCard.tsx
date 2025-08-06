
import React from 'react';

interface TestimonialCardProps {
  name: string;
  credentials: string;
  avatarSrc: string;
  testimonial: string;
  rating: number;
  size?: 'small' | 'medium' | 'large';
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  credentials,
  avatarSrc,
  testimonial,
  rating,
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'w-[347px] px-6 py-[19px]',
    medium: 'w-[347px] px-6 py-[18px]',
    large: 'w-[480px] px-[25px] py-[34px]'
  };

  const avatarSizes = {
    small: 'w-11',
    medium: 'w-11',
    large: 'w-[68px]'
  };

  const nameSizes = {
    small: 'text-sm',
    medium: 'text-sm',
    large: 'text-lg'
  };

  const testimonialSizes = {
    small: 'text-xs leading-[18px]',
    medium: 'text-xs leading-[18px]',
    large: 'text-base leading-6'
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={index < rating 
          ? "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/a7128b636a48ceb85e2309329ea2e320df7056e5?placeholderIfAbsent=true"
          : "https://api.builder.io/api/v1/image/assets/87dd4a6551034f00a31ceed6d84e01a6/ff6d9cbacb79fe9e5ec495bde3d2417243084a3b?placeholderIfAbsent=true"
        }
        alt={index < rating ? "filled star" : "empty star"}
        className={`aspect-[1] object-contain ${size === 'large' ? 'w-[17px]' : 'w-[11px]'} self-stretch shrink-0 my-auto`}
      />
    ));
  };

  return (
    <article className={`bg-[rgba(255,238,195,1)] self-stretch flex min-w-60 flex-col items-stretch my-auto rounded-lg ${sizeClasses[size]} max-md:px-5`}>
      <header className="flex items-center gap-3 overflow-hidden py-0.5">
        <img
          src={avatarSrc}
          alt={`${name} avatar`}
          className={`aspect-[1] object-contain ${avatarSizes[size]} self-stretch shrink-0 my-auto rounded-[50%]`}
        />
        <div className="self-stretch flex flex-col my-auto">
          <h4 className={`text-[rgba(51,51,51,1)] ${nameSizes[size]} font-semibold ${size === 'large' ? 'self-center' : 'text-center'}`}>
            {name}, <span className="font-normal text-[rgba(102,102,102,1)]">{credentials}</span>
          </h4>
          <div className="flex items-center gap-1.5 mt-1">
            {renderStars()}
          </div>
        </div>
      </header>
      <blockquote className={`text-[rgba(126,126,126,1)] ${testimonialSizes[size]} font-normal ${size === 'large' ? 'mt-6' : 'mt-[15px]'} max-md:max-w-full`}>
        {testimonial}
      </blockquote>
    </article>
  );
};

