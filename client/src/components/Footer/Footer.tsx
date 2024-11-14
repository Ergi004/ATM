import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary z-30 flex flex-col sapce-x-6 max-md:text-center max-md:justify-center  relative text-white pt-12 pb-6 mb-0">
      <div className="container mx-auto w-full md:space-x-5 px-6 md:px-14 md:flex ">
        <div className="mb-8 md:w-1/4">
          <h2 className="text-2xl font-semibold mb-4">Your Bank</h2>
          <p className="text-gray-400">
            Trusted partner for all your banking needs, committed to secure and
            efficient services.
          </p>
        </div>

        <div className="mb-8 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400">
            <li>Phone: +123 456 7890</li>
            <li>Email: support@yourbank.com</li>
            <li>Address: 123 Finance Street, Business City</li>
            <li>Mon - Fri: 9am - 6pm</li>
          </ul>
        </div>

        <div className="mb-8 md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-300" href="/loans">
                Loans & Mortgages
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/savings">
                Savings Accounts
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/credit-cards">
                Credit Cards
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/investment">
                Investment Solutions
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-gray-300" href="/help">
                Help & Support
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 p-6 md:px-14">
        <div className="container mx-auto flex max-sm:flex-col-reverse justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Bank. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
