import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

export function Header() {
  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-transparent w-full py-10 absolute top-0"
      style={{ zIndex: 1 }}
    >
      <nav className="container mx-auto px-8 md:px-0 flex items-center">
        <Link href="/">
          <a>
            <Image alt="Logo" src="/logo-white.svg" height="57" width="145" />
          </a>
        </Link>
        <Link href="/about">
          <a className="ml-8 mr-8 text-white text-lg border-transparent border-b-4 hover:border-white">
            Nosotros
          </a>
        </Link>
        <Link href="/give">
          <a className="mr-8 text-white text-lg border-transparent border-b-4 hover:border-white">
            Dar
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-white text-lg border-transparent border-b-4 hover:border-white">
            Blog
          </a>
        </Link>
      </nav>
    </div>
  );
}

export function Header2({ className }) {
  return (
    <div className={`w-full py-10 ${className}`} style={{ zIndex: 1 }}>
      <nav className="container mx-auto px-8 md:px-0 flex items-center">
        <Link href="/">
          <a>
            <Image alt="Logo" src="/logo-black.svg" height="57" width="145" />
          </a>
        </Link>
        <Link href="/about">
          <a className="ml-8 mr-8 text-black text-lg border-transparent border-b-4 hover:border-black">
            Nosotros
          </a>
        </Link>
        <Link href="/give">
          <a className="mr-8 text-black text-lg border-transparent border-b-4 hover:border-black">
            Dar
          </a>
        </Link>
        <Link href="/blog">
          <a className="text-black text-lg border-transparent border-b-4 hover:border-black">
            Blog
          </a>
        </Link>
      </nav>
    </div>
  );
}

Header2.propTypes = {
  className: PropTypes.string,
};
