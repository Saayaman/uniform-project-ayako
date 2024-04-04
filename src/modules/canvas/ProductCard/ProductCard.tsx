import { FC } from 'react';
import { ProductCardProps } from '.';
import { getMediaUrl } from '@/utilities';

export const ProductCard: FC<ProductCardProps> = props => {
  const { id, price, name, color, href, imageUrl } = props;
  console.log('props', props);
  return (
    <div key={id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={'image'}
          src={getMediaUrl(imageUrl)}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href.path}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};
