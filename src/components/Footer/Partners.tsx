import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const partners = [
  {
    name: 'Prothom Alo',
    logo: 'data:image/png;base64,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',
    url: 'https://www.prothomalo.com'
  },
  {
    name: 'ICT Division',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Information_and_Communication_Technology_Division.svg/400px-Information_and_Communication_Technology_Division.svg.png',
    url: 'https://ictd.gov.bd'
  },
  {
    name: 'BASIS',
    logo: 'https://pbs.twimg.com/profile_images/843059426810515456/9mYBb-cS_400x400.jpg',
    url: 'https://basis.org.bd'
  },
  {
    name: 'TCB',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHX2OtWa3WOjrN5PbfSuPCwMPxWASowmfrQ&s',
    url: 'http://www.tcb.gov.bd'
  }
];

export function Partners() {
  const { language } = useLanguage();
  
  return (
    <div className="py-8 border-t border-gray-200">
      <h3 className="text-center text-lg font-semibold mb-6">
        {language === 'bn' ? 'সহযোগিতায়' : 'Supported By'}
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            // className="grayscale hover:grayscale-0 transition-all"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}