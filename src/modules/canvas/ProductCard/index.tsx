import { registerUniformComponent } from '@uniformdev/canvas-react';
import { ProductCard } from './ProductCard';

export type ProductCardProps = {
  imageUrl: string;
  price: string;
  name: string;
  color: string;
  id: string;
  href: {
    path: string;
  }
};

registerUniformComponent({
  type: 'productCard',
  component: ProductCard,
});

export default ProductCard;
