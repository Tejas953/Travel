'use client';

import React, { useEffect, useState } from 'react';
import { getFooterRes } from '@/helper';

type FooterLink = {
  title: string;
  href: string;
};

type SocialMedia = {
  name: string;
  icon: string; // Assuming the icon is a URL
  link: string;
};

type FooterData = {
  logo: string; // URL to the logo image
  quickLinks: FooterLink[]; // Array of quick links
  socialMedia: SocialMedia[]; // Array of social media items
  copyright: string; // Copyright text
  contactInfo: string; // Contact information
};

// Define expected response structure
type APIResponse = {
  logo: { url: string };
  quick_links: { link: FooterLink }[];
  social_media: { name: string; icon: { url: string }; link: { href: string } }[];
  copy_right: string;
  contact_info: string;
};

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch footer data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: APIResponse = await getFooterRes(); // Enforce type safety on API response
        setFooterData({
          logo: data.logo.url,
          quickLinks: data.quick_links.map((linkObj) => ({
            title: linkObj.link.title,
            href: linkObj.link.href,
          })),
          socialMedia: data.social_media.map((socialObj) => ({
            name: socialObj.name,
            icon: socialObj.icon.url,
            link: socialObj.link.href,
          })),
          copyright: data.copy_right,
          contactInfo: data.contact_info,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching footer data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading footer...</div>;
  }

  if (!footerData) {
    return <div className="text-center py-8">Footer data is not available.</div>;
  }

  return (
    <footer className="bg-white text-gray-800 py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img src={footerData.logo} alt="Logo" className="h-24 mb-4" />
          </div>

          {/* Middle Section: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-lg text-teal-400 mb-3">Quick Links</h4>
            {footerData.quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-800 hover:text-teal-400 transition duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Right Section: Social Media and Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-lg text-teal-400 mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-3">
              {footerData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-teal-400 transition duration-300 transform hover:scale-110"
                >
                  <img src={social.icon} alt={social.name} className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Footer Info */}
            <div className="w-full border-t border-gray-700 pt-4 text-center md:text-left mt-6 text-sm text-gray-600">
              <p>{footerData.copyright}</p>
              <p className="mt-2">
                Contact Us:{" "}
                <a
                  href={`mailto:${footerData.contactInfo}`}
                  className="text-teal-400 hover:text-teal-600 transition duration-300"
                >
                  {footerData.contactInfo}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
