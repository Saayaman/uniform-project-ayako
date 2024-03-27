import { FC, SVGProps } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useFakeCartContext } from './FakeCartProvider';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

type Styles = {
  link?: string;
};

export type Props = {
  link: Types.ProjectMapLink;
  styles?: Styles;
};


const CartIcon: FC<Props> = ({ link, styles }) => {
  const { totalFakeCartItemsCount } = useFakeCartContext();
  if (!link) {
    return null;
  }

  return (
    <Link
      aria-label="header-cart"
      className={classNames('h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500', styles?.link, {
        'justify-between': Boolean(totalFakeCartItemsCount),
      })}
      href={link?.path}
    >
      {Boolean(totalFakeCartItemsCount) && (
        <div className="full pr-1.5 navbar-item font-extrabold">{totalFakeCartItemsCount}</div>
      )}
      <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true" />
      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
      <span className="sr-only">items in cart, view bag</span>
    </Link>
  );
};
export default CartIcon;
