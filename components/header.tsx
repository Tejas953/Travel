'use client';
import React, { useEffect, useState } from 'react';
import { getHeaderRes } from '@/helper'; // Adjust the import path to your helper file
import { HeaderData } from '@/typescript/layout';

const Header = () => {
  // State to store fetched header data
  const [headerData, setHeaderData] = useState<HeaderData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch homepage data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHeaderRes(); // Fetch data from your API
        setHeaderData(data); // Save data to state
        console.log('fetched data:', data);
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even if there’s an error
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If data is not available
  if (!headerData) {
    return <div>No data available.</div>;
  }

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        {headerData.logo && headerData.logo.url && (
          <div className="flex items-center space-x-2">
            <img src={headerData.logo.url} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-extrabold tracking-wide">
              {headerData.title}
            </h1>
          </div>
        )}

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {headerData.navigation_links.map((item, index) => (
            <a
              key={index}
              href={item.link.href}
              className="text-lg font-medium hover:underline"
            >
              {item.link.title}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* <input
            type="text"
            placeholder={headerData.search_placeholder || 'Search here...'}
            className="hidden md:block px-4 py-2 rounded-full text-sm font-light text-black placeholder-gray-500 focus:outline-none"
          /> */}
          <a
            href={headerData.link?.href || '#'} // Login button link
            className="bg-orange-500 hover:bg-orange-600 text-sm font-semibold text-white px-4 py-2 rounded-full"
          >
            {headerData.link?.title || 'Login'}
          </a>
          <a
            href={headerData.link1?.href || '#'} // Sign Up button link
            className="bg-orange-500 hover:bg-orange-600 text-sm font-semibold text-white px-4 py-2 rounded-full"
          >
            {headerData.link1?.title || 'Login'}
           
          </a>
          <select className="bg-white text-sm font-light text-black px-2 py-1 rounded-md">
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
