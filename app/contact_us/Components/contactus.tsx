'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ContactUsProps {
  title: string;
  heading: string;
  description: string;
  description1: string;
  description3: string;
  name_label: string;
  email_label: string;
  message_label: string;
  name_placeholder: string;
  email_placeholder: string;
  message_placeholder: string;
  submit_button_text: string;
  url: string;
}

const ContactUs: React.FC = () => {
  const [formFields, setFormFields] = useState<ContactUsProps | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(
          'https://cdn.contentstack.io/v3/content_types/contact_us/entries', 
          {
            headers: {
              'api_key': process.env.CONTENTSTACK_API_KEY,
              'access_token': process.env.CONTENTSTACK_DELIVERY_TOKEN,
            },
          }
        );

        if (response.data.entries.length > 0) {
          const data = response.data.entries[0];
          setFormFields({
            title: data.title,
            heading:data.heading,
            description: data.description,
            description1: data.description1,
            description3: data.description3,
            name_label: "Name",
            email_label: "Email",
            message_label: "Message",
            name_placeholder: data.name,  // Use "Tejas" as placeholder, not value
            email_placeholder: data.email, // Use "Tejas@gmail.com" as placeholder, not value
            message_placeholder: "Write your message here...",
            submit_button_text: data.button,
            url: data.url
          });
        } else {
          setError('No form data available.');
        }
        setLoading(false);
      } catch (_error) {
        setError('Failed to load form data.');
        setLoading(false);
      }
      
    };

    fetchFormData();

    // Clear form data after page reload if submitted
    if (localStorage.getItem('formSubmitted') === 'true') {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      localStorage.removeItem('formSubmitted');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show submitted data in console
    console.log('Form Submitted Data:', formData);
    // Show success message
    setSuccessMessage('Form submitted successfully!');
    // Persist submission flag to localStorage
    localStorage.setItem('formSubmitted', 'true');
    // Wait for the reload before clearing the form
    setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
  };

  if (loading) {
    return <div>Loading form...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!formFields) {
    return <div>No data available.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
     <section className="relative bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-extrabold leading-tight mb-6 text-white">{formFields.title}</h1>
      <p className="text-lg mb-8 text-gray-200">{formFields.description}</p>
    </div>
  </section>

      {/* Contact Form Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-600">{formFields.heading}</h2>
          <p className="text-gray-600 mt-4">{formFields.description1}</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800">{formFields.name_label}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-gray-800 placeholder-gray-500"
              placeholder={formFields.name_placeholder}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800">{formFields.email_label}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-gray-800 placeholder-gray-500"
              placeholder={formFields.email_placeholder}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800">{formFields.message_label}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-gray-800 placeholder-gray-500"
              rows={4}
              placeholder={formFields.message_placeholder}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-teal-600 text-white py-3 px-6 rounded-full text-xl hover:bg-teal-700 transition duration-300"
          >
            {formFields.submit_button_text}
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-6 text-green-600 text-center font-semibold">
            {successMessage}
          </div>
        )}
      </section>

      {/* Address Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Address</h2>
          <p className="text-lg text-gray-600 mb-6">
            You can also visit us at our office. We are located at the following address:
          </p>
          <address className="text-xl text-gray-700">
            123 Travel Avenue, Suite 456 <br />
            City, Country 7890
          </address>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
