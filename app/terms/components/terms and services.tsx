'use client';

import { useEffect, useState } from 'react';
import { getTermsAndServicesRes } from '@/helper';

interface TermsAndServicesProps {
  title: string;
  last_updated: string;
  introduction: string;
  eligibility: string;
  use_of_services: string;
  user_responsibilities: string;
  limitations_of_liability: string;
  termination_policy: string;
  changes_to_terms: string;
  governing_law: string;
  contact_us: string;
  gmail: string;
}

const TermsAndServices = () => {
  const [terms, setTerms] = useState<TermsAndServicesProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTermsAndServicesRes();
      setTerms(data);
    };
    fetchData();
  }, []);

  if (!terms) {
    return <div className="flex justify-center items-center h-screen text-gray-500">Loading Terms and Services...</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            {terms.title || 'Terms and Services'}
          </h1>
          <p className="text-sm text-gray-500 mt-4">Last Updated: {terms.last_updated || 'N/A'}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-2xl space-y-8">
          {/* Section: Introduction */}
          {terms.introduction && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">1. Introduction</h2>
              <p className="text-gray-700 mt-4">{terms.introduction}</p>
            </section>
          )}

          {/* Section: Eligibility */}
          {terms.eligibility && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">2. Eligibility</h2>
              <p className="text-gray-700 mt-4">{terms.eligibility}</p>
            </section>
          )}

          {/* Section: Use of Services */}
          {terms.use_of_services && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">3. Use of Services</h2>
              <p className="text-gray-700 mt-4">{terms.use_of_services}</p>
            </section>
          )}

          {/* Section: User Responsibilities */}
          {terms.user_responsibilities && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">4. User Responsibilities</h2>
              <p className="text-gray-700 mt-4">{terms.user_responsibilities}</p>
            </section>
          )}

          {/* Section: Limitations of Liability */}
          {terms.limitations_of_liability && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">5. Limitations of Liability</h2>
              <p className="text-gray-700 mt-4">{terms.limitations_of_liability}</p>
            </section>
          )}

          {/* Section: Termination Policy */}
          {terms.termination_policy && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">6. Termination Policy</h2>
              <p className="text-gray-700 mt-4">{terms.termination_policy}</p>
            </section>
          )}

          {/* Section: Changes to Terms */}
          {terms.changes_to_terms && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">7. Changes to Terms</h2>
              <p className="text-gray-700 mt-4">{terms.changes_to_terms}</p>
            </section>
          )}

          {/* Section: Governing Law */}
          {terms.governing_law && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">8. Governing Law</h2>
              <p className="text-gray-700 mt-4">{terms.governing_law}</p>
            </section>
          )}

          {/* Section: Contact Us */}
          {terms.contact_us && (
            <section>
              <h2 className="text-2xl font-semibold text-teal-600">9. Contact Us</h2>
              <p className="text-gray-700 mt-4">
                {terms.contact_us}
                <a
                  href={`mailto:${terms.gmail || 'support@company.com'}`}
                  className="text-teal-600 hover:underline"
                >
                  {terms.gmail}
                </a>
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndServices;
