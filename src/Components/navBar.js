import React, { useState } from 'react';

const Nav = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-indigo-200 sm:py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between ">
            <div className="flex shrink-0">
              <a href="#" title="" className="flex">
                S T R E A M  L I N E
              </a>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setExpanded(!expanded)}
              >
                <span
                  aria-hidden="true"
                  style={{ display: expanded ? 'none' : 'inline-block' }}
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  style={{ display: expanded ? 'inline-block' : 'none' }}
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="hidden md:items-center md:justify-start md:ml-16 md:mr-auto md:space-x-10 md:flex">
              <a
                href="#"
                title="Popular"
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                Popular
              </a>
              <a
                href="#"
                title="Theatre"
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                Theatre
              </a>
              <a
                href="#"
                title="Kids"
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                Kids
              </a>
              <a
                href="#"
                title="Drama"
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                Drama
              </a>
              <a
                href="#"
                title="Comedy"
                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
              >
                Comedy
              </a>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign Up
              </a>
            </div>
            <div className="hidden md:block ml-2">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2 sm:py-2.5 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Sign In
              </a>
            </div>
          </nav>
          
        </div>
      </header>
    </div>
  );
};

export default Nav;
