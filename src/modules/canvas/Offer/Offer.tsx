import { FC } from 'react';
import { OfferProps } from '.';

export const Offer: FC<OfferProps> = ({ name, href, description }) => {
  return (
    <li key={name} className="flex flex-col">
      <a href={href} className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10">
        <p className="text-sm text-gray-500">{name}</p>
        <p className="font-semibold text-gray-900">{description}</p>
      </a>
    </li>
  );
};
