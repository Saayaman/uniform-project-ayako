import { FC, useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { checkIsCurrentRoute } from './helpers';
import { LinkProps } from '.';

export const NavigationGroup: FC<LinkProps> = ({ title, link, styles }) => {
  const router = useRouter();
  const isCurrentRoute = useMemo(() => checkIsCurrentRoute(router, link), [router, link]);

  return (
    <Link
      className={classNames('flex items-center text-sm font-medium text-gray-700 hover:text-gray-800', styles?.link, {
        'font-extrabold': isCurrentRoute,
        [styles?.activeLink || '']: isCurrentRoute,
      })}
      href={link?.path || '#'}
    >
      {title}
    </Link>
  );
};
