'use client';
import React, { useState, useEffect } from 'react';
import { getGuidePageRes } from '@/helper';
import { guideData } from '@/typescript/layout';

const GuidePage: React.FC = () => {
  const [guideData, setGuideData] = useState<guideData | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredGuides, setFilteredGuides] = useState<guideData['guides_section'] | undefined>(undefined);
  const [hoveredGuide, setHoveredGuide] = useState<guideData['guides_section'][0] | null>(null); // Track hovered guide details

  useEffect(() => {
    const fetchGuideData = async () => {
      try {
        const data = await getGuidePageRes();
        setGuideData(data[0]);
        setFilteredGuides(data[0]?.guides_section || []);
      } catch (error) {
        console.error('Error fetching guide data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuideData();
  }, []);

  useEffect(() => {
    if (guideData) {
      const filtered = guideData.guides_section.filter((guide) =>
        guide.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredGuides(filtered);
    }
  }, [searchQuery, guideData]);

  if (loading) {
    return <div className="text-center text-teal-500">Loading...</div>;
  }

  if (!guideData || !guideData.guides_section || guideData.guides_section.length === 0) {
    return <div className="text-center text-red-500">Failed to load data</div>;
  }

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-75 animate-gradient"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-6xl font-extrabold drop-shadow-xl">{guideData.title}</h1>
          <p className="mt-4 text-xl font-light drop-shadow-lg">
            {guideData.description || 'Default Description'}
          </p>
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Search by location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-lg py-3 px-5 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
            {guideData.heading || 'Our Featured Guides'}
          </h2>

          {filteredGuides && filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredGuides.map((guide, index) => (
                <div
                  key={index}
                  className="relative bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden hover:scale-105 hover:rotate-1 transition-transform duration-300"
                  onClick={() => setHoveredGuide(guide)}
                >
                  <img
                    src={guide.profile_photo.url || '/images/default-guide.jpg'}
                    alt={guide.name}
                    className="h-56 w-full object-cover object-top brightness-90 hover:brightness-100 transition duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{guide.name}</h3>
                    <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
                      <span className="material-icons text-teal-400">location_on</span>
                      {guide.location}
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-gray-300">
                      <span className="material-icons text-yellow-400">star</span>
                      Expertise: <span className="font-medium">{guide.expertise}</span>
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-yellow-400">
                      <span className="material-icons text-yellow-500">grade</span>
                      Rating: <span className="font-medium">{guide.rating} ⭐</span>
                    </p>
                    <p className="mt-4 text-teal-500 font-semibold cursor-pointer hover:text-teal-400">
                      Click here to learn more
                    </p>
                    <a
                      href={guide.contactUsLink}
                      className="mt-6 inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-2xl transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Guide
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400">No guides found for this location.</div>
          )}
        </div>
      </main>

      {/* Modal Popup */}
      {hoveredGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
            <div className="flex">
              <div className="w-1/2">
                <img
                  src={hoveredGuide.profile_photo.url || '/images/default-guide.jpg'}
                  alt={hoveredGuide.name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-1/2 p-6">
                <h3 className="text-2xl font-bold">{hoveredGuide.name}</h3>
                <p className="mt-2 text-gray-600">
                  <strong>Location:</strong> {hoveredGuide.location}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Expertise:</strong> {hoveredGuide.expertise}
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Rating:</strong> {hoveredGuide.rating} ⭐
                </p>
                <p className="mt-4 text-gray-700">{hoveredGuide.description1 || 'No additional details available.'}</p>
                <button
                  className="mt-6 bg-red-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-600 transition"
                  onClick={() => setHoveredGuide(null)}
                >
                  Close
                </button>
              </div>
            </div>x
          </div>
        </div>
      )}
    </div>
  );
};

export default GuidePage;

