import { registerUniformComponent } from '@uniformdev/canvas-react';
import ProductSection from './ProductSection';

export type ProductSectionProps = {
  title: string;
};

registerUniformComponent({
  type: 'productSection',
  component: ProductSection,
});

export default ProductSection