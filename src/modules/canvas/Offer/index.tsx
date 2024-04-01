import { registerUniformComponent } from '@uniformdev/canvas-react';
import { Offer } from './Offer';

export type OfferProps = {
  name: string;
  href: string;
  description: string;
};

registerUniformComponent({
  type: 'offer',
  component: Offer,
});

export default Offer;
