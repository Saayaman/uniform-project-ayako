import { FC } from 'react';
import { ProductSectionProps } from '.';
import { UniformSlot } from '@uniformdev/canvas-react';

const ProductSection: FC<ProductSectionProps> = ({ title }) => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <UniformSlot name="productCards" />
      </div>
    </div>
  </div>
);

export default ProductSection;
