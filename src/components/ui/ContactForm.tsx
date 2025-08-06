
import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="border flex min-h-[471px] grow items-center gap-6 px-9 py-[38px] rounded-lg border-[rgba(194,194,194,1)] border-solid max-md:mt-6 max-md:px-5">
      <div className="self-stretch min-w-60 w-[646px] my-auto max-md:max-w-full">
        <div className="flex w-full items-center gap-8 justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch min-w-60 overflow-hidden w-[306px] my-auto">
            <label htmlFor="name" className="text-[rgba(58,100,59,1)] text-sm font-normal leading-[25px]">
              Your Name
            </label>
            <div className="max-w-full w-[306px] text-xl text-[rgba(126,126,126,1)] font-medium leading-[35px] mt-2">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Vikas Kumar"
                required
                className="w-full bg-transparent border-none outline-none text-[rgba(126,126,126,1)]"
              />
              <div className="min-h-0.5 w-full border-[rgba(194,194,194,1)] border-solid border-2" />
            </div>
          </div>
          <div className="self-stretch min-w-60 overflow-hidden w-[308px] my-auto">
            <label htmlFor="phone" className="text-[rgba(58,100,59,1)] text-sm font-normal leading-[25px]">
              Your Contact Number
            </label>
            <div className="max-w-full w-[306px] text-xl text-[rgba(126,126,126,1)] font-medium whitespace-nowrap leading-[35px] mt-2">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="8743414476"
                required
                className="w-full bg-transparent border-none outline-none text-[rgba(126,126,126,1)]"
              />
              <div className="min-h-0.5 w-full border-[rgba(194,194,194,1)] border-solid border-2" />
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden mt-6 max-md:max-w-full">
          <label htmlFor="email" className="text-[rgba(58,100,59,1)] text-sm font-normal leading-[25px] max-md:max-w-full">
            Your Email
          </label>
          <div className="w-full text-xl text-[rgba(126,126,126,1)] font-medium whitespace-nowrap leading-[35px] mt-2 max-md:max-w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="vikass@gmail.com"
              required
              className="w-full bg-transparent border-none outline-none text-[rgba(126,126,126,1)] max-md:max-w-full"
            />
            <div className="min-h-0.5 max-w-full w-[646px] border-[rgba(194,194,194,1)] border-solid border-2" />
          </div>
        </div>
        <div className="w-full overflow-hidden mt-6 max-md:max-w-full">
          <label htmlFor="message" className="text-[rgba(58,100,59,1)] text-sm font-normal leading-[25px] max-md:max-w-full">
            Message (Optional)
          </label>
          <div className="w-full text-xl text-[rgba(126,126,126,1)] font-medium leading-[35px] mt-2 max-md:max-w-full">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="I want to On-board as a Doctor"
              rows={3}
              className="w-full bg-transparent border-none outline-none text-[rgba(126,126,126,1)] resize-none"
            />
            <div className="min-h-0.5 max-w-full w-[646px] mt-[59px] border-[rgba(194,194,194,1)] border-solid border-2 max-md:mt-10" />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[rgba(49,89,24,1)] flex min-h-14 w-[236px] max-w-full flex-col items-center text-xl text-white font-bold leading-[35px] justify-center mt-6 pl-12 pr-[47px] py-[11px] rounded-lg max-md:px-5 hover:bg-[rgba(49,89,24,0.9)] transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
};

