import { registerUniformComponent } from '@uniformdev/canvas-react';
import ProductOverview from './ProductOverview';

export type ProductOverviewProps = {
  name: string;
  price: string;
  id: string;
  size?: string[] | [];
  colors?: Types.Color[] | [] | undefined;
  description: string;
  images?: Types.ContentfulImage[] | [];
  details: Types.ProductDetails[];
  rating: number;
};

export type ColorProps = {
  colors?: Types.Color[];
};

registerUniformComponent({
  type: 'productOverview',
  component: ProductOverview,
});

export default ProductOverview;
