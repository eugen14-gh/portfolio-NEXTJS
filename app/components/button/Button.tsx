import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  color?: 'white' | 'black';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  color = 'white',
  href,
  ...props
}) => {
  // Base styles for both button and link
  const base =
    'relative inline-block overflow-hidden px-12 py-4 rounded-full outline-1 shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 group select-none';

  // Color styles
  const colorClass =
    color === 'black'
      ? 'text-white'
      : 'text-gray-800';

  // Overlay for animated effect
  const overlayClass = [
    'absolute inset-0 w-full h-full z-0 pointer-events-none transition-transform duration-300',
    color === 'black' ? 'bg-white' : 'bg-black',
    'transform -translate-x-full group-hover:translate-x-0',
    color === 'white' ? 'opacity-0 group-hover:opacity-100' : 'opacity-100',
  ].join(' ');

  // Children wrapper for text color transition
  const textClass = [
    'relative z-10 transition-colors duration-300',
    color === 'black'
      ? 'group-hover:text-black'
      : 'group-hover:text-white',
  ].join(' ');

  const content = (
    <>
      <span className={overlayClass} aria-hidden="true" />
      <span className={textClass}>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${colorClass} ${className}`}
        tabIndex={0}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${base} ${colorClass} ${className}`} {...props}>
      {content}
    </button>
  );
};

export default Button;