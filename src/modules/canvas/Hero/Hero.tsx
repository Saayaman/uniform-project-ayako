import { FC } from 'react';
import { HeroProps } from '.';
import { UniformSlot } from '@uniformdev/canvas-react';
import { formatProjectMapLink, getMediaUrl } from '@/utilities';
import { Button } from '@/components';

export const Hero: FC<HeroProps> = ({ title, description, buttonText, href, image, buttonStyle = 'primary' }) => {
  return (
    <div className="flex flex-col border-b border-gray-200 lg:border-0">
      <nav aria-label="Offers" className="order-last lg:order-first">
        <div className="mx-auto rlg:px-8">
          <ul
            role="list"
            className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          >
            <UniformSlot name="offers" />
          </ul>
        </div>
      </nav>

      <div className="relative">
        <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
        <div className="relative bg-gray-100 lg:bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
              <div className="lg:pr-16">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">{title}</h1>
                <p className="mt-4 text-xl text-gray-600">{description}</p>
                <div className="mt-6">
                  {href && (
                    <Button className="mx-1" href={formatProjectMapLink(href)} copy={buttonText} style={buttonStyle} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <img
            src={image[0].fields.url.value}
            // alt={image?.alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
