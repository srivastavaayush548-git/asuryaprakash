import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Facebook, Twitter } from 'lucide-react';
import { reachMeContent } from '../Data/reachMe';

const ReachMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      comments: ''
    });
  };

  return (
    <div className="min-h-screen pt-4 md:pt-14 relative">
      {/* Background */}
      <div
        className="fixed inset-0 top-12 md:top-14 -z-10 bg-[#F3F3F3]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4 capitalize">
            {reachMeContent.title}
          </h1>

          {/* Intro Text */}
          <p className="text-black text-center mb-4 max-w-3xl mx-auto">
            {reachMeContent.introText}
          </p>

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Contact Form */}
            <div className=" p-2 ">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-black mb-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                    <span className="text-sm font-medium">Name</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-black mb-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                    <span className="text-sm font-medium">Email</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="flex items-center gap-2 text-black mb-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                    <span className="text-sm font-medium">Phone</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>

                {/* Comments Field */}
                <div>
                  <label htmlFor="comments" className="flex items-center gap-2 text-black mb-2">
                    <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                    <span className="text-sm font-medium">Comments</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows="5"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-200 uppercase"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-black">
                      <span className="font-semibold">Phone:</span> {reachMeContent.phone}
                    </p>
                  </div>
                  <div>
                    <p className="text-black">
                      <span className="font-semibold">Address:</span> {reachMeContent.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src={reachMeContent.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="India TV Location"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Follow Me Section */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-black font-medium">Follow Me:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachMe;

