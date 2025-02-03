'use client';
import React, { useEffect, useState } from "react";
import { getRegisterGuideRes } from "@/helper"; // Adjust the import path based on your project structure


// Define type for the form data structure
interface FormData {
  title: string;
  full_name: { label: string; placeholder: string };
  email_address: { label: string; placeholder: string };
  phone_number: { label: string; placeholder: string };
  location: { label: string; placeholder: string };
  language_spoken: { label: string; placeholder: string };
  years_of_experience: { label: string; placeholder: string };
  areas_of_expertise: { label: string; placeholder: string };
  upload_id_proof: { label: string; placeholder: string };
  terms_and_conditions: { label: string; link_label: string };
}

const RegisterGuide: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Fetch data from Contentstack
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRegisterGuideRes();
        setFormData(response);
      } catch (error) {
        console.error("Error fetching Register Guide data:", error);
      }
    };

    fetchData();
  }, []);

  if (!formData) {
    return <div>Loading...</div>;
  }

  // Extract fields from the fetched data
  const {
    title,
    full_name,
    email_address,
    phone_number,
    location,
    language_spoken,
    years_of_experience,
    areas_of_expertise,
    upload_id_proof,
    terms_and_conditions,
  } = formData;

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formValues); // Log form data to console
    setSuccessMessage("Form submitted successfully!!!");
  };

  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-gradient-to-r from-teal-500 to-teal-800 flex items-center justify-center py-8">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl">
          <h1 className="text-3xl font-extrabold text-teal-700 mb-6 text-center">
            {title || "Register as a Travel Guide"}
          </h1>
          {successMessage && (
            <div className="text-green-600 font-medium mb-4 text-center">
              {successMessage}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="full_name" className="block text-lg font-medium text-gray-700">
                {full_name?.label || "Full Name"}
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder={full_name?.placeholder || "Enter your full name"}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email_address" className="block text-lg font-medium text-gray-700">
                {email_address?.label || "Email Address"}
              </label>
              <input
                type="email"
                id="email_address"
                name="email_address"
                placeholder={email_address?.placeholder || "Enter your email address"}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone_number" className="block text-lg font-medium text-gray-700">
                {phone_number?.label || "Phone Number"}
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder={phone_number?.placeholder || "Enter your phone number"}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-lg font-medium text-gray-700">
                {location?.label || "Location"}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder={location?.placeholder || "Enter your location"}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Language Spoken */}
            <div>
              <label htmlFor="language_spoken" className="block text-lg font-medium text-gray-700">
                {language_spoken?.label || "Languages Spoken"}
              </label>
              <input
                type="text"
                id="language_spoken"
                name="language_spoken"
                placeholder={language_spoken?.placeholder || "E.g., English, Spanish"}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Years of Experience */}
            <div>
              <label htmlFor="years_of_experience" className="block text-lg font-medium text-gray-700">
                {years_of_experience?.label || "Years of Experience"}
              </label>
              <input
                type="number"
                id="years_of_experience"
                name="years_of_experience"
                placeholder={years_of_experience?.placeholder || "Enter your experience"}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Areas of Expertise (used correctly now) */}
            <div>
              <label htmlFor="areas_of_expertise" className="block text-lg font-medium text-gray-700">
                {areas_of_expertise?.label || "Areas of Expertise"}
              </label>
              <textarea
                id="areas_of_expertise"
                name="areas_of_expertise"
                placeholder={areas_of_expertise?.placeholder || "Describe your expertise"}
                rows={3}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500"
                required
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Upload ID Proof (used correctly now) */}
            <div>
              <label htmlFor="upload_id_proof" className="block text-lg font-medium text-gray-700">
                {upload_id_proof?.label || "Upload ID Proof"}
              </label>
              <input
                type="file"
                id="upload_id_proof"
                name="upload_id_proof"
                accept=".jpg,.jpeg,.png,.pdf"
                className="mt-2 block w-full"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Terms & Conditions (used correctly now) */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms_and_conditions"
                name="terms_and_conditions"
                className="h-5 w-5 text-teal-600 border-gray-300 rounded"
                required
                onChange={handleInputChange}
              />
              <label htmlFor="terms_and_conditions" className="ml-2 text-lg text-gray-600">
                {terms_and_conditions?.label || "I agree to the"}{" "}
                <a href="#" className="text-teal-600 underline">
                  {terms_and_conditions?.link_label || "terms and conditions"}
                </a>.
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white p-3 rounded-xl shadow-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterGuide;
