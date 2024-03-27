import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getMediaUrl } from '../../../../utilities';
import { IconLinkProps } from '.';

export const IconLink: FC<IconLinkProps> = ({ icon, link }) => {
  const imageUrl = getMediaUrl(icon);

  if (!link || !imageUrl) return null;
  return (
    <Link
      target={link.path.includes('http') ? '_blank' : '_self'}
      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
      href={link?.path || '#'}
    >
      <Image src={imageUrl} width="24" height="24" alt="iconLink" />
    </Link>
  );
};
