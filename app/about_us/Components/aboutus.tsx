'use client';

import React, { useEffect, useState } from 'react';
import { getAboutUsRes } from '@/helper';
import { AboutUsData } from '@/typescript/layout';

const AboutUs: React.FC = () => {
  const [aboutUsData, setAboutUsData] = useState<AboutUsData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch AboutUs data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutUsRes(); // Fetch data from your API
        setAboutUsData(data[0]); // Save data to state
        console.log('fetched data:', data);
        setLoading(false); // Stop loading
      } catch (error) {
        console.error('Error fetching homepage data:', error);
        setLoading(false); // Stop loading even if there’s an error
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  // If data is not available
  if (!aboutUsData) {
    return <div className="text-center py-8">No data available.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-14 px-4">
        <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 text-teal-200">{aboutUsData.title}</h1>
          <p className="text-xl max-w-4xl mx-auto text-cyan-100">{aboutUsData.description}</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-teal-700 mb-8">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            At <span className="text-teal-800">{aboutUsData.title}</span>, we aim to create unforgettable experiences and inspire the world to explore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-10 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Our Mission</h3>
            <p className="text-gray-700">{aboutUsData.mission_vision[0].description}</p>
          </div>
          <div className="bg-white p-10 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Our Vision</h3>
            <p className="text-gray-700">{aboutUsData.mission_vision[1].description}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold text-teal-700 mb-8">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-12">
            Passionate individuals behind <span className="text-teal-800">{aboutUsData.title}</span>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {aboutUsData.team.map((member, index) => (
              <div key={index} className="bg-white p-8 shadow-lg rounded-xl text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.photo.url} // Correctly accessing the URL property
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full border-4 border-teal-600 mb-6"
                />
                <h3 className="text-xl font-semibold text-teal-600">{member.name}</h3>
                <p className="text-gray-500">{member.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-100">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-cyan-100">
            Join thousands of others who trust <span className="text-white">{aboutUsData.title}</span> for their adventures.
          </p>
          <button className="px-8 py-4 bg-cyan-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition-colors duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
