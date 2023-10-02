import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Trademark Information */}
        <p className="mt-4 text-sm">
          &copy; {new Date().getFullYear()} RuralHealth Connect. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
