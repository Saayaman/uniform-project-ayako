import { registerUniformComponent } from '@uniformdev/canvas-react';
import ProductOverview from './ProductOverview';

export type ProductOverviewProps = {
  name: string;
  price: string;
  id: string;
  size: string[];
  colors: Types.Color[];
  description: string;
  images?: Types.CloudinaryImageList[] | [];
  details: Types.ProductDetails[];
  rating: number;
};

registerUniformComponent({
  type: 'productOverview',
  component: ProductOverview,
});

export default ProductOverview;
