import { ComponentProps, registerUniformComponent } from '@uniformdev/canvas-react';
import CartIcon from './CartIcon';

export type CartIconProps = ComponentProps<{
  link: Types.ProjectMapLink;
}>;

registerUniformComponent({
  type: 'cart',
  component: CartIcon,
});
