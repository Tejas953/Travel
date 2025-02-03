'use client';
import React, { useEffect, useState } from 'react';
import { getHomePageRes } from '@/helper'; 
import { HomePageData } from '@/typescript/layout'; 
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link'; // Import Next.js Link

const HomePages = () => {
  const [homePageData, setHomePageData] = useState<HomePageData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePageRes(); 
        setHomePageData(data[0]); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching homepage data:', error);
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="text-2xl font-semibold text-teal-600">Loading...</div>
      </div>
    );
  }

  if (!homePageData) {
    return <div className="text-center text-xl text-gray-500">No data available.</div>;
  }

  return (
    <>
      <Header />
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${homePageData.background_image?.url || '/default-image.jpg'})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12">
          {/* Title with color */}
          <h1 className="text-5xl font-bold mb-4 text-teal-300 text-shadow-lg animate__animated animate__fadeIn">
            {homePageData.title || 'Welcome to Our Platform'}
          </h1>

          {/* Description with color */}
          <p className="text-lg mb-6 max-w-2xl mx-auto text-teal-100">
            {homePageData.description || 'Explore the world with expert guides.'}
          </p>

          <div className="flex space-x-4 flex-wrap justify-center">
            {Array.isArray(homePageData.buttons) &&
              homePageData.buttons.map((button, index) => {
                if (button?.button && button?.link?.href) {
                  return (
                    <Link key={index} href={button.link?.href} passHref>
                      <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl text-white">
                        {button.button}
                      </button>
                    </Link>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePages;
