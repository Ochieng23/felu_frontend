"use client"; // Add this at the very top to make the component a Client Component

import Link from "next/link";
import Image from "next/image";
import { FaHome, FaUpload, FaStore, FaCog, FaSignOutAlt } from "react-icons/fa";

const navItems = [
  { href: "/overview", label: "Overview", icon: FaHome },
  { href: "/upload", label: "Upload", icon: FaUpload },
  { href: "/vendors", label: "My Ads", icon: FaStore },
  { href: "/settings", label: "Settings", icon: FaCog },
];

export default function Sidebar() {
  const handleLogout = () => {
    // Replace with your real logout logic (e.g., remove token, redirect)
    alert("You have been logged out!");
  };

  return (
    <aside
      className="fixed inset-y-0 left-0 bg-blue-50 flex flex-col border-r p-4 w-20 md:w-40"
      aria-label="Sidebar Navigation"
    >
      {/* Logo Section */}
      <div className="flex justify-center items-center mt-12">
        <Link href="/overview" className="flex">
          <Image
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1739871355/Logo_Icon_Colored_1_3_b368w4.png"
            alt="Company Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col flex-grow mt-8" aria-label="Main Navigation">
        <ul className="flex flex-col mt-[20%] h-full">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={href} className="w-full">
              <Link
                href={href}
                className="flex items-center justify-start w-full p-3 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label={label}
              >
                <Icon className="text-gray-700" size={16} aria-hidden="true" />
                <span className="ml-4 text-sm">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex items-center w-full p-3 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label="Log-out"
        >
          <FaSignOutAlt className="text-gray-700" size={16} aria-hidden="true" />
          <span className="ml-4 text-sm">Log-out</span>
        </button>
      </div>
    </aside>
  );
}
