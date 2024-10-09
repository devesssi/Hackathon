import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main Contact Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
          <p className="text-center text-gray-600 mb-10">
            If you have any questions, feel free to reach out to us using the form below or through our social media accounts.
          </p>

          {/* Contact Form Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Get in Touch</h2>
            <form action="submit_form.php" method="POST" className="space-y-6 max-w-lg mx-auto">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Links Section */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h2>
            <ul className="flex justify-center space-x-6">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-lg font-medium">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 text-lg font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 text-lg font-medium">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-lg font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 text-lg font-medium">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">How can I reach customer support?</h3>
                <p className="text-gray-600 mt-2">
                  You can reach us via email at support@website.com or through the contact form on this page.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">What are your working hours?</h3>
                <p className="text-gray-600 mt-2">
                  Our customer support is available Monday to Friday from 9 AM to 6 PM.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">How can I track my order?</h3>
                <p className="text-gray-600 mt-2">
                  Once your order has been shipped, we will send you an email with tracking information.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Additional Information</h2>
            <p className="text-gray-600">
              For partnership inquiries, please email us at{' '}
              <a href="mailto:partnership@website.com" className="text-blue-600 hover:text-blue-800">
                partnership@website.com
              </a>
              .
            </p>
            <p className="text-gray-600">
              For media or press inquiries, reach out at{' '}
              <a href="mailto:media@website.com" className="text-blue-600 hover:text-blue-800">
                media@website.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;