import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-transparent w-full py-10 absolute top-0"
      style={{ zIndex: 1 }}
    >
      <nav className="container mx-auto px-8 md:px-0 flex items-center">
        <Link href="/">
          <a className="flex-grow">
            <Image
              alt="Logo"
              src="/logo.png"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
        <Link href="/about">
          <a className="mr-8 text-white text-lg border-transparent border-b-4 hover:border-white">
            Nosotros
          </a>
        </Link>
        <Link href="/give">
          <a className="text-white text-lg border-transparent border-b-4 hover:border-white">
            Dar
          </a>
        </Link>
      </nav>
    </div>
  );
}

export function Header2() {
  return (
    <div className="bg-pink w-full py-10" style={{ zIndex: 1 }}>
      <nav className="container mx-auto px-8 md:px-0 flex items-center">
        <Link href="/">
          <a className="flex-grow">
            <Image alt="Logo" src="/logo.png" height="57" width="145" />
          </a>
        </Link>
        <Link href="/about">
          <a className="mr-8 text-black text-lg border-transparent border-b-4 hover:border-black">
            Nosotros
          </a>
        </Link>
        <Link href="/give">
          <a className="text-black text-lg border-transparent border-b-4 hover:border-black">
            Dar
          </a>
        </Link>
      </nav>
    </div>
  );
}
