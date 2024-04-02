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
  images: Types.CloudinaryImage[];
};

registerUniformComponent({
  type: 'productOverview',
  component: ProductOverview,
});

export default ProductOverview;
