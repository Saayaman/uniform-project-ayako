import { registerUniformComponent } from '@uniformdev/canvas-react';
import { ProductCard } from './ProductCard';

export type ProductCardProps = {
  productImage: JSON;
  price: string;
  name: string;
  color: string;
  id: string;
  href: string;
};

registerUniformComponent({
  type: 'productCard',
  component: ProductCard,
});

export default ProductCard;
