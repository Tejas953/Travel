'use client'; // Mark the component as a client component

import { useEffect, useState } from 'react';
import { getPrivacyPolicyRes } from '@/helper'; // Import the fetch function

// Define the type for the PrivacyPolicy prop
interface PrivacyPolicyProps {
  title: string;
  description: string;
  introduction: string;
  information_we_collect: string;
  how_we_use_your_information: string;
  sharing_your_information: string;
  data_security: string;
  your_rights: string;
  changes_to_this_privacy_policy: string;
  contact_us: string;
  gmail: string;
  last_updated: string;
  headings?: {
    introduction: string;
    information_we_collect: string;
    how_we_use_your_information: string;
    sharing_your_information: string;
    data_security: string;
    your_rights: string;
    changes_to_this_privacy_policy: string;
    contact_us: string;
  };
}

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicyProps | undefined>(undefined);

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      const policyData = await getPrivacyPolicyRes();
      setPrivacyPolicy(policyData); // Get the first entry from the response
    };

    fetchPrivacyPolicy();
  }, []);

  if (!privacyPolicy) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading Privacy Policy...
      </div>
    );
  }

  const headings = privacyPolicy.headings || {
    introduction: 'Introduction',
    information_we_collect: 'Information We Collect',
    how_we_use_your_information: 'How We Use Your Information',
    sharing_your_information: 'Sharing Your Information',
    data_security: 'Data Security',
    your_rights: 'Your Rights',
    changes_to_this_privacy_policy: 'Changes to This Privacy Policy',
    contact_us: 'Contact Us'
  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen">
        <div className="max-w-4xl mx-auto p-6 md:p-10">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              {privacyPolicy.title || 'Privacy Policy'}
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              {privacyPolicy.description}
            </p>
          </div>

          {/* Content Section */}
          <div className="bg-white p-8 rounded-lg shadow-2xl space-y-8">
            
            <p className="text-sm text-gray-500">Last Updated: {privacyPolicy.last_updated || 'January 26, 2025'}</p>

            {/* Section: Introduction */}
            {privacyPolicy.introduction && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.introduction}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.introduction}</p>
              </section>
            )}

            {/* Section: Information We Collect */}
            {privacyPolicy.information_we_collect && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.information_we_collect}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.information_we_collect}</p>
              </section>
            )}

            {/* Section: How We Use Your Information */}
            {privacyPolicy.how_we_use_your_information && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.how_we_use_your_information}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.how_we_use_your_information}</p>
              </section>
            )}

            {/* Section: Sharing Your Information */}
            {privacyPolicy.sharing_your_information && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.sharing_your_information}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.sharing_your_information}</p>
              </section>
            )}

            {/* Section: Data Security */}
            {privacyPolicy.data_security && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.data_security}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.data_security}</p>
              </section>
            )}

            {/* Section: Your Rights */}
            {privacyPolicy.your_rights && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.your_rights}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.your_rights}</p>
              </section>
            )}

            {/* Section: Changes to Privacy Policy */}
            {privacyPolicy.changes_to_this_privacy_policy && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.changes_to_this_privacy_policy}</h2>
                <p className="text-gray-700 mt-4">{privacyPolicy.changes_to_this_privacy_policy}</p>
              </section>
            )}

            {/* Section: Contact Us */}
            {privacyPolicy.contact_us && (
              <section>
                <h2 className="text-2xl font-semibold text-teal-600">{headings.contact_us}</h2>
                <p className="text-gray-700 mt-4">
                  {privacyPolicy.contact_us}
                  <a
                    href={`mailto:${privacyPolicy.gmail || 'support@travelcompanion.com'}`}
                    className="text-teal-600 hover:underline"
                  >
                    {privacyPolicy.gmail}
                  </a>
                </p>
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;