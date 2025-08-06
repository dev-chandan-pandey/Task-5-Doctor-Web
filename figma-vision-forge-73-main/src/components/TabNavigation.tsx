import React, { useState } from 'react';

const tabs = [
  { id: 'consultation', label: 'Consultation' },
  { id: 'wallet', label: 'Wallet' },
  { id: 'forum', label: 'Forum' },
  { id: 'shop', label: 'Shop' }
];

export const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('consultation');

  return (
    <nav className="self-center flex items-center gap-[21px] text-2xl text-[rgba(65,65,65,1)] font-medium whitespace-nowrap text-center flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`self-stretch my-auto transition-colors hover:text-[rgba(58,100,59,1)] ${
            activeTab === tab.id
              ? 'text-[rgba(58,100,59,1)] font-semibold'
              : 'text-[rgba(65,65,65,1)] font-medium'
          }`}
          style={{ width: tab.id === 'consultation' ? '155px' : '131px' }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};
