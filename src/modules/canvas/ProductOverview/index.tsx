import { registerUniformComponent } from '@uniformdev/canvas-react';
import ProductOverview from './ProductOverview';

export type ProductOverviewProps = {
  name: string;
  price: string;
  id: string;
  features: string[];
  size: string[];
  colors: string[];
  description: string;
  imageUrl: string;
  images: Types.UniformImage[];
};

registerUniformComponent({
  type: 'productOverview',
  component: ProductOverview,
});

export default ProductOverview;
