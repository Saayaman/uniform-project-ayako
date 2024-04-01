import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { ButtonProps } from './';

const Button: FC<ButtonProps> = ({ href, copy, style, className, onClick, disable = false }) => {
  const buttonStyle = classNames(
    'inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700',
    className,
    {
      'btn-disabled': disable,
    }
  );

  const buttonContent = () => (
    <>
      {copy}
      {style === 'link' && (
        <svg
          className="mx-2 stroke-primary"
          width="23"
          height="25"
          viewBox="0 0 23 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 12.7561L20.4878 12.7561" stroke="stroke-primary" strokeWidth="3" />
          <path d="M10.8823 23L20.881 12.4956L10.8823 2" stroke="stroke-primary" strokeWidth="3" />
        </svg>
      )}
    </>
  );

  return href ? (
    <Link role="button" href={href} target={href.startsWith('http') ? '_blank' : '_self'} className={buttonStyle}>
      {buttonContent()}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonStyle}>
      {buttonContent()}
    </button>
  );
};

export default Button;
