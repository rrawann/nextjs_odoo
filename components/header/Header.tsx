import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className='text-xl font-bold'>
          YousenTech
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className='hover:text-gray-400'>
              Employees
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-gray-400">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/contact" className='className="hover:text-gray-400"'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;